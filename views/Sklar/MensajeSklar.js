import { useNavigation } from "@react-navigation/native";
import {
  NativeBaseProvider,
  View,
  Image,
  Text,
  List,
  ScrollView,
  Pressable,
  Checkbox,
  Switch, // Importa Switch de NativeBase
} from "native-base";
import globalStyles from "../../styles/global";
import { BlurView } from "expo-blur";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Alert } from "react-native";
import firebaseContextSklarMensaje from "../../context/firebase/SklarState/FirebaseStateSklarMensaje/firebaseContextSklarMensaje";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";
import firebase from "../../firebase/firebase";

const Sklar = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(
    firebaseContextSklarMensaje
  );
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const navigation = useNavigation();

  useEffect(() => {
    obtenerProductos();
  }, []);

  const categoriaDeseada = "mensaje";
  const platillosFiltrados = menu.filter(
    (platillo) => platillo.categoria === categoriaDeseada
  );
  const categorias = { [categoriaDeseada]: platillosFiltrados };

  const [selectedPlatillos, setSelectedPlatillos] = useState({});
  const [leidoStatus, setLeidoStatus] = useState({});

  const handleCheckboxChange = (platilloId, isChecked) => {
    setSelectedPlatillos((prevState) => ({
      ...prevState,
      [platilloId]: isChecked,
    }));
  };

  const handleSwitchChange = async (platilloId, value) => {
    const isLeido = value;
    setLeidoStatus((prevState) => ({
      ...prevState,
      [platilloId]: isLeido,
    }));

    try {
      await firebase.db.collection("sklarMensaje").doc(platilloId).update({
        leido: isLeido,
      });
    } catch (error) {
      console.error("Error actualizando el estado leído:", error);
    }
  };

  const eliminarProducto = async (platilloId) => {
    try {
      await eliminarProductoFirebase(platilloId);
      obtenerProductos();
    } catch (error) {
      console.error("Error eliminando producto:", error);
    }
  };

  const eliminarSeleccionados = () => {
    const platillosIds = Object.keys(selectedPlatillos);
    if (platillosIds.length === 0) {
      Alert.alert(
        "No hay nada seleccionado",
        "Por favor, selecciona al menos un mensaje."
      );
      return;
    }
    Alert.alert(
      "Si confirmas que leíste el mensaje se eliminará",
      "Una vez eliminados no se puede recuperar",
      [
        {
          text: "Confirmar",
          onPress: async () => {
            try {
              const idsAEliminar = Object.keys(selectedPlatillos).filter(
                (id) => selectedPlatillos[id]
              );
              await Promise.all(idsAEliminar.map((id) => eliminarProducto(id)));
              setSelectedPlatillos({});
            } catch (error) {
              console.error("Error eliminando productos:", error);
            }
          },
        },
        { text: "Cancelar", style: "cancel" },
      ]
    );
  };

  const CustomCheckbox = ({ isChecked, onChange, ariaLabel }) => (
    <Checkbox
      boxSize={8}
      borderColor="black"
      shadow={9}
      marginRight={-7}
      isChecked={isChecked}
      onChange={onChange}
      accessibilityLabel={ariaLabel}
      _checked={{
        bg: "green.500",
        borderColor: "blue.500",
        _icon: {
          color: "white",
        },
      }}
      _unchecked={{
        bg: "transparent",
        borderColor: "black",
      }}
    >
      <Text color="white">✓</Text>
    </Checkbox>
  );

  return (
    <NativeBaseProvider style={globalStyles.contenedor}>
      <View flex={1} backgroundColor="#3d783c">
        <ScrollView
          style={{
            backgroundColor: "#3d783c",
            shadow: 9,
            borderColor: "black",
          }}
        >
          <View>
            {Object.keys(categorias).map((categoria) => (
              <View key={categoria}>
                <View style={styles.separador}>
                  <Text style={styles.separadorTexto}>{categoria}</Text>
                </View>
                {categorias[categoria].map((platillo) => (
                  <Pressable
                    key={platillo.id}
                    onPress={() => {
                      const { existencia, ...platillo2 } = platillo;
                      seleccionarPlatillo(platillo2);
                      navigation.navigate("DetalleMensaje");
                    }}
                    style={{ flex: 1 }}
                  >
                    <List
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "#FFF5EE",
                        borderRadius: 15,
                        marginBottom: 10,
                        borderWidth: 4,
                        borderColor: "black",
                      }}
                    >
                      <View mx={3}>
                        <Image
                          source={
                            platillo.imagen
                              ? { uri: platillo.imagen }
                              : require("../../assets/fotos/autos.jpeg")
                          }
                          alt="desde firebase"
                          size={70}
                          borderRadius={16}
                        />
                      </View>
                      
                      <View style={{ flex: 1 }}>
                        <Text>
                          <Text
                            numberOfLines={3}
                            fontWeight="bold"
                            style={styles.descripcion}
                          >
                            Mensaje:
                          </Text>
                          {platillo.descripcion}
                        </Text>
                      </View>

                      {/* Contenedor de Checkbox y Switch en columna */}
                      <View
                        style={{
                          flexDirection: "column",
                          marginLeft: "auto",
                          marginRight: 10,
                        }}
                      >
                        {/* Checkbox para eliminar */}
                        <View style={{ marginBottom: 10 }}>
                          <CustomCheckbox
                            isChecked={!!selectedPlatillos[platillo.id]}
                            onChange={(isChecked) =>
                              handleCheckboxChange(platillo.id, isChecked)
                            }
                            ariaLabel={`Eliminar ${platillo.nombre}`}
                          />
                        </View>

                        {/* Switch para marcar como leído */}
                        <View pointerEvents="auto">
                          <Switch
                            isChecked={!!leidoStatus[platillo.id]}
                            onToggle={(value) =>
                              handleSwitchChange(platillo.id, value)
                            }
                          />
                          <Text
                            style={{
                              color: platillo.leido ? "green" : "red",
                              fontWeight: "bold",
                              marginTop: 8,
                            }}
                          >
                            {platillo.leido ? "Leído" : ""}
                          </Text>
                        </View>
                      </View>
                    </List>
                  </Pressable>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
        <BlurView intensity={90}>
          <View
            paddingY={4}
            alignItems="center"
            safeAreaBottom
            shadow={9}
            marginBottom={5}
          >
            <Pressable onPress={eliminarSeleccionados}>
              <Text style={styles.eliminarTexto}>Eliminar seleccionados</Text>
            </Pressable>
          </View>
        </BlurView>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  separador: {
    backgroundColor: "#000",
  },
  descripcion: {
    maxWidth: 140,
    lineHeight: 15,
  },
  separadorTexto: {
    marginLeft: 10,
    color: "#FFDA00",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  eliminarTexto: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Sklar;

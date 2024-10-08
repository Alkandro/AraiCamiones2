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
} from "native-base";
import globalStyles from "../../styles/global";
import { BlurView } from "expo-blur";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Alert } from "react-native";
import firebaseContextEnriqueMensaje from "../../context/firebase/EnriqueState/FirebaseStateEnriqueMensaje/firebaseContextEnriqueMensaje";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";
import { parseISO, format } from "date-fns";



const Enrique = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(
    firebaseContextEnriqueMensaje
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

  const handleCheckboxChange = (platilloId, isChecked) => {
    setSelectedPlatillos((prevState) => ({
      ...prevState,
      [platilloId]: isChecked,
    }));
  };

  // Función para eliminar un platillo seleccionado
  const eliminarProducto = async (platilloId) => {
    try {
      await eliminarProductoFirebase(platilloId);
      obtenerProductos();
    } catch (error) {
      console.error("Error eliminando producto:", error);
    }
  };

  // Función para confirmar y eliminar los platillos seleccionados
  const eliminarSeleccionados = () => {
    // Verificar si hay algún platillo seleccionado
    const platillosIds = Object.keys(selectedPlatillos);
    if (platillosIds.length === 0) {
      Alert.alert(
        "No hay nada seleccionado",
        "Por favor, selecciona al menos un mensaje."
      );
      return;
    }
    Alert.alert(
      "Si confirmas que leiste el mensaje se eliminará",
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
        bg: "green.500", // Color de fondo cuando está checkeado
        borderColor: "blue.500", // Color del borde cuando está checkeado
        _icon: {
          color: "white", // Color del ícono cuando está checkeado
        },
      }}
      _unchecked={{
        bg: "transparent", // Color de fondo cuando no está checkeado
        borderColor: "black", // Color del borde cuando no está checkeado
      }}
    >
      <Text color="white">✓</Text> {/* Color del texto dentro del Checkbox */}
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
                  >
                    <List
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between", // Distribuir elementos
                        backgroundColor: "#FFF5EE", // Fondo de cada platillo
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
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                         
                        </View>
                        
                        <Text>
                          <Text
                            numberOfLines={3}
                            fontWeight="bold"
                            style={styles.descripcion}
                          >
                            Mensaje:
                          </Text>
                          {""} {platillo.descripcion}
                        </Text>
                        
                      </View>

                      {/* Checkbox para eliminar */}
                      <View style={{ marginLeft: "auto", marginRight: 10 }}>
                        <CustomCheckbox
                          isChecked={!!selectedPlatillos[platillo.id]}
                          onChange={(isChecked) =>
                            handleCheckboxChange(platillo.id, isChecked)
                          }
                          ariaLabel={`Eliminar ${platillo.nombre}`}
                        />
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
    backgroundColor: "#000", // Color de fondo del separador de categorías
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

export default Enrique;



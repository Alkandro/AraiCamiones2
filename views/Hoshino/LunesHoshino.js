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
import firebaseContextHoshino from "../../context/firebase/FirebaseStateHoshino/firebaseContextHoshino";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";
import { parseISO, format } from "date-fns";

// Función para formatear y validar la fecha
const formatFechaEntrega = (fechaEntrega) => {
  try {
    console.log("Valor de fechaEntrega:", fechaEntrega); // Añadido para depuración

    // Verifica si la fecha es nula o indefinida
    if (!fechaEntrega) {
      return "Fecha no disponible";
    }

    // Intenta parsear la fecha si es un string
    if (typeof fechaEntrega === "string") {
      // Intenta usar Date.parse para analizar la cadena
      const parsedDate = Date.parse(fechaEntrega);
      if (!isNaN(parsedDate)) {
        fechaEntrega = new Date(parsedDate);
      } else {
        return "Fecha no válida";
      }
    }

    // Verifica si la fecha es una instancia válida de Date
    if (!(fechaEntrega instanceof Date) || isNaN(fechaEntrega.getTime())) {
      return "Fecha no válida";
    }
    if (fechaEntrega.seconds) {
      fechaEntrega = new Date(fechaEntrega.seconds * 1000);
    }

    // Formatea la fecha a 'dd/MM/yyyy'
    return format(fechaEntrega, "dd/MM/yyyy");
  } catch (error) {
    console.error("Error al formatear la fecha:", error);
    return "Fecha no válida";
  }
};



const Hoshino = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(
    firebaseContextHoshino
  );
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const navigation = useNavigation();

  useEffect(() => {
    obtenerProductos();
  }, []);

  const categoriaDeseada = "lunes";
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
        "Por favor, selecciona al menos uno."
      );
      return;
    }
    Alert.alert(
      "Si confirmas la entrega se eliminará",
      "Una vez eliminados no se pueden recuperar",
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
      <ScrollView
        style={{
          backgroundColor: "#F0F8FF",
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
                    navigation.navigate("DetallePlatillo");
                  }}
                >
                  <List
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between", // Distribuir elementos
                      backgroundColor: "#FFF5EE", // Fondo de cada platillo
                      borderRadius: 10,
                      marginBottom: 10,
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
                      <Text>Empresa: {platillo.nombre} </Text>
                      <Text numberOfLines={3} style={styles.descripcion}>
                        Dirección: {platillo.descripcion}
                      </Text>
                      <Text>Hora de salida: {platillo.precio} </Text>
                      <Text>Entrega: {formatFechaEntrega(platillo.fecha)}</Text>
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
    color: "blue",
    fontWeight: "bold",
  },
});

export default Hoshino;

import { useNavigation } from "@react-navigation/native";
import {
  NativeBaseProvider,
  View,
  Image,
  Text,
  List,
  Icon,
  ScrollView,
  Pressable,
  Checkbox,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import globalStyles from "../../styles/global";
import { BlurView } from "expo-blur";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Alert } from "react-native";
import firebaseContextSklar from "../../context/firebase/FirebaseStateSklar/firebaseContextSklar";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";
import { parseISO, format } from "date-fns";

// Función para formatear y validar la fecha
const formatFechaEntrega = (fechaEntrega) => {
  try {
    // Verifica si la fecha es nula o indefinida
    if (!fechaEntrega) {
      return "NG";
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

const Sklar = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } =
    useContext(firebaseContextSklar);
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

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
            setIsLoading(true); // Mostrar el spinner de carga
            try {
              const idsAEliminar = Object.keys(selectedPlatillos).filter(
                (id) => selectedPlatillos[id]
              );
              await Promise.all(idsAEliminar.map((id) => eliminarProducto(id)));
              setSelectedPlatillos({});
            } catch (error) {
              console.error("Error eliminando productos:", error);
            } finally {
              setIsLoading(false); // Ocultar el spinner de carga
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
      <View flex={1} backgroundColor="white">
        <ScrollView
          style={{
            backgroundColor: "white",
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
                        backgroundColor: "white", // Fondo de cada platillo
                        borderRadius: 6,
                        marginBottom: 10,
                        borderWidth: 6,
                        borderColor: "black",
                        padding: 20, // Añade más espacio interno
                        minHeight: 280, // Aumenta la altura mínima
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        {/* Parte superior: Imagen y Fecha en fila */}
                        <View
                          style={{
                            flexDirection: "row", // Poner imagen y fecha en fila
                            justifyContent: "space-between", // Distribuye el espacio entre ambos
                            alignItems: "center", // Alinea verticalmente en el centro
                            marginBottom: 10, // Espacio entre la parte superior y los detalles
                          }}
                        >
                          {/* Imagen */}
                          <View style={{ marginRight: 10 }}>
                            <Image
                              source={
                                platillo.imagen
                                  ? { uri: platillo.imagen }
                                  : require("../../assets/fotos/autos.jpeg")
                              }
                              alt="desde firebase"
                              size={150}
                              borderRadius={10}
                              borderColor="black"
                              borderWidth={2}
                            />
                          </View>

                          {/* Fecha */}
                          <View
                            style={{
                              marginTop: -100,
                              padding: 5,
                              justifyContent: "center",
                              alignItems: "center",
                              borderWidth: 2,
                              borderColor: "green",
                              borderRadius: 6,
                            }}
                          >
                            <Text>
                              <Text style={{ fontWeight: "bold" }}>Fecha:</Text>{" "}
                              {""}
                              {formatFechaEntrega(platillo.fecha2)}
                            </Text>
                          </View>
                        </View>

                        {/* Parte inferior: Detalles ocupando todo el ancho */}
                        <View style={{ width: "100%" }}>
                          <Text>
                            <Text style={{ fontWeight: "bold" }}>Salida:</Text>{" "}
                            {platillo.precio}
                          </Text>
                          <Text>
                            <Text style={{ fontWeight: "bold" }}>Empresa:</Text>{" "}
                            {platillo.nombre}
                          </Text>
                          <Text>
                            <Text
                              numberOfLines={3}
                              fontWeight="bold"
                              style={styles.descripcion}
                            >
                              Dirección de carga:
                            </Text>{" "}
                            {platillo.descripcion}
                          </Text>
                          <Text>
                            <Text
                              numberOfLines={3}
                              fontWeight="bold"
                              style={styles.descripcion2}
                            >
                              Dirección de descarga:
                            </Text>{" "}
                            {platillo.descripcion2}
                          </Text>
                          <Text>
                            <Text style={{ fontWeight: "bold" }}>Entrega:</Text>{" "}
                            {formatFechaEntrega(platillo.fecha)}
                          </Text>
                        </View>
                      </View>

                      {/* Checkbox para eliminar */}
                      <View
                        style={{
                          flexDirection: "column", // Coloca el checkbox y el texto en una fila
                          alignItems: "center", // Alinea verticalmente el checkbox y el texto
                          marginLeft: "auto", // Empuja la fila hacia la derecha si es necesario
                          marginTop: -50, // Ajusta según el diseño que necesitas
                          marginRight: 35,
                        }}
                      >
                        <CustomCheckbox
                          isChecked={!!selectedPlatillos[platillo.id]}
                          onChange={(isChecked) =>
                            handleCheckboxChange(platillo.id, isChecked)
                          }
                          ariaLabel={`Eliminar ${platillo.nombre}`}
                        />

                        <Text style={styles.checkboxText}>
                          Check for Deleteee
                        </Text>
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
            <Pressable onPress={isLoading ? null : eliminarSeleccionados}>
              {isLoading ? (
                <Text style={styles.eliminarTexto}>Eliminando...</Text>
              ) : (
                <Icon
                  as={FontAwesome}
                  name="trash"
                  size="lg" // Tamaño del ícono
                  color="black" // Color del ícono
                />
              )}
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
  descripcion2: {
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
  checkboxText: {
    marginLeft: -13, // Ajusta la distancia del texto con respecto al checkbox
    fontSize: 12, // Tamaño de la fuente del texto
    color: "black", // Color del texto
    marginTop:2,
   
  },
});

export default Sklar;

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
  Switch,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import globalStyles from "../../styles/global";
import { BlurView } from "expo-blur";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Alert } from "react-native";
import firebaseContextSklarMensaje from "../../context/firebase/SklarState/FirebaseStateSklarMensaje/firebaseContextSklarMensaje";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";
import firebase from "../../firebase/firebase";
import { parseISO, format } from "date-fns";

const formatFechaEntrega = (fechaEntrega) => {
  try {
    if (!fechaEntrega) {
      return "NG";
    }
    if (typeof fechaEntrega === "string") {
      const parsedDate = Date.parse(fechaEntrega);
      if (!isNaN(parsedDate)) {
        fechaEntrega = new Date(parsedDate);
      } else {
        return "Fecha no válida";
      }
    }
    if (!(fechaEntrega instanceof Date) || isNaN(fechaEntrega.getTime())) {
      return "Fecha no válida";
    }
    if (fechaEntrega.seconds) {
      fechaEntrega = new Date(fechaEntrega.seconds * 1000);
    }
    return format(fechaEntrega, "dd/MM/yyyy");
  } catch (error) {
    console.error("Error al formatear la fecha:", error);
    return "Fecha no válida";
  }
};

const Sklar = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(
    firebaseContextSklarMensaje
  );
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

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
  const [isSwitchDisabled, setIsSwitchDisabled] = useState({});
  const [expandedMessages, setExpandedMessages] = useState({}); // Estado para manejar mensajes expandidos

  const handleCheckboxChange = (platilloId, isChecked) => {
    setSelectedPlatillos((prevState) => ({
      ...prevState,
      [platilloId]: isChecked,
    }));
  };

  const handleSwitchChange = async (platilloId, value) => {
    if (!isSwitchDisabled[platilloId]) {
      const isLeido = value;
      setLeidoStatus((prevState) => ({
        ...prevState,
        [platilloId]: isLeido,
      }));

      try {
        await firebase.db.collection("sklarMensaje").doc(platilloId).update({
          leido: isLeido,
        });
        if (isLeido) {
          setIsSwitchDisabled((prevState) => ({
            ...prevState,
            [platilloId]: true,
          }));
        }
      } catch (error) {
        console.error("Error actualizando el estado leído:", error);
      }
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

  const toggleMessageExpansion = (platilloId) => {
    setExpandedMessages((prevState) => ({
      ...prevState,
      [platilloId]: !prevState[platilloId],
    }));
  };

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
                        alignItems:"flex-start", // Cambia a flex-start para alinear arriba
                        justifyContent: "space-between",
                        backgroundColor: "#FFF5EE",
                        borderRadius: 15,
                        marginBottom: 10,
                        borderWidth: 4,
                        borderColor: "black",
                      }}
                    >
                      <View mx={3} style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
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

                      {/* Contenedor para la fecha y el mensaje */}
                      <View style={styles.fechaYMensajeContainer}>
                        <View
                          marginRight={1}
                          margin={1}
                          style={styles.fechaBox}
                        >
                          <Text>
                            <Text style={{ fontWeight: "bold" }}>Fecha:</Text>
                            {""} {formatFechaEntrega(platillo.fecha)}
                          </Text>
                        </View>

                        {/* Mensaje centrado */}
                        <Text style={styles.mensajeCentrado}>
                          <Text
                            numberOfLines={2}
                            fontWeight="bold"
                            style={styles.descripcion}
                          >
                            Mensaje:
                          </Text>
                          {/* Mensaje truncado */}
                          {expandedMessages[platillo.id] ? (
                            platillo.descripcion
                          ) : (
                            <Text>
                              {platillo.descripcion.length > 100
                                ? platillo.descripcion.slice(0, 100) + "..."
                                : platillo.descripcion}
                            </Text>
                          )}
                          <Text
                            onPress={() => toggleMessageExpansion(platillo.id)}
                            style={styles.leerMas}
                          >
                            {expandedMessages[platillo.id]
                              ? " Leer menos"
                              : " Leer más..."}
                          </Text>
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
                        <View style={{ marginBottom: 10 }}>
                          <CustomCheckbox
                            isChecked={!!selectedPlatillos[platillo.id]}
                            onChange={(isChecked) =>
                              handleCheckboxChange(platillo.id, isChecked)
                            }
                            ariaLabel={`Eliminar ${platillo.nombre}`}
                          />
                        </View>

                        <View pointerEvents="auto">
                          <Switch
                            isChecked={!!leidoStatus[platillo.id]}
                            onToggle={(value) =>
                              handleSwitchChange(platillo.id, value)
                            }
                            isDisabled={!!isSwitchDisabled[platillo.id]}
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
    <Pressable onPress={isLoading ? null : eliminarSeleccionados}>
      {isLoading ? (
        <Text style={styles.eliminarTexto}>Eliminando...</Text>
      ) : (
        <Icon
          as={FontAwesome}
          name="trash"
          size="lg"  // Tamaño del ícono
          color="white"  // Color del ícono
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
    backgroundColor: "#000",
  },
  fechaYMensajeContainer: {
    flex: 1, // Para que ocupe el espacio disponible
    flexDirection: "column", // Apila la fecha y el mensaje
    justifyContent: "flex-start", // Alinea al inicio
    paddingHorizontal: 3, // Espacio interno
    overflow: "hidden", // Evita el desbordamiento
  },
  descripcion: {
    maxWidth: 140,
    lineHeight: 15,
    fontWeight: "bold",
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
  fechaContainer: {
    marginTop: -150,
    marginLeft: 5,
    height: 20, // Altura fija para evitar que se mueva
    justifyContent: 'center', // Centra verticalmente
    
  },
  fechaBox: {
    padding: 2,
    borderWidth: 2,
    borderColor: "green",
    justifyContent: "center",
    alignItems: "center", // Asegúrate de que el contenedor pueda centrar su contenido
    borderRadius: 6,
    maxWidth: 140, // Limita el ancho máximo
    
  },
  mensajeCentrado: {
    textAlign: "center",
    marginTop: 20,
    maxWidth: 200, // Ajusta el ancho máximo
  },
  leerMas: {
    color: "blue",
    fontSize: 12,
    marginTop: 5,
    // textDecorationLine: "underline",
  },
});

export default Sklar;

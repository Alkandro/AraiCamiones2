import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  List,
  Checkbox,
} from "native-base";
import { StyleSheet, Platform, Alert } from "react-native";
import { format } from "date-fns";
import { BlurView } from "expo-blur";
import { FontAwesome } from "@expo/vector-icons";

const formatFechaEntrega = (fechaEntrega) => {
  if (!fechaEntrega) return "NG";
  try {
    if (fechaEntrega.seconds)
      fechaEntrega = new Date(fechaEntrega.seconds * 1000);
    else if (typeof fechaEntrega === "string") {
      const parsedDate = Date.parse(fechaEntrega);
      if (!isNaN(parsedDate)) fechaEntrega = new Date(parsedDate);
      else return "Fecha no válida";
    }
    return format(fechaEntrega, "dd/MM/yyyy");
  } catch {
    return "Fecha no válida";
  }
};

const EnviosList = ({
  categoria,
  menu,
  seleccionarPlatillo,
  eliminarProductoFirebase,
  obtenerProductos,
  navigation,
}) => {
  const [selectedPlatillos, setSelectedPlatillos] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const platillosFiltrados = menu.filter((p) => p.categoria === categoria);

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
    <View flex={1} backgroundColor="white">
      <ScrollView
        style={{ backgroundColor: "black", shadow: 9, borderColor: "green" }}
      >
        <View>
          <View style={styles.separador}>
            <Text style={styles.separadorTexto}>{categoria}</Text>
          </View>
          {platillosFiltrados.map((platillo) => (
            <Pressable
              key={platillo.id}
              onPress={() => {
                const { existencia, ...detalle } = platillo;
                seleccionarPlatillo(detalle);
                navigation.navigate("DetallePlatillo");
              }}
            >
              <List
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  borderRadius: 6,
                  marginBottom: 10,
                  borderWidth: 3,
                  borderColor: "black",
                  padding: 20,
                  minHeight: 280,
                }}
              >
                <View style={{ flex: 1 }}>
                  {/* Imagen y Fecha */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                  >
                    <View style={{ marginRight: 10 }}>
                      <Image
                        source={
                          platillo.imagen
                            ? { uri: platillo.imagen }
                            : require("../assets/fotos/autos.jpeg")
                        }
                        alt="Imagen"
                        size={150}
                        borderRadius={10}
                        borderColor="black"
                        borderWidth={2}
                      />
                    </View>
                    <View
                      style={{
                        marginTop: -100,
                        padding: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 2,
                        borderColor: "green",
                        borderRadius: 6,
                        marginHorizontal: 5,
                      }}
                    >
                      <Text>
                        <Text style={{ fontWeight: "bold" }}>Fecha:</Text>{" "}
                        {formatFechaEntrega(platillo.fecha2)}
                      </Text>
                    </View>
                  </View>

                  {/* Detalles */}
                  <View style={{ width: "100%" }}>
                    <View style={styles.infoContainer}>
                      <Text style={styles.boldText}>Salida:</Text>
                      <Text>{platillo.precio}</Text>
                    </View>

                    <View style={styles.infoContainer}>
                      <Text style={styles.boldText}>Empresa:</Text>
                      <Text>{platillo.nombre}</Text>
                    </View>

                    <View style={styles.infoContainer}>
                      <Text style={styles.boldText}>Dirección de carga:</Text>
                      <Text numberOfLines={3} style={styles.descripcion}>
                        {platillo.descripcion}
                      </Text>
                    </View>

                    <View style={styles.infoContainer}>
                      <Text style={styles.boldText}>
                        Dirección de descarga:
                      </Text>
                      <Text numberOfLines={3} style={styles.descripcion2}>
                        {platillo.descripcion2}
                      </Text>
                    </View>

                    <View style={styles.infoContainer}>
                      <Text style={styles.boldText}>Entrega:</Text>
                      <Text>{formatFechaEntrega(platillo.fecha)}</Text>
                    </View>
                  </View>
                </View>

                {/* Checkbox */}
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    marginLeft: "auto" , // Cambia el margen según la plataforma
                    marginTop: Platform.OS === "ios" ? -180 : -180,
                    marginRight: Platform.OS === "ios" ? 50 : 35,
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
                   Check for Delete
                 </Text>
               </View>
             </List>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <BlurView intensity={90}>
        <View
          paddingY={4}
          alignItems="center"
          safeAreaBottom
          height={20}
          marginBottom={0}
          backgroundColor="black"
        >
          <Pressable onPress={isLoading ? null : eliminarSeleccionados}>
            {isLoading ? (
              <Text style={styles.eliminarTexto}>Eliminando...</Text>
            ) : (
              <FontAwesome name="trash" size={24} color="white" />
            )}
          </Pressable>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  separador: {
    backgroundColor: "#000",
  },
  separadorTexto: {
    marginLeft: 10,
    color: "#FFDA00",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  descripcion: {
    maxWidth: 140,
    lineHeight: 15,
  },
  descripcion2: {
    maxWidth: 140,
    lineHeight: 15,
  },
  infoContainer: {
    flexDirection: "column",
    marginVertical: 5,
  },
  boldText: {
    fontWeight: "bold",
    marginBottom: 1,
  },
  checkboxText: {
    fontSize: 12,
    marginTop: 2,
    color: "black",
  },
  eliminarTexto: {
    color: "white",
    fontWeight: "bold",
  },
});

export default EnviosList;

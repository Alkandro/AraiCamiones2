import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Alert,
  List,
  Checkbox,
} from "native-base";
import { StyleSheet, Platform } from "react-native";
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

  const eliminarSeleccionados = async () => {
    const idsAEliminar = Object.keys(selectedPlatillos).filter(
      (id) => selectedPlatillos[id]
    );
    if (idsAEliminar.length === 0) {
      Alert.alert("Error", "Por favor selecciona al menos un elemento.");
      return;
    }
    Alert.alert(
      "Confirmar eliminación",
      "¿Eliminar los elementos seleccionados?",
      [
        {
          text: "Eliminar",
          onPress: async () => {
            setIsLoading(true);
            try {
              await Promise.all(
                idsAEliminar.map((id) => eliminarProductoFirebase(id))
              );
              setSelectedPlatillos({});
              obtenerProductos();
            } catch (error) {
              console.error(error);
            } finally {
              setIsLoading(false);
            }
          },
        },
        { text: "Cancelar", style: "cancel" },
      ]
    );
  };

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
                        marginHorizontal: 15,
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
                    marginTop: Platform.OS === "ios" ? -180 : -160,
                    marginRight: Platform.OS === "ios" ? 50 : 40,
                  }}
                >
                  <Checkbox
                    isChecked={!!selectedPlatillos[platillo.id]}
                    onChange={(isChecked) =>
                      handleCheckboxChange(platillo.id, isChecked)
                    }
                    accessibilityLabel={`Eliminar ${platillo.nombre}`}
                    _checked={{
                      bg: "green.500",
                      borderColor: "blue.500",
                      _icon: { color: "white" },
                    }}
                    _unchecked={{
                      bg: "transparent",
                      borderColor: "black",
                    }}
                    
                  >
                  <Text color={"white"}>✓</Text>
                  </Checkbox>

                  <Text style={styles.checkboxText}>Check for Delete</Text>
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

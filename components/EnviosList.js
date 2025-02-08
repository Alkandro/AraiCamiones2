// EnviosList.js

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Box, // Reemplazado List por Box
  List,
  Checkbox,
  ActivityIndicator,
} from "native-base";
import { StyleSheet, Platform, Alert } from "react-native"; // Alert solo desde react-native
import { format } from "date-fns";
import { BlurView } from "expo-blur";
import { FontAwesome } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

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
  const [downloadingPlatillos, setDownloadingPlatillos] = useState({});

  const platillosFiltrados = menu.filter((p) => p.categoria === categoria);

  const handleCheckboxChange = (platilloId, isChecked) => {
    setSelectedPlatillos((prevState) => ({
      ...prevState,
      [platilloId]: isChecked,
    }));
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
      "Confirmar Eliminación",
      "Si confirmas, los platillos seleccionados se eliminarán y no se podrán recuperar.",
      [
        {
          text: "Confirmar",
          onPress: async () => {
            setIsLoading(true);
            try {
              const idsAEliminar = Object.keys(selectedPlatillos).filter(
                (id) => selectedPlatillos[id]
              );
              await Promise.all(idsAEliminar.map((id) => eliminarProducto(id)));
              setSelectedPlatillos({});
            } catch (error) {
              console.error("Error eliminando productos:", error);
            } finally {
              setIsLoading(false);
            }
          },
        },
        { text: "Cancelar", style: "cancel" },
      ]
    );
  };

  const descargarPdf = async (platillo) => {
    if (!platillo.pdf) {
      Alert.alert("No hay PDF disponible", "Este platillo no tiene un PDF asociado.");
      return;
    }

    try {
      // Solicitar permisos en Android
      if (Platform.OS === "android") {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Permiso Denegado",
            "No tienes permisos para guardar archivos en tu dispositivo."
          );
          return;
        }
      }

      // Mostrar indicador de descarga
      setDownloadingPlatillos((prevState) => ({
        ...prevState,
        [platillo.id]: true,
      }));

      // Definir el nombre y la ubicación del archivo
      const fileName = `${platillo.nombre.replace(/\s+/g, "_")}_${platillo.id}.pdf`;
      const fileUri = FileSystem.documentDirectory + fileName;

      // Descargar el archivo
      const { uri } = await FileSystem.downloadAsync(platillo.pdf, fileUri);

      // Compartir el archivo (opcional)
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri);
      } else {
        // Guardar el archivo en la galería (solo Android)
        if (Platform.OS === "android") {
          await MediaLibrary.saveToLibraryAsync(uri);
          Alert.alert("Archivo Guardado", "El PDF se ha guardado en tu dispositivo.");
        } else {
          Alert.alert("Archivo Descargado", "El PDF se ha descargado correctamente.");
        }
      }
    } catch (error) {
      console.error("Error descargando PDF:", error);
      Alert.alert("Error", "Hubo un problema al descargar el PDF.");
    } finally {
      // Ocultar indicador de descarga
      setDownloadingPlatillos((prevState) => ({
        ...prevState,
        [platillo.id]: false,
      }));
    }
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
    <View flex={1} backgroundColor="white">
      <ScrollView style={{ backgroundColor: "black", shadow: 9, borderColor: "green" }}>
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
                <View flex={1}>
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
                      <Text style={styles.boldText}>Dirección de descarga:</Text>
                      <Text numberOfLines={3} style={styles.descripcion2}>
                        {platillo.descripcion2}
                      </Text>
                    </View>

                    <View style={styles.infoContainer}>
                      <Text style={styles.boldText}>Entrega:</Text>
                      <Text>{formatFechaEntrega(platillo.fecha)}</Text>
                    </View>

                    {/* Botón para descargar PDF */}
                    {platillo.pdf && (
                      <View style={styles.pdfContainer}>
                        <Pressable
                          onPress={() => descargarPdf(platillo)}
                          style={styles.downloadButton}
                        >
                          {downloadingPlatillos[platillo.id] ? (
                            <ActivityIndicator color="white" />
                          ) : (
                            <Text style={styles.downloadText}>Descargar PDF</Text>
                          )}
                        </Pressable>
                      </View>
                    )}
                  </View>
                </View>

                {/* Checkbox */}
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginTop: Platform.OS === "ios" ? -180 : -180,
                    marginRight: Platform.OS === "ios" ? 50 : 35,
                  }}
                >
                  <CustomCheckbox
                    isChecked={!!selectedPlatillos[platillo.id]}
                    onChange={(isChecked) => handleCheckboxChange(platillo.id, isChecked)}
                    ariaLabel={`Eliminar ${platillo.nombre}`}
                  />
                  <Text style={styles.checkboxText}>Check para Eliminar</Text>
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
  pdfContainer: {
    marginTop: 10,
  },
  downloadButton: {
    backgroundColor: "#1E90FF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  downloadText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default EnviosList;

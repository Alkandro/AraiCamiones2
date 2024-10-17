import React, { useContext, useEffect } from "react";
import { NativeBaseProvider, Text, View, Image, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import PedidosContext from "../context/firebase/pedidos/pedidosContext";
import { Platform, StyleSheet, ImageBackground } from "react-native";

const DetallePlatillo = () => {
  const { platillo } = useContext(PedidosContext);
  const { nombre, imagen } = platillo;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: nombre,
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "white",
    });
  }, []);

  // Formatear las fechas
  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha); // Asegurarse de que es un objeto Date
    return nuevaFecha.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }); // Formato: dd/mm/yyyy
  };

  return (
    <NativeBaseProvider>
      <View flex={1} background="black">
        {/* <ImageBackground
          source={require("../assets/fotos/smoke.jpg")}
          resizeMode="cover"
          style={styles.imagen4}
          imageStyle={styles.image}
        > */}
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View paddingTop={5}>
              <Image
                style={
                  Platform.OS === "ios"
                    ? { marginHorizontal: "5%", width: 350, height: 300 }
                    : { marginHorizontal: "5%", width: 330, height: 300 }
                }
                source={{ uri: imagen }}
                alt="desde firebase"
                borderRadius={15}
                borderColor="#fff"
                borderWidth={0.9}
              />

              {/* Estructura con la etiqueta arriba y el valor abajo */}
              <View marginTop={10}>
                <Text style={styles.precio2}>Fecha de carga</Text>
                <Text style={styles.precio3}>{formatearFecha(platillo.fecha2)}</Text>
              </View>

              <View marginTop={10}>
                <Text style={styles.precio2}>Horario de salida</Text>
                <Text style={styles.precio3}>{platillo.precio}</Text>
              </View>

              <View marginTop={10}>
                <Text style={styles.precio2}>Lugar de carga</Text>
                <Text style={styles.precio3}>{platillo.descripcion}</Text>
              </View>

              <View marginTop={10}>
                <Text style={styles.precio2}>Lugar de descarga</Text>
                <Text style={styles.precio3}>{platillo.descripcion2}</Text>
              </View>

              <View marginTop={10}>
                <Text style={styles.precio2}>Fecha de entrega</Text>
                <Text style={styles.precio3}>{formatearFecha(platillo.fecha)}</Text>
              </View>
            </View>
          </ScrollView>
        {/* </ImageBackground> */}
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 230, // Esto da espacio extra al final para que todo el contenido sea visible al hacer scroll
    alignItems: 'center',
  },
  precio2: {
    marginVertical: 2,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textDecorationLine:"underline"
  },
  precio3: {
    marginVertical: 2,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFDA00",
    marginTop:10,
  },
  imagen4: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    opacity: 1,
  },
});

export default DetallePlatillo;

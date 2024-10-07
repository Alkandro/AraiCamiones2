import React, { useContext, useEffect } from "react";
import {
  NativeBaseProvider,
  Text,
  View,
  Image,
  Box,
  Button,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

import PedidosContext from "../context/firebase/pedidos/pedidosContext";
import { Platform, StyleSheet, ImageBackground } from "react-native";


//Con este codigo puedo trare lo que quiera y mostrarlo
const DetallePlatillo = () => {
  // Pedido context
  const { platillo } = useContext(PedidosContext);
  const {
    nombre,
    imagen,
    descripcion,
    precio,
    fecha,
    fecha2,
    categoria,
    descripcion2,
  } = platillo;

  // Redireccionar
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: nombre, // Título personalizado
      headerStyle: {
        backgroundColor: "#3d783c", // Color de fondo del header
      },
      headerTintColor: "white", // Color del texto e íconos del header
    });
  }, []);

  return (
    <NativeBaseProvider>
      <View flex={1} justifyContent="center" justifyItems="center">
        <ImageBackground
          source={require("../assets/fotos/smoke.jpg")}
          resizeMode="cover"
          style={styles.imagen4}
          imageStyle={styles.image}
        >
          <View marginBottom={230}>
            <View>
              {/* <Text style={styles.titulo2}>{nombre}</Text> */}
              <View paddingTop={20}>
                <Image
                  style={
                    Platform.OS === "ios"
                      ? { marginHorizontal: "5%", width: 350, height: 300 } // Estilos para iOS
                      : { marginHorizontal: "5%", width: 330, height: 300 } // Estilos para Android
                  }
                  //Metemos tamaño en la imagen ancho y alto para que se refleje

                  source={{ uri: imagen }}
                  alt="desde firebase"
                  borderRadius={15}
                  borderColor="#fff"
                  borderWidth={0.9}
                />
                <Text textAlign={"center"} marginTop={5}>
                  <Text style={styles.precio2}>Fecha de carga:</Text>
                  {""}
                  <Text style={styles.precio3}>{platillo.fecha}</Text>
                </Text>

                <Text textAlign={"center"} marginTop={5}>
                  <Text style={styles.precio2}>Horario de salida:</Text>
                  {""}
                  <Text style={styles.precio3}>{platillo.precio}</Text>
                </Text>

                <Text textAlign={"center"} marginTop={5}>
                  <Text style={styles.precio2}>Lugar de carga:</Text>
                  {""}
                  <Text style={styles.precio3}>{platillo.descripcion}</Text>
                </Text>

                <Text textAlign={"center"} marginTop={5}>
                  <Text style={styles.precio2}>Lugar de descarga:</Text>
                  {""}
                  <Text style={styles.precio3}>{platillo.descripcion2}</Text>
                </Text>

                <Text textAlign={"center"} marginTop={5}>
                  <Text style={styles.precio2}>Fecha de entrega:</Text>
                  {""}
                  <Text style={styles.precio3}>{platillo.fecha2}</Text>
                </Text>
              </View>
              {/* <View>
                <Button
                  style={styles.boton2}
                  rounded="2xl"
                  marginHorizontal="20%"
                  marginTop={5}
                  onPress={() => navigation.navigate("FormularioPlatillo")}
                >
                  <Text style={styles.botonTexto2}>Regresar</Text>
                </Button>
              </View> */}
            </View>
          </View>
        </ImageBackground>
      </View>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  titulo2: {
    textAlign: "center",
    color: "#000",
    marginTop: 5,
    marginBottom: 20,
    fontSize: 22,
  },
  precio2: {
    marginVertical: 2,
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  precio3: {
    marginVertical: 2,
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFDA00",
  },

  botonTexto2: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#000",
  },
  boton2: {
    backgroundColor: "#FFDA00",
  },
  descripcion2: {
    marginTop: 30,
    textAlign: "center",
    color: "white",
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

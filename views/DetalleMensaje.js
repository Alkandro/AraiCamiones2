import React, { useContext, useEffect } from "react";
import { NativeBaseProvider, Text, View, Image } from "native-base";
import { useNavigation } from "@react-navigation/native";
import PedidosContext from "../context/firebase/pedidos/pedidosContext";
import { Platform, StyleSheet, ImageBackground } from "react-native";

const DetallePlatillo = () => {
  const { platillo } = useContext(PedidosContext);
  const { nombre, imagen } = platillo;

  // Redireccionar
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Mensaje", // Título personalizado
      headerStyle: {
        backgroundColor: '#3d783c', // Color de fondo del header
      },
      headerTintColor: 'white', // Color del texto e íconos del header
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
              <View paddingTop={20}>
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
               
   {/* Nueva Vista que envuelve el texto para centrarlo */}
   <View style={styles.textContainer}>
                  <Text style={styles.mensaje}>Mensaje </Text>
                  <Text style={styles.texto}>{platillo.descripcion}</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  mensaje: {
    marginVertical: 2,
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  texto: {
    marginVertical: 2,
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFDA00",
  },
  textContainer: {
    alignItems: "center", // Centrar horizontalmente
    marginTop: 10, // Espacio entre la imagen y el texto
    justifyContent: "center", // Centrar verticalmente
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
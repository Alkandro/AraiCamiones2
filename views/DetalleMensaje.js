import React, { useContext, useEffect } from "react";
import { NativeBaseProvider, Text, View, Image, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import PedidosContext from "../context/firebase/pedidos/pedidosContext";
import { Platform, StyleSheet } from "react-native";

const DetallePlatillo = () => {
  const { platillo } = useContext(PedidosContext);
  const { imagen, descripcion } = platillo;

  // Redireccionar
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Mensaje", // Título personalizado
      headerStyle: {
        backgroundColor: "black", // Color de fondo del header
      },
      headerTintColor: "white", // Color del texto e íconos del header
    });
  }, []);

  return (
    <NativeBaseProvider>
      <View flex={1} 
       background="black">
       
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View>
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
                marginTop={10}
              />

              {/* Vista que envuelve el mensaje y permite scroll */}
              <View style={styles.textContainer}>
                <Text style={styles.mensaje}>Mensaje</Text>
                <Text style={styles.texto}>{descripcion}</Text>
              </View>
            </View>
          </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 230, // Esto da espacio extra al final para que todo el contenido sea visible al hacer scroll
    alignItems: 'center',
  },
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

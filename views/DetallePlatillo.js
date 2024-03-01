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
import { StyleSheet, ImageBackground } from "react-native";
import background from "../assets/fotos/platos.jpeg";

const DetallePlatillo = () => {
  // Pedido context
  const { platillo } = useContext(PedidosContext);
  const { nombre, imagen, descripcion, precio } = platillo;
  console.log({ platillo });

  // Redireccionar
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: nombre });
  }, []);

  return (
    <NativeBaseProvider>
      <View flex={1}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={styles.imagen4}
          imageStyle={styles.image}
        >
          <View padding={5}>
            <Text style={styles.titulo2}>{nombre}</Text>
            <View>
              <Image
                //Metemos tamaño en la imagen ancho y alto para que se refleje

                style={{ marginHorizontal: "5%", width: 350, height: 300 }}
                source={{ uri: imagen }}
                alt="desde firebase"
                borderRadius={20}
              />
              <Text style={styles.descripcion2}>{descripcion}</Text>
              <Text style={styles.precio2}>Precio: $ {precio}</Text>
            </View>
            <View>
              <Button
                style={styles.boton2}
                rounded="2xl"
                marginHorizontal="20%"
                marginTop={10}
                onPress={() => navigation.navigate("FormularioPlatillo")}
              >
                <Text style={styles.botonTexto2}>Ordenar</Text>
              </Button>
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
    marginTop: 30,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
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
  },
  imagen4: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    opacity: 0.5,
  },
});

export default DetallePlatillo;

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
      <View 
      
      flex={1}
      justifyContent='center'
      justifyItems='center'
      >
        <ImageBackground
          source={require('../assets/fotos/platos.jpeg')}
          resizeMode="cover"
          style={styles.imagen4}
          imageStyle={styles.image}
        >
          <View marginBottom={230}
          >
            <View>
              {/* <Text style={styles.titulo2}>{nombre}</Text> */}
              <View>
                <Image
                  //Metemos tamaño en la imagen ancho y alto para que se refleje

                  style={{ marginHorizontal: '5%', width: 350, height: 300 }}
                  source={{ uri: imagen }}
                  alt="desde firebase"
                  borderRadius={15}
                  borderColor= "#fff"
                  borderWidth= {0.9}
                />
                <Text style={styles.descripcion2}>{descripcion}</Text>
                <Text style={styles.precio2}>Precio: $ {precio}</Text>
              </View>
              <View>
                <Button
                  style={styles.boton2}
                  rounded="2xl"
                  marginHorizontal="20%"
                  marginTop={5}
                  onPress={() => navigation.navigate("FormularioPlatillo")}
                >
                  <Text style={styles.botonTexto2}>Ordenar</Text>
                </Button>
              </View>
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
    color:'white',
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

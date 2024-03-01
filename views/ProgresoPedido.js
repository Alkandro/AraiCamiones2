import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import globalStyles from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import PedidosContext from "../context/firebase/pedidos/pedidosContext";
import firebase from "../firebase";
import Countdown from "react-countdown";
import { BlurView } from "expo-blur";
import background from "../assets/fotos/background1.jpeg";

import * as Animatable from "react-native-animatable";

import { NativeBaseProvider, Text, Button, Box, View } from "native-base";

const ProgresoPedido = () => {
  const navigation = useNavigation();

  const { idpedido } = useContext(PedidosContext);

  const [tiempo, guardarTiempo] = useState(0);
  const [completado, guardarCompletado] = useState(false);

  useEffect(() => {
    const obtenerProducto = () => {
      firebase.db
        .collection("ordenes")
        .doc(idpedido)
        .onSnapshot(function (doc) {
          guardarTiempo(doc.data().tiempoentrega);
          guardarCompletado(doc.data().completado);
        });
    };
    obtenerProducto();
  }, []);

  //Muestra en Conuntdown en la pantalla
  const renderer = ({ minutes, seconds }) => {
    return (
      <Box marginLeft="full" alignContent="center">
        <Text style={styles.tiempo}>
          {minutes}:{seconds}
        </Text>
      </Box>
    );
  };

  //Para modificar las animaciones por codigo se coloca en {}
  // const pulse = {
  //   from: {
  //     opacity: 0,
  //   },
  //   to: {
  //     opacity: 1,
  //   },
  // };

  return (
    <NativeBaseProvider>
      <View style={styles.imagen4}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={styles.imagen4}
        >
          {tiempo === 0 && (
            <>
              <BlurView intensity={20}>
                <View style={styles.login}>
                  <Text
                    color="white"
                    fontSize="18"
                    style={{ textAlign: "center", fontStyle: "italic" }}
                  >
                    Hemos recibido tu orden...
                  </Text>
                  <Text
                    color="white"
                    fontSize="18"
                    style={{ textAlign: "center", fontStyle: "italic" }}
                  >
                    Estamos calculando el tiempo de entrega...
                  </Text>
                </View>
              </BlurView>
            </>
          )}
          {!completado && tiempo > 0 && (
            <>
              <BlurView intensity={20}>
                <View style={styles.login2}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      color: "white",
                      fontStyle: "italic",
                    }}
                  >
                    Su orden estara lista en:
                  </Text>

                  <Text>
                    <Countdown
                      date={Date.now() + tiempo * 60000}
                      renderer={renderer}
                    />
                  </Text>
                </View>
              </BlurView>
            </>
          )}
          {completado && (
            <>
              <View alignItems="center">
                <Box>
                  <Animatable.Text
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={styles.textoCompletado}
                  >
                    Orden Lista!
                  </Animatable.Text>
                  <Animatable.Text
                    animation="pulse"
                    easing="ease-in-out-expo"
                    iterationCount="infinite"
                    Text
                    style={styles.textoCompletado1}
                  >
                    Por favor, pase a retirar su pedido.
                  </Animatable.Text>
                </Box>

                <Button
                  style={[globalStyles.boton, { marginTop: 20 }]}
                  rounded={20}
                  shadow={9}
                  onPress={() => navigation.navigate("NuevaOrden")}
                >
                  <Text style={globalStyles.botonTexto}>
                    Comenzar una Nueva Orden
                  </Text>
                </Button>
              </View>
            </>
          )}
        </ImageBackground>
      </View>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  tiempo: {
    fontSize: 80,
    textAlign: "center",
    marginTop: 20,
    color: "#FFDA00",
  },
  textoCompletado: {
    padding: 15,
    textAlign: "center",
    textTransform: "uppercase",
    color: "blue",
    fontSize: 25,
    marginTop: 30,
  },

  textoCompletado1: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 20,
    color: "white",
  },
  imagen4: {
    flex: 1,
    justifyContent: "center",
  },
  login: {
    width: "width",
    height: 80,
    borderColor: "#fff",
    borderWidth: 0.2,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  login2: {
    width: "width",
    height: 200,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 40,
    alignItems: "center",
  },
});
export default ProgresoPedido;

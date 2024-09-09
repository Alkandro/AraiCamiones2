import React, { useContext, useEffect } from "react";

import { StyleSheet, Alert, ImageBackground } from "react-native";

import { useNavigation } from "@react-navigation/native";

import PedidosContext from "../context/firebase/pedidos/pedidosContext";

import globalStyles from "../styles/global";

import AntDesing from "react-native-vector-icons/AntDesign";

import background from "../assets/fotos/verdurasfotos.png";

import background2 from "../assets/fotos/background2.jpeg";

import { BlurView } from "expo-blur";

import {
  NativeBaseProvider,
  Text,
  View,
  Button,
  VStack,
  HStack,
  Box,
  List,
  Center,
  ScrollView,
  Image,
  Pressable,
} from "native-base";

import firebase from "../firebase";

const ResumenPedido = () => {
  const navigation = useNavigation();

  //context de pedido
  const { pedido, total, mostrarResumen, eliminarProducto, pedidoRealizado } =
    useContext(PedidosContext);

  useEffect(() => {
    calcularTotal();
  }, [pedido]);

  const calcularTotal = () => {
    let nuevoTotal = 0;
    nuevoTotal = pedido.reduce(
      (nuevoTotal, articulo) => nuevoTotal + articulo.total,
      0
    );
    mostrarResumen(nuevoTotal);
  };
  //redirecciona a Progreso Pedido

  const progresoPedido = () => {
    Alert.alert(
      "Revisa tu Pedido",
      "Una vez que realizes tu pedido, no podras cambiarlo",
      [
        {
          text: "Confirmar",
          onPress: async () => {
            //crear objeto
            const pedidoObj = {
              tiempoentrega: 0,
              completado: false,
              total: Number(total),
              orden: pedido, //array
              creado: Date.now(),
            };
            console.log(pedidoObj);

            try {
              const pedido = await firebase.db
                .collection("ordenes")
                .add(pedidoObj);
              pedidoRealizado(pedido.id);

              //redireccionar a progreso
              navigation.navigate("ProgresoPedido");
            } catch (error) {
              console.log(error);
            }
          },
        },
        { text: "Revisar", style: "cancel" },
      ]
    );
  };

  //Elimina un producto del pedido

  const confirmarEliminacion = (id) => {
    Alert.alert(
      "Deseas eliminar este articulo?",
      "Una vez eliminado no se puede recuperar",
      [
        {
          text: "Confirmar",
          onPress: () => {
            //Eliminar del State
            eliminarProducto(id);
          },
        },
        { text: "Cancelar", style: "cancel" },
      ]
    );
  };

  return (
    <NativeBaseProvider>
      <View flex={1}>
        <ImageBackground
          source={background2}
          resizeMode="cover"
          style={styles.imagen4}
          imageStyle={styles.image1}
        >
          <ScrollView>
            <View alignItems="center" marginTop={5}>
              <Text fontWeight="600" fontSize={30}>
                Resumen Pedido{" "}
              </Text>
            </View>

            <View marginTop={3}>
              <ImageBackground
                source={background}
                resizeMode="cover"
                style={styles.imagen4}
                imageStyle={styles.image}
              >
                {pedido.map((platillo, i) => {
                  const { cantidad, nombre, imagen, id, precio } = platillo;

                  return (
                    <VStack key={id + i}>
                      <List
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View mx={5}>
                          <Image
                            source={{ uri: imagen }}
                            alt="desde firebase"
                            // para que quede cuadrada la imagen
                            //size="lg"
                            size={75}
                          />
                        </View>
                        <View flex={1}>
                          <Text fontWeight="bold">{nombre} </Text>
                          <Text fontWeight="bold">Cantidad: {cantidad}</Text>
                          <Text fontWeight="bold">Precio: $ {precio} </Text>
                        </View>

                        {/* //BOTON PARA ELIMINAR  */}
                        <View>
                          <Pressable
                            onPress={() => confirmarEliminacion(id)}
                            full
                            padding={5}
                            style={{ marginTop: "center" }}
                          >
                            <AntDesing
                              name="delete"
                              style={{
                                color: "red",
                                fontSize: 30,
                              }}
                            />
                          </Pressable>
                        </View>


                      </List>
                    </VStack>
                  );
                })}
              </ImageBackground>
            </View>
          </ScrollView>

          <BlurView intensity={20}>
            <View
              alignItems="center"
              height={200}
              borderColor="#000"
              borderWidth={2}
              borderRadius={10}
              marginBottom={4}
            >
              <Text
                marginTop={3}
                fontWeight="bold"
                fontSize={25}
                textAlign="center"
              >
                Total a Pagar: $ {total}
              </Text>

              <View  alignItems="center" safeAreaBottom shadow={9}>
                <Button
                  marginTop={3}
                  height={10}
                  width="330"
                  rounded="2xl"
                  borderRadius='full'
                  style={globalStyles.boton}
                  onPress={() => navigation.navigate("Menu")}
                >
                  <View>
                    <Text style={globalStyles.botonTexto}>Seguir Pidiendo</Text>
                  </View>
                </Button>
              </View>

              <HStack
                paddingY={0}
                alignItems="center"
                safeAreaBottom
                shadow={9}
              >
                <Button
                marginTop={5}
                  height={10}
                  width="330"
                  rounded="2xl"
                  borderRadius='full'
                  backgroundColor="#32cd32"
                  onPress={() => progresoPedido()}
                >
                  <View>
                    <Text style={styles.botonTexto1}>Ordenar Pedido</Text>
                  </View>
                </Button>
              </HStack>
            </View>
          </BlurView>
        </ImageBackground>
      </View>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  botonTexto1: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#000",
  },
  boton1: {
    backgroundColor: "#32cd32",
  },
  imagen4: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    opacity: 0.3,
  },
  image1: {
    opacity: 0.6,
  },
});

export default ResumenPedido;

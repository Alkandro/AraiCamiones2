import React, { useContext, useEffect } from "react";
import { StyleSheet, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

import PedidosContext from "../context/firebase/pedidos/pedidosContext";

import globalStyles from "../styles/global";
import Ionicons from "react-native-vector-icons/Ionicons";
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
  IconButton,
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
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
      <ScrollView>
        <View alignItems="center" marginTop={5}>
          <Text fontWeight="600" fontSize={30}>
            Resumen Pedido{" "}
          </Text>
        </View>

        <View marginTop={3}>
          {pedido.map((platillo, i) => {
            const { cantidad, nombre, imagen, id, precio } = platillo;

            return (
              <VStack key={id + i}>
                <List style={{ flexDirection: "row", alignItems: "center" }}>
                  <View mx={5}>
                    <Image
                      source={{ uri: imagen }}
                      alt="desde firebase"
                      // para que quede cuadrada la imagen
                      //size="lg"
                      size={70}
                    />
                  </View>
                  <View>
                    <Text>{nombre} </Text>
                    <Text>Cantidad: {cantidad}</Text>
                    <Text>Precio: $ {precio} </Text>
                  </View>

                  <Button
                    onPress={() => confirmarEliminacion(id)}
                    full
                    backgroundColor="red.600"
                    marginLeft={39}
                    style={{ marginTop: "center" }}
                  >
                    <Text style={[globalStyles.botonTexto, { color: "#FFF" }]}>
                      Eliminar
                    </Text>
                  </Button>

                  {/* <IconButton 
                 name="home"
                 size={30}
                 color="red"
                 onPress={() => console.log('aaaaaaa')}
                  rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
                 
                  
                  
                   
                  </IconButton> */}
                </List>
              </VStack>
            );
          })}
          <View></View>
        </View>
      </ScrollView>
      <Box flex={0}>
        <Text
          marginBottom={2}
          fontWeight="600"
          fontSize={25}
          textAlign="center"
        >
          Total a Pagar: $ {total}
        </Text>

        <HStack alignItems="center" safeAreaBottom shadow={9}>
          <Button
            height={16}
            width="full"
            style={globalStyles.boton}
            onPress={() => navigation.navigate("Menu")}
          >
            <Center>
              <Text style={globalStyles.botonTexto}>Seguir Pidiendo</Text>
            </Center>
          </Button>
        </HStack>
      </Box>

      <Box flex={0}>
        <HStack paddingY={0} alignItems="center" safeAreaBottom shadow={9}>
          <Button
            height={16}
            width="full"
            style={styles.boton1}
            onPress={() => progresoPedido()}
          >
            <Center>
              <Text style={styles.botonTexto1}>Ordenar Pedido</Text>
            </Center>
          </Button>
        </HStack>
      </Box>
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
});

export default ResumenPedido;

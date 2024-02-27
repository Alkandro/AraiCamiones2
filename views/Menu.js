import React, { useContext, useEffect, Fragment } from "react";
import { StyleSheet, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider, View, Image, Text, List } from "native-base";
import globalStyles from "../styles/global";
import _ from "lodash";

import { Box, HStack, Button, Center } from "native-base";

import FirebaseContext from "../context/firebase/firebaseContext";
import PedidoContext from "../context/firebase/pedidos/pedidosContext";

const Menu = () => {
  //Context de firebase
  const { menu, obtenerProductos } = useContext(FirebaseContext);

  //Contex del Pedido
  const { seleccionarPlatillo } = useContext(PedidoContext);

  //Hook para redereccionar
  const navigation = useNavigation();

  const BotonResumen = () => {
    const navigation = useNavigation();

    const { pedido } = useContext(PedidoContext);

    if (pedido.length === 0) return null;
    return (
      <Button
        onPress={() => navigation.navigate("ResumenPedido")}
        style={globalStyles.boton}
      >
        <Text style={globalStyles.botonTexto}>ir a Pedido</Text>
      </Button>
    );
  };

  const mostrarHeading = (categoria, i) => {
    if (i > 0) {
      const categoriaAnterior = menu[i - 1].categoria;
      if (categoriaAnterior !== categoria) {
        return (
          <View style={styles.separador}>
            <Text style={styles.separadorTexto}> {categoria} </Text>
          </View>
        );
      }
    } else {
      return (
        <View style={styles.separador}>
          <Text style={styles.separadorTexto}> {categoria} </Text>
        </View>
      );
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <NativeBaseProvider
      style={globalStyles.contenedor}
      //bg="yellow.50"
    >
      <ScrollView style={{ backgroundColor: "#FFF" }}>
        <View>
          {menu.map((platillo, i) => {
            const { imagen, nombre, descripcion, categoria, precio, id } =
              platillo;

            return (
              <Pressable
                key={id}
                onPress={() => {
                  //Eliminar algunas propiedades del platillo
                  const { existencia, ...platillo2 } = platillo;

                  seleccionarPlatillo(platillo2);
                  navigation.navigate("DetallePlatillo");
                }}
              >
                {mostrarHeading(categoria, i)}

                <List style={{ flexDirection: "row", alignItems: "center" }}>
                  <View mx={5}>
                    <Image
                      source={{ uri: imagen }}
                      alt="desde firebase"
                      // para que quede cuadrada la imagen
                      //size="lg"
                      size={100}
                      borderRadius={16}
                    />
                  </View>
                  <View>
                    <Text>{nombre} </Text>

                    <Text numberOfLines={2}>{descripcion}</Text>

                    <Text>Precio: $ {precio} </Text>
                  </View>
                </List>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      <Box flex={0}>
        <HStack paddingY={4} alignItems="center" safeAreaBottom shadow={9}>
          <Button
            height={16}
            width="full"
            style={globalStyles.boton}
            onPress={() => navigation.navigate("ResumenPedido")}
          >
            <Center>
              <Text style={globalStyles.botonTexto}>Ir al Pedido</Text>
            </Center>
          </Button>
        </HStack>
      </Box>

      {/* {/* <Box flex={0}>
        <HStack paddingY={4} alignItems="center" safeAreaBottom shadow={9}>  // para colocar un boton al pie de la pantalla
          <Button
            height={16}
            width="full"
            style={globalStyles.boton}
            onPress={() => navigation.navigate("ResumenPedido")}
          >
            <Center>
              <Text style={globalStyles.botonTexto}>Ir al Pedido</Text>
            </Center>
          </Button>
        </HStack>
      </Box> */}
    </NativeBaseProvider>
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
});

export default Menu;
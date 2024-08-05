import React, { useState, useContext, useEffect } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  Platform,
  ImageBackground,
} from "react-native";
import globalStyles from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";

import background from "../assets/fotos/pasta.jpeg";

import PedidosContext from "../context/firebase/pedidos/pedidosContext";

import {
  NativeBaseProvider,
  Text,
  View,
  Box,
  Button,
  FormControl,
  VStack,
  HStack,
  Icon,
  Center,
  Pressable,
} from "native-base";

const FormularioPlatillo = () => {
  //State para cantidades
  const [cantidad, guardarCantidad] = useState(1);
  const [total, guardarTotal] = useState(0);

  //Context
  const { platillo, guardarPedido } = useContext(PedidosContext);
  const { precio } = platillo;

  //redireccionar
  const navigation = useNavigation();

  //En cuanto el componente se carga, calcular la cantidad a pagar
  useEffect(() => {
    calcularTotal();
  }, [cantidad]);

  //Calcular el total del platillo por su cantidad
  const calcularTotal = () => {
    const totalPagar = precio * cantidad;
    guardarTotal(totalPagar);
  };

  //decrementar en uno
  const decrementarUno = () => {
    if (cantidad > 1) {
      const nuevaCantidad = parseInt(cantidad) - 1;
      guardarCantidad(nuevaCantidad);
    }
  };

  //Confirmar si la orden es correcta
  const confirmarOrden = () => {
    Alert.alert(
      "Deseas confirmar tu pedido",
      "Un pedido confirmado ya no se podra modificar",
      [
        {
          text: "Confirmar",
          onPress: () => {
            //ALmacenar el pedido al pedido principal

            const pedido = {
              ...platillo,
              cantidad,
              total,
            };
            //console.log(pedido);
            guardarPedido(pedido);
            //Navegar hacia el resumen
            navigation.navigate("ResumenPedido");
          },
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );
  };

  //incrementa en uno la cantidad
  const incrementarUno = () => {
    const nuevaCantidad = parseInt(cantidad) + 1;
    guardarCantidad(nuevaCantidad);
  };

  return (
    <NativeBaseProvider>
      <View flex={1}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={styles.imagen4}
        >
          <View style={{ flex: 1 }}>
            <FormControl>
              <VStack space={5} alignItems="center" marginTop={10}>
                <Text color="white" fontSize={30}>
                  Cantidad{" "}
                </Text>
              </VStack>

              <VStack>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                  margin={6}
                >
                  <Button
                    props
                    margin="2"
                    borderRadius={"full"}
                    style={{ height: 45, backgroundColor: "green" }}
                    onPress={() => decrementarUno()}
                  >
                    <Icon
                  style={{ fontSize: 30 }}
                  as={Ionicons}
                  name={Platform.OS ? "remove" : "remove"}
                  size="70"
                  color="green"
                  textAlign="center"
                />
                  </Button>

                  <View margin={1}>
                    <TextInput
                      style={styles.input}
                      onChangeText={(cantidad) => calcularCantidad(cantidad)}
                      value={cantidad.toString()}
                      keyboardType="numeric"
                    />
                    {/* <TextInput
                  props
                  marginTop="9"
                  style={{ textAlign: "center", fontSize: 40 }}
                  value={cantidad.toString()}
                  keyboardType="numeric"
                  onChangeText={(cantidad) => calcularCantidad(cantidad)}
                  backgroundColor="blue"
                /> */}
                  </View>

                  <Button
                    props
                    margin="2"
                    borderRadius={"full"}
                    style={{
                      height: 45,

                      justifyContent: "center",
                      backgroundColor: "green",
                    }}
                    onPress={() => incrementarUno()}
                  >
                    <Icon
                      style={{ fontSize: 30 }}
                      as={Ionicons}
                      name={Platform.OS ? "add" : "add"}
                      size="70"
                      color="black"
                      textAlign="center"
                    />
                  </Button>
                </View>

                <View style={styles.cantidad1}>
                  <Text
                    style={{
                      marginVertical: 25,
                      textAlign: "center",
                      fontSize: 28,
                      fontWeight: "bold",
                      height: "50",
                      padding: 10,
                      color:'white',
                    }}
                  >
                    Subtotal: $ {total}
                  </Text>
                </View>
              </VStack>
            </FormControl>
          </View>

          <Box flex={0}>
            <HStack paddingY={0} alignItems="center" safeAreaBottom shadow={9}>
              <Button
                height={16}
                width="full"
                style={globalStyles.boton}
                onPress={() => confirmarOrden()}
              >
                <Center>
                  <Text style={styles.botonTexto1}>Agregar al pedido</Text>
                </Center>
              </Button>
            </HStack>
          </Box>
        </ImageBackground>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  cantidad1: {
    marginTop: 60,

    height: 90,
  },
  botonTexto1: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#000",
  },
  input: {
    height: 45,
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    color:'white'
  },
  imagen4: {
    flex: 1,
    justifyContent: "center",
  },
});

export default FormularioPlatillo;

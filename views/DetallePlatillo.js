import React, { useContext, useEffect } from "react";
import { NativeBaseProvider, Text, View, Image, ScrollView, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import PedidosContext from "../context/firebase/pedidos/pedidosContext";
import { Platform, StyleSheet, ImageBackground } from "react-native";

const DetallePlatillo = () => {
  const { platillo } = useContext(PedidosContext);
  const { nombre, imagen, descripcion, descripcion2, precio, fecha, fecha2 } = platillo;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: nombre,
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "white",
    });
  }, [nombre, navigation]);

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha); 
    return nuevaFecha.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <NativeBaseProvider>
      <View flex={1} background="black">
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View paddingTop={5}>
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

            <View marginTop={10}>
              <Text style={styles.precio2}>Fecha de carga</Text>
              <Text style={styles.precio3}>{formatearFecha(fecha2)}</Text>
            </View>

            <View marginTop={10}>
              <Text style={styles.precio2}>Horario de salida</Text>
              <Text style={styles.precio3}>{precio}</Text>
            </View>

            <View marginTop={10}>
              <Text style={styles.precio2}>Lugar de carga</Text>
              <Text style={styles.precio3}>{descripcion}</Text>
            </View>

            <View marginTop={10}>
              <Text style={styles.precio2}>Lugar de descarga</Text>
              <Text style={styles.precio3}>{descripcion2}</Text>
            </View>

            <View marginTop={10}>
              <Text style={styles.precio2}>Fecha de entrega</Text>
              <Text style={styles.precio3}>{formatearFecha(fecha)}</Text>
            </View>

            
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 230,
    alignItems: 'center',
  },
  precio2: {
    marginVertical: 2,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textDecorationLine: "underline",
  },
  precio3: {
    marginVertical: 2,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFDA00",
    marginTop: 10,
  },
  boton2: {
    backgroundColor: "#FFDA00",
  },
  botonTexto2: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DetallePlatillo;

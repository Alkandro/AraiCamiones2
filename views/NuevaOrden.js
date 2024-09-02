import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Button, Text, NativeBaseProvider } from "native-base";
import globalStyles from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import background from "../assets/fotos/background1.jpeg";

import * as Animatable from "react-native-animatable";

const NuevaOrden = () => {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <View style={globalStyles.contenedor}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={styles.imagen4}
        >
          <Button
            style={styles.boton1}
            rounded="2xl"
            onPress={() => navigation.navigate("Hoshino")}
          >
            <Text style={globalStyles.botonTexto}>Crear Nueva Orden</Text>
          </Button>
        </ImageBackground>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  contenido: {
    flexDirection: "column",
    justifyContent: "center",
  },
  imagen4: {
    flex: 1,
    justifyContent: "center",
  },
  boton1: {
    backgroundColor: "#FFDA00",
    width: 350,
    marginLeft: 20,
  },
  boton2: {
    backgroundColor: "green",
    width: 350,
    marginBottom: 10,
  },
});

export default NuevaOrden;

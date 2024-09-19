import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  View,
  ImageBackground,
  StatusBar,
  Alert,
} from "react-native";
import { BlurView } from "expo-blur";

import appFirebase from "../credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);

export default function Login(props) {
  //crear la variable de estado
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const logueo = async () => {
    if (email === 'T' && password === '1') {
      Alert.alert("Iniciando sesion", "Accediendo...");
      props.navigation.navigate('TomaokaDrawer');
     } else if (email === 'M' && password === '1') {
        Alert.alert("Iniciando sesion", "Accediendo...");
        props.navigation.navigate('MatsushimaDrawer');
      } else if (email === 'Ho' && password === '12') {
        Alert.alert("Iniciando sesion", "Accediendo...");
        props.navigation.navigate('HoshinoDrawer');
      } else if (email === 'Menu' && password === '123456') {
          Alert.alert("Iniciando sesion", "Accediendo...");
          props.navigation.navigate('Menu');
    } else {
      Alert.alert("Error!", "El usuario o la contrasena son incorrectas");
      props.navigation.navigate('LoginScreen');
    } 
    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   Alert.alert("Iniciando sesion", "Accediendo...");
    //   props.navigation.navigate("Matsushima");
    // } catch (error) {
    //   console.log(error);
    //   Alert.alert("Error!", "El usuario o la contrasena son incorrectas");
    // }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <ImageBackground
        source={require("../assets/fotos/smoke.jpg")}
        resizeMode="cover"
        style={styles.imagen4}
        absoluteFill
      >
        <ScrollView
          //horizontal={true}
          contentContainerStyle={{
            flex: 1,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BlurView instnsity={90}>
            <View style={styles.login}>
              <Image
                source={require("../assets/fotos/78031.jpeg")}
                resizeMode="cover"
                style={styles.fotoprofile}
              />
              <View>
                <Text
                  style={{ fontSize: 17, fontWeight: "400", color: "white" }}
                >
                  E-mail
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="user@gmail.com"
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View>
                <Text
                  style={{ fontSize: 17, fontWeight: "400", color: "white" }}
                >
                  Password
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="password"
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity
                onPress={logueo}
                style={[styles.button, { backgroundColor: "#00CFEB90" }]}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "400", color: "white" }}
                >
                  Login
                </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                style={[styles.button, { backgroundColor: "#525FE1" }]} //#6792F090
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "400", color: "white" }}
                >
                  Create Account
                </Text>
              </TouchableOpacity> */}
            </View>
          </BlurView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
  imagen4: {
    flex: 1,

    width: "100%",
    height: "100%",
  },
  login: {
    width: 350,
    height: 500,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 5,
    elevation: 8,
  },
  fotoprofile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 2,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ffffff90",
    marginBottom: 20,
  },
  button: {
    width: 250,
    height: 40,
    borderColor: "#fff",
    borderRadius: 10,

    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderColor: "#fff",
    borderWidth: 2,
  },
});

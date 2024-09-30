import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image } from "react-native";
import { BlurView } from "expo-blur";

import { useEffect, useState } from "react";
import AppSplashScreen from './SplashScreen';
// import { Asset } from "expo-asset";
// import * as SplashScreen from "expo-splash-screen";

import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";

// Importa la imagen desde los activos
import avatar from "./assets/fotos/7803.jpeg";
import Icon from "react-native-vector-icons/FontAwesome6";

import NuevaOrden from "./views/NuevaOrden";
import Menu from "./views/Menu";
import DetallePlatillo from "./views/DetallePlatillo";
import FormularioPlatillo from "./views/FormularioPlatillo";
import ResumenPedido from "./views/ResumenPedido";
import ProgresoPedido from "./views/ProgresoPedido";

//Hoshino
import LunesHoshino from "./views/Hoshino/LunesHoshino";
import MartesHoshino from "./views/Hoshino/MartesHoshino";
import MiercolesHoshino from "./views/Hoshino/MiercolesHoshino";
import JuevesHoshino from "./views/Hoshino/JuevesHoshino";
import ViernesHoshino from "./views/Hoshino/ViernesHoshino";
import SabadoHoshino from "./views/Hoshino/SabadoHoshino";
import DomingoHoshino from "./views/Hoshino/DomingoHoshino";
import MensajeHoshino from "./views/Hoshino/MensajeHoshino";

//Matsushima
import LunesMatsushima from "./views/Matsushima/LunesMatsushima";
import MartesMatsushima from "./views/Matsushima/MartesMatsushima";
import MiercolesMatsushima from "./views/Matsushima/MiercolesMatsushima";
import JuevesMatsushima from "./views/Matsushima/JuevesMatsushima";
import ViernesMatsushima from "./views/Matsushima/ViernesMatsushima";
import SabadoMatsushima from "./views/Matsushima/SabadoMatsushima";
import DomingoMatsushima from "./views/Matsushima/DomingoMatsushima";

//Tomaoka
import LunesTomaoka from "./views/Tomaoka/LunesTomaoka";
import MartesTomaoka from "./views/Tomaoka/MartesTomaoka";
import MiercolesTomaoka from "./views/Tomaoka/MiercolesTomaoka";
import JuevesTomaoka from "./views/Tomaoka/JuevesTomaoka";
import ViernesTomaoka from "./views/Tomaoka/ViernesTomaoka";
import SabadoTomaoka from "./views/Tomaoka/SabadoTomaoka";
import DomingoTomaoka from "./views/Tomaoka/DomingoTomaoka";

//Oishi
import LunesOishi from "./views/Oishi/LunesOishi";
import MartesOishi from "./views/Oishi/MartesOishi";
import MiercolesOishi from "./views/Oishi/MiercolesOishi";
import JuevesOishi from "./views/Oishi/JuevesOishi";
import ViernesOishi from "./views/Oishi/ViernesOishi";
import SabadoOishi from "./views/Oishi/SabadoOishi";
import DomingoOishi from "./views/Oishi/DomingoOishi";

//Okamoto
import LunesOkamoto from "./views/Okamoto/LunesOkamoto";
import MartesOkamoto from "./views/Okamoto/MartesOkamoto";
import MiercolesOkamoto from "./views/Okamoto/MiercolesOkamoto";
import JuevesOkamoto from "./views/Okamoto/JuevesOkamoto";
import ViernesOkamoto from "./views/Okamoto/ViernesOkamoto";
import SabadoOkamoto from "./views/Okamoto/SabadoOkamoto";
import DomingoOkamoto from "./views/Okamoto/DomingoOkamoto";

//Yamakado
import LunesYamakado from "./views/Yamakado/LunesYamakado";
import MartesYamakado from "./views/Yamakado/MartesYamakado";
import MiercolesYamakado from "./views/Yamakado/MiercolesYamakado";
import JuevesYamakado from "./views/Yamakado/JuevesYamakado";
import ViernesYamakado from "./views/Yamakado/ViernesYamakado";
import SabadoYamakado from "./views/Yamakado/SabadoYamakado";
import DomingoYamakado from "./views/Yamakado/DomingoYamakado";

//Sklar
import LunesSklar from "./views/Sklar/LunesSklar";
import MartesSklar from "./views/Sklar/MartesSklar";
import MiercolesSklar from "./views/Sklar/MiercolesSklar";
import JuevesSklar from "./views/Sklar/JuevesSklar";
import ViernesSklar from "./views/Sklar/ViernesSklar";
import SabadoSklar from "./views/Sklar/SabadoSklar";
import DomingoSklar from "./views/Sklar/DomingoSklar";

//Enrique
import LunesEnrique from "./views/Enrique/LunesEnrique";
import MartesEnrique from "./views/Enrique/MartesEnrique";
import MiercolesEnrique from "./views/Enrique/MiercolesEnrique";
import JuevesEnrique from "./views/Enrique/JuevesEnrique";
import ViernesEnrique from "./views/Enrique/ViernesEnrique";
import SabadoEnrique from "./views/Enrique/SabadoEnrique";
import DomingoEnrique from "./views/Enrique/DomingoEnrique";

//User1
import LunesUser1 from "./views/User1/LunesUser1";
import MartesUser1 from "./views/User1/MartesUser1";
import MiercolesUser1 from "./views/User1/MiercolesUser1";
import JuevesUser1 from "./views/User1/JuevesUser1";
import ViernesUser1 from "./views/User1/ViernesUser1";
import SabadoUser1 from "./views/User1/SabadoUser1";
import DomingoUser1 from "./views/User1/DomingoUser1";

//User2
import LunesUser2 from "./views/User2/LunesUser2";
import MartesUser2 from "./views/User2/MartesUser2";
import MiercolesUser2 from "./views/User2/MiercolesUser2";
import JuevesUser2 from "./views/User2/JuevesUser2";
import ViernesUser2 from "./views/User2/ViernesUser2";
import SabadoUser2 from "./views/User2/SabadoUser2";
import DomingoUser2 from "./views/User2/DomingoUser2";

//User3
import LunesUser3 from "./views/User3/LunesUser3";
import MartesUser3 from "./views/User3/MartesUser3";
import MiercolesUser3 from "./views/User3/MiercolesUser3";
import JuevesUser3 from "./views/User3/JuevesUser3";
import ViernesUser3 from "./views/User3/ViernesUser3";
import SabadoUser3 from "./views/User3/SabadoUser3";
import DomingoUser3 from "./views/User3/DomingoUser3";

import LoginScreen from "./views/LoginScreen";

import FirebaseState from "./context/firebase/firebaseState";

//HOSHINO
import FirebaseStateHoshino from "./context/firebase/FirebaseStateHoshino/firebaseStateHoshino";
import FirebaseStateHoshinoMartes from "./context/firebase/FirebaseStateHoshinoMartes/firebaseStateHoshinoMartes";
import FirebaseStateHoshinoMiercoles from "./context/firebase/Hoshino/FirebaseStateHoshinoMiercoles/firebaseStateHoshinoMiercoles";
import FirebaseStateHoshinoJueves from "./context/firebase/Hoshino/FirebaseStateHoshinoJueves/firebaseStateHoshinoJueves";
import FirebaseStateHoshinoViernes from "./context/firebase/Hoshino/FirebaseStateHoshinoViernes/firebaseStateHoshinoViernes";
import FirebaseStateHoshinoSabado from "./context/firebase/Hoshino/FirebaseStateHoshinoSabado/firebaseStateHoshinoSabado";
import FirebaseStateHoshinoDomingo from "./context/firebase/Hoshino/FirebaseStateHoshinoDomingo/firebaseStateHoshinoDomingo";
import FirebaseStateHoshinoMensaje from "./context/firebase/Hoshino/FirebaseStateHoshinoMensaje/firebaseStateHoshinoMensaje";

//MATSUSHIMA
import FirebaseStateMatsushima from "./context/firebase/FirebaseStateMatsushima/firebaseStateMatsushima";
import FirebaseStateMatsushimaMartes from "./context/firebase/Matsushima/FirebaseStateMatsushimaMartes/firebaseStateMatsushimaMartes";
import FirebaseStateMatsushimaMiercoles from "./context/firebase/Matsushima/FirebaseStateMatsushimaMiercoles/firebaseStateMatsushimaMiercoles";
import FirebaseStateMatsushimaJueves from "./context/firebase/Matsushima/FirebaseStateMatsushimaJueves/firebaseStateMatsushimaJueves";
import FirebaseStateMatsushimaViernes from "./context/firebase/Matsushima/FirebaseStateMatsushimaViernes/firebaseStateMatsushimaViernes";
import FirebaseStateMatsushimaSabado from "./context/firebase/Matsushima/FirebaseStateMatsushimaSabado/firebaseStateMatsushimaSabado";
import FirebaseStateMatsushimaDomingo from "./context/firebase/Matsushima/FirebaseStateMatsushimaDomingo/firebaseStateMatsushimaDomingo";

//TOMAOKA
import FirebaseStateTomaoka from "./context/firebase/FirebaseStateTomaoka/firebaseStateTomaoka";
import FirebaseStateTomaokaMartes from "./context/firebase/FirebaseStateTomaokaMartes/firebaseStateTomaokaMartes";
import FirebaseStateTomaokaMiercoles from "./context/firebase/TomaokaState/FirebaseStateTomaokaMiercoles/firebaseStateTomaokaMiercoles";
import FirebaseStateTomaokaJueves from "./context/firebase/TomaokaState/FirebaseStateTomaokaJueves/firebaseStateTomaokaJueves";
import FirebaseStateTomaokaViernes from "./context/firebase/TomaokaState/FirebaseStateTomaokaViernes/firebaseStateTomaokaViernes";
import FirebaseStateTomaokaSabado from "./context/firebase/TomaokaState/FirebaseStateTomaokaSabado/firebaseStateTomaokaSabado";
import FirebaseStateTomaokaDomingo from "./context/firebase/TomaokaState/FirebaseStateTomaokaDomingo/firebaseStateTomaokaDomingo";

//OISHI
import FirebaseStateOishi from "./context/firebase/FirebaseStateOishi/firebaseStateOishi";
import FirebaseStateOishiMartes from "./context/firebase/OishiState/FirebaseStateOishiMartes/firebaseStateOishiMartes";
import FirebaseStateOishiMiercoles from "./context/firebase/OishiState/FirebaseStateOishiMiercoles/firebaseStateOishiMiercoles";
import FirebaseStateOishiJueves from "./context/firebase/OishiState/FirebaseStateOishiJueves/firebaseStateOishiJueves";
import FirebaseStateOishiViernes from "./context/firebase/OishiState/FirebaseStateOishiViernes/firebaseStateOishiViernes";
import FirebaseStateOishiSabado from "./context/firebase/OishiState/FirebaseStateOishiSabado/firebaseStateOishiSabado";
import FirebaseStateOishiDomingo from "./context/firebase/OishiState/FirebaseStateOishiDomingo/firebaseStateOishiDomingo";

//OKAMOTO
import FirebaseStateOkamoto from "./context/firebase/FirebaseStateOkamoto/firebaseStateOkamoto";
import FirebaseStateOkamotoMartes from "./context/firebase/OkamotoState/FirebaseStateOkamotoMartes/firebaseStateOkamotoMartes";
import FirebaseStateOkamotoMiercoles from "./context/firebase/OkamotoState/FirebaseStateOkamotoMiercoles/firebaseStateOkamotoMiercoles";
import FirebaseStateOkamotoJueves from "./context/firebase/OkamotoState/FirebaseStateOkamotoJueves/firebaseStateOkamotoJueves";
import FirebaseStateOkamotoViernes from "./context/firebase/OkamotoState/FirebaseStateOkamotoViernes/firebaseStateOkamotoViernes";
import FirebaseStateOkamotoSabado from "./context/firebase/OkamotoState/FirebaseStateOkamotoSabado/firebaseStateOkamotoSabado";
import FirebaseStateOkamotoDomingo from "./context/firebase/OkamotoState/FirebaseStateOkamotoDomingo/firebaseStateOkamotoDomingo";

//YAMAKADO
import FirebaseStateYamakado from "./context/firebase/FirebaseStateYamakado/firebaseStateYamakado";
import FirebaseStateYamakadoMartes from "./context/firebase/YamakadoState/FirebaseStateYamakadoMartes/firebaseStateYamakadoMartes";
import FirebaseStateYamakadoMiercoles from "./context/firebase/YamakadoState/FirebaseStateYamakadoMiercoles/firebaseStateYamakadoMiercoles";
import FirebaseStateYamakadoJueves from "./context/firebase/YamakadoState/FirebaseStateYamakadoJueves/firebaseStateYamakadoJueves";
import FirebaseStateYamakadoViernes from "./context/firebase/YamakadoState/FirebaseStateYamakadoViernes/firebaseStateYamakadoViernes";
import FirebaseStateYamakadoSabado from "./context/firebase/YamakadoState/FirebaseStateYamakadoSabado/firebaseStateYamakadoSabado";
import FirebaseStateYamakadoDomingo from "./context/firebase/YamakadoState/FirebaseStateYamakadoDomingo/firebaseStateYamakadoDomingo";

//SKLAR
import FirebaseStateSklar from "./context/firebase/FirebaseStateSklar/firebaseStateSklar";
import FirebaseStateSklarMartes from "./context/firebase/SklarState/FirebaseStateSklarMartes/firebaseStateSklarMartes";
import FirebaseStateSklarMiercoles from "./context/firebase/SklarState/FirebaseStateSklarMiercoles/firebaseStateSklarMiercoles";
import FirebaseStateSklarJueves from "./context/firebase/SklarState/FirebaseStateSklarJueves/firebaseStateSklarJueves";
import FirebaseStateSklarViernes from "./context/firebase/SklarState/FirebaseStateSklarViernes/firebaseStateSklarViernes";
import FirebaseStateSklarSabado from "./context/firebase/SklarState/FirebaseStateSklarSabado/firebaseStateSklarSabado";
import FirebaseStateSklarDomingo from "./context/firebase/SklarState/FirebaseStateSklarDomingo/firebaseStateSklarDomingo";

//ENRIQUE
import FirebaseStateEnrique from "./context/firebase/FirebaseStateEnrique/firebaseStateEnrique";
import FirebaseStateEnriqueMartes from "./context/firebase/EnriqueState/FirebaseStateEnriqueMartes/firebaseStateEnriqueMartes";
import FirebaseStateEnriqueMiercoles from "./context/firebase/EnriqueState/FirebaseStateEnriqueMiercoles/firebaseStateEnriqueMiercoles";
import FirebaseStateEnriqueJueves from "./context/firebase/EnriqueState/FirebaseStateEnriqueJueves/firebaseStateEnriqueJueves";
import FirebaseStateEnriqueViernes from "./context/firebase/EnriqueState/FirebaseStateEnriqueViernes/firebaseStateEnriqueViernes";
import FirebaseStateEnriqueSabado from "./context/firebase/EnriqueState/FirebaseStateEnriqueSabado/firebaseStateEnriqueSabado";
import FirebaseStateEnriqueDomingo from "./context/firebase/EnriqueState/FirebaseStateEnriqueDomingo/firebaseStateEnriqueDomingo";

//USER1
import FirebaseStateUser1 from "./context/firebase/FirebaseStateUser1/firebaseStateUser1";
import FirebaseStateUser1Martes from "./context/firebase/User1State/FirebaseStateUser1Martes/firebaseStateUser1Martes";
import FirebaseStateUser1Miercoles from "./context/firebase/User1State/FirebaseStateUser1Miercoles/firebaseStateUser1Miercoles";
import FirebaseStateUser1Jueves from "./context/firebase/User1State/FirebaseStateUser1Jueves/firebaseStateUser1Jueves";
import FirebaseStateUser1Viernes from "./context/firebase/User1State/FirebaseStateUser1Viernes/firebaseStateUser1Viernes";
import FirebaseStateUser1Sabado from "./context/firebase/User1State/FirebaseStateUser1Sabado/firebaseStateUser1Sabado";
import FirebaseStateUser1Domingo from "./context/firebase/User1State/FirebaseStateUser1Domingo/firebaseStateUser1Domingo";

//USER2
import FirebaseStateUser2 from "./context/firebase/FirebaseStateUser2/firebaseStateUser2";
import FirebaseStateUser2Martes from "./context/firebase/User2State/FirebaseStateUser2Martes/firebaseStateUser2Martes";
import FirebaseStateUser2Miercoles from "./context/firebase/User2State/FirebaseStateUser2Miercoles/firebaseStateUser2Miercoles";
import FirebaseStateUser2Jueves from "./context/firebase/User2State/FirebaseStateUser2Jueves/firebaseStateUser2Jueves";
import FirebaseStateUser2Viernes from "./context/firebase/User2State/FirebaseStateUser2Viernes/firebaseStateUser2Viernes";
import FirebaseStateUser2Sabado from "./context/firebase/User2State/FirebaseStateUser2Sabado/firebaseStateUser2Sabado";
import FirebaseStateUser2Domingo from "./context/firebase/User2State/FirebaseStateUser2Domingo/firebaseStateUser2Domingo";

//USER3
import FirebaseStateUser3 from "./context/firebase/FirebaseStateUser3/firebaseStateUser3";
import FirebaseStateUser3Martes from "./context/firebase/User3State/FirebaseStateUser3Martes/firebaseStateUser3Martes";
import FirebaseStateUser3Miercoles from "./context/firebase/User3State/FirebaseStateUser3Miercoles/firebaseStateUser3Miercoles";
import FirebaseStateUser3Jueves from "./context/firebase/User3State/FirebaseStateUser3Jueves/firebaseStateUser3Jueves";
import FirebaseStateUser3Viernes from "./context/firebase/User3State/FirebaseStateUser3Viernes/firebaseStateUser3Viernes";
import FirebaseStateUser3Sabado from "./context/firebase/User3State/FirebaseStateUser3Sabado/firebaseStateUser3Sabado";
import FirebaseStateUser3Domingo from "./context/firebase/User3State/FirebaseStateUser3Domingo/firebaseStateUser3Domingo";

import PedidosState from "./context/firebase/pedidos/pedidosState";

import { getAuth, signOut } from "firebase/auth";

// // Mantener visible el splash screen hasta que la app esté lista
// SplashScreen.preventAutoHideAsync();

// const preloadAssets = async () => {
//   const imageAssets = Asset.loadAsync([
//     require('./assets/fotos/7803.jpeg'), // precarga la imagen del splash
//   ]);
//   await Promise.all([...imageAssets]);
// };

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const auth = getAuth();

// Componente personalizado para el contenido del Drawer con efecto Blur
const CustomDrawerContent = ({ drawerTitle, ...props }) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "LoginScreen" }],
        });
      })
      .catch((error) => {
        console.error("Logout error", error);
      });
  };

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.backgroundOverlay} />
      <BlurView tint="dark" intensity={50} style={styles.blurView} />
      <View style={styles.drawerHeader}>
        <Image source={avatar} style={styles.drawerImage} />
        <Text style={styles.drawerTitle}>{drawerTitle}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          icon={({ color, size }) => (
            <Icon1 name="logout" color={"white"} size={size} />
          )}
          onPress={handleLogout}
          labelStyle={styles.logoutLabel}
        />
      </DrawerContentScrollView>
    </View>
  );
};

const HoshinoDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Hoshino" />
      )}
      screenOptions={{
        drawerActiveTintColor: "#17f502",
        drawerInactiveTintColor: "#fcfcfc",
        drawerLabelStyle: {
          color: "#fcfcfc",
          fontSize: 14,
          fontWeight: "bold",
        },
        drawerItemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen
        name="Lunes"
        component={LunesHoshino}
        options={{
          title: "Lunes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Martes"
        component={MartesHoshino}
        options={{
          title: "Martes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Miercoles"
        component={MiercolesHoshino}
        options={{
          title: "Miercoles",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Jueves"
        component={JuevesHoshino}
        options={{
          title: "Jueves",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Viernes"
        component={ViernesHoshino}
        options={{
          title: "Viernes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Sabado"
        component={SabadoHoshino}
        options={{
          title: "Sabado",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Domingo"
        component={DomingoHoshino}
        options={{
          title: "Domingo",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Mensaje"
        component={MensajeHoshino}
        options={{
          title: "Mensaje",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
    </Drawer.Navigator>
  );
};
const MatsushimaDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Matsushima" />
      )}
      screenOptions={{
        drawerActiveTintColor: "#17f502",
        drawerInactiveTintColor: "#fcfcfc",
        drawerLabelStyle: {
          color: "#fcfcfc",
          fontSize: 14,
          fontWeight: "bold",
        },
        drawerItemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen
        name="Lunes"
        component={LunesMatsushima}
        options={{
          title: "Lunes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Martes"
        component={MartesMatsushima}
        options={{
          title: "Martes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Miercoles"
        component={MiercolesMatsushima}
        options={{
          title: "Miercoles",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Jueves"
        component={JuevesMatsushima}
        options={{
          title: "Jueves",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Viernes"
        component={ViernesMatsushima}
        options={{
          title: "Viernes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Sabado"
        component={SabadoMatsushima}
        options={{
          title: "Sabado",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Domingo"
        component={DomingoMatsushima}
        options={{
          title: "Domingo",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
    </Drawer.Navigator>
  );
};
const TomaokaDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Tomaoka" />
      )}
      screenOptions={{
        drawerActiveTintColor: "#17f502",
        drawerInactiveTintColor: "#fcfcfc",
        drawerLabelStyle: {
          color: "#fcfcfc",
          fontSize: 14,
          fontWeight: "bold",
        },
        drawerItemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen
        name="Lunes"
        component={LunesTomaoka}
        options={{
          title: "Lunes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Martes"
        component={MartesTomaoka}
        options={{
          title: "Martes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Miercoles"
        component={MiercolesTomaoka}
        options={{
          title: "Miercoles",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Jueves"
        component={JuevesTomaoka}
        options={{
          title: "Jueves",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Viernes"
        component={ViernesTomaoka}
        options={{
          title: "Viernes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Sabado"
        component={SabadoTomaoka}
        options={{
          title: "Sabado",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Domingo"
        component={DomingoTomaoka}
        options={{
          title: "Domingo",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
    </Drawer.Navigator>
  );
};
const OishiDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Oishi vagabundao" />
      )}
      screenOptions={{
        drawerActiveTintColor: "#17f502",
        drawerInactiveTintColor: "#fcfcfc",
        drawerLabelStyle: {
          color: "#fcfcfc",
          fontSize: 14,
          fontWeight: "bold",
        },
        drawerItemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen
        name="Lunes"
        component={LunesOishi}
        options={{
          title: "Lunes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Martes"
        component={MartesOishi}
        options={{
          title: "Martes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Miercoles"
        component={MiercolesOishi}
        options={{
          title: "Miercoles",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Jueves"
        component={JuevesOishi}
        options={{
          title: "Jueves",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Viernes"
        component={ViernesOishi}
        options={{
          title: "Viernes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Sabado"
        component={SabadoOishi}
        options={{
          title: "Sabado",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Domingo"
        component={DomingoOishi}
        options={{
          title: "Domingo",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
    </Drawer.Navigator>
  );
};
const OkamotoDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Okamoto" />
      )}
      screenOptions={{
        drawerActiveTintColor: "#17f502",
        drawerInactiveTintColor: "#fcfcfc",
        drawerLabelStyle: {
          color: "#fcfcfc",
          fontSize: 14,
          fontWeight: "bold",
        },
        drawerItemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen
        name="Lunes"
        component={LunesOkamoto}
        options={{
          title: "Lunes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Martes"
        component={MartesOkamoto}
        options={{
          title: "Martes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Miercoles"
        component={MiercolesOkamoto}
        options={{
          title: "Miercoles",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Jueves"
        component={JuevesOkamoto}
        options={{
          title: "Jueves",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Viernes"
        component={ViernesOkamoto}
        options={{
          title: "Viernes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Sabado"
        component={SabadoOkamoto}
        options={{
          title: "Sabado",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Domingo"
        component={DomingoOkamoto}
        options={{
          title: "Domingo",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
    </Drawer.Navigator>
  );
};
const YamakadoDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Yamakado" />
      )}
      screenOptions={{
        drawerActiveTintColor: "#17f502",
        drawerInactiveTintColor: "#fcfcfc",
        drawerLabelStyle: {
          color: "#fcfcfc",
          fontSize: 14,
          fontWeight: "bold",
        },
        drawerItemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen
        name="Lunes"
        component={LunesYamakado}
        options={{
          title: "Lunes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Martes"
        component={MartesYamakado}
        options={{
          title: "Martes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Miercoles"
        component={MiercolesYamakado}
        options={{
          title: "Miercoles",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Jueves"
        component={JuevesYamakado}
        options={{
          title: "Jueves",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Viernes"
        component={ViernesYamakado}
        options={{
          title: "Viernes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Sabado"
        component={SabadoYamakado}
        options={{
          title: "Sabado",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Domingo"
        component={DomingoYamakado}
        options={{
          title: "Domingo",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
    </Drawer.Navigator>
  );
};
const SklarDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Sklar" />
      )}
      screenOptions={{
        drawerActiveTintColor: "#17f502",
        drawerInactiveTintColor: "#fcfcfc",
        drawerLabelStyle: {
          color: "#fcfcfc",
          fontSize: 14,
          fontWeight: "bold",
        },
        drawerItemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen
        name="Lunes"
        component={LunesSklar}
        options={{
          title: "Lunes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Martes"
        component={MartesSklar}
        options={{
          title: "Martes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Miercoles"
        component={MiercolesSklar}
        options={{
          title: "Miercoles",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Jueves"
        component={JuevesSklar}
        options={{
          title: "Jueves",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Viernes"
        component={ViernesSklar}
        options={{
          title: "Viernes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Sabado"
        component={SabadoSklar}
        options={{
          title: "Sabado",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Domingo"
        component={DomingoSklar}
        options={{
          title: "Domingo",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
    </Drawer.Navigator>
  );
};
const EnriqueDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Enrique" />
      )}
      screenOptions={{
        drawerActiveTintColor: "#17f502",
        drawerInactiveTintColor: "#fcfcfc",
        drawerLabelStyle: {
          color: "#fcfcfc",
          fontSize: 14,
          fontWeight: "bold",
        },
        drawerItemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen
        name="Lunes"
        component={LunesEnrique}
        options={{
          title: "Lunes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Martes"
        component={MartesEnrique}
        options={{
          title: "Martes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Miercoles"
        component={MiercolesEnrique}
        options={{
          title: "Miercoles",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Jueves"
        component={JuevesEnrique}
        options={{
          title: "Jueves",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Viernes"
        component={ViernesEnrique}
        options={{
          title: "Viernes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Sabado"
        component={SabadoEnrique}
        options={{
          title: "Sabado",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Domingo"
        component={DomingoEnrique}
        options={{
          title: "Domingo",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
    </Drawer.Navigator>
  );
};
const User1Drawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="User1" />
      )}
      screenOptions={{
        drawerActiveTintColor: "#17f502",
        drawerInactiveTintColor: "#fcfcfc",
        drawerLabelStyle: {
          color: "#fcfcfc",
          fontSize: 14,
          fontWeight: "bold",
        },
        drawerItemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen
        name="Lunes"
        component={LunesUser1}
        options={{
          title: "Lunes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Martes"
        component={MartesUser1}
        options={{
          title: "Martes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Miercoles"
        component={MiercolesUser1}
        options={{
          title: "Miercoles",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Jueves"
        component={JuevesUser1}
        options={{
          title: "Jueves",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Viernes"
        component={ViernesUser1}
        options={{
          title: "Viernes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Sabado"
        component={SabadoUser1}
        options={{
          title: "Sabado",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Domingo"
        component={DomingoUser1}
        options={{
          title: "Domingo",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
    </Drawer.Navigator>
  );
};
const User2Drawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="User2" />
      )}
      screenOptions={{
        drawerActiveTintColor: "#17f502",
        drawerInactiveTintColor: "#fcfcfc",
        drawerLabelStyle: {
          color: "#fcfcfc",
          fontSize: 14,
          fontWeight: "bold",
        },
        drawerItemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen
        name="Lunes"
        component={LunesUser2}
        options={{
          title: "Lunes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Martes"
        component={MartesUser2}
        options={{
          title: "Martes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Miercoles"
        component={MiercolesUser2}
        options={{
          title: "Miercoles",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Jueves"
        component={JuevesUser2}
        options={{
          title: "Jueves",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Viernes"
        component={ViernesUser2}
        options={{
          title: "Viernes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Sabado"
        component={SabadoUser2}
        options={{
          title: "Sabado",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Domingo"
        component={DomingoUser2}
        options={{
          title: "Domingo",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
    </Drawer.Navigator>
  );
};
const User3Drawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="User3" />
      )}
      screenOptions={{
        drawerActiveTintColor: "#17f502",
        drawerInactiveTintColor: "#fcfcfc",
        drawerLabelStyle: {
          color: "#fcfcfc",
          fontSize: 14,
          fontWeight: "bold",
        },
        drawerItemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen
        name="Lunes"
        component={LunesUser3}
        options={{
          title: "Lunes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Martes"
        component={MartesUser3}
        options={{
          title: "Martes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Miercoles"
        component={MiercolesUser3}
        options={{
          title: "Miercoles",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Jueves"
        component={JuevesUser3}
        options={{
          title: "Jueves",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Viernes"
        component={ViernesUser3}
        options={{
          title: "Viernes",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Sabado"
        component={SabadoUser3}
        options={{
          title: "Sabado",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
      <Drawer.Screen
        name="Domingo"
        component={DomingoUser3}
        options={{
          title: "Domingo",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "#3d783c", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
          // Cambiar el fondo del Drawer (aplica a todo el Drawer, no solo a este Screen)
          drawerStyle: {
            backgroundColor: "transparent", // Cambia el color de fondo del Drawer
            width: 210,
            height: "100%",
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  // Simula la duración del splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);  // Después de 3 segundos, ocultamos el splash screen
    }, 3000);  // Puedes ajustar el tiempo a tu gusto

    return () => clearTimeout(timer);  // Limpia el timer al desmontar
  }, []);

  if (isLoading) {
    return <AppSplashScreen />;  // Muestra el SplashScreen mientras se carga la app
  }

  return <LoginScreen />;


  // useEffect(() => {
  //   const loadResourcesAndHideSplash = async () => {
  //     try {
  //       await preloadAssets();
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       await SplashScreen.hideAsync();
  //     }
  //   };

  //   loadResourcesAndHideSplash();
  // }, []);

  return (
    <FirebaseStateUser3Domingo>
      <FirebaseStateUser3Sabado>
        <FirebaseStateUser3Viernes>
          <FirebaseStateUser3Jueves>
            <FirebaseStateUser3Miercoles>
              <FirebaseStateUser3Martes>
                <FirebaseStateUser3>
                  <FirebaseStateUser2Domingo>
                    <FirebaseStateUser2Sabado>
                      <FirebaseStateUser2Viernes>
                        <FirebaseStateUser2Jueves>
                          <FirebaseStateUser2Miercoles>
                            <FirebaseStateUser2Martes>
                              <FirebaseStateUser2>
                                <FirebaseStateUser1Domingo>
                                  <FirebaseStateUser1Sabado>
                                    <FirebaseStateUser1Viernes>
                                      <FirebaseStateUser1Jueves>
                                        <FirebaseStateUser1Miercoles>
                                          <FirebaseStateUser1Martes>
                                            <FirebaseStateUser1>
                                              <FirebaseStateEnriqueDomingo>
                                                <FirebaseStateEnriqueSabado>
                                                  <FirebaseStateEnriqueViernes>
                                                    <FirebaseStateEnriqueJueves>
                                                      <FirebaseStateEnriqueMiercoles>
                                                        <FirebaseStateEnriqueMartes>
                                                          <FirebaseStateEnrique>
                                                            <FirebaseStateSklarDomingo>
                                                              <FirebaseStateSklarSabado>
                                                                <FirebaseStateSklarViernes>
                                                                  <FirebaseStateSklarJueves>
                                                                    <FirebaseStateSklarMiercoles>
                                                                      <FirebaseStateSklarMartes>
                                                                        <FirebaseStateSklar>
                                                                          <FirebaseStateYamakadoDomingo>
                                                                            <FirebaseStateYamakadoSabado>
                                                                              <FirebaseStateYamakadoViernes>
                                                                                <FirebaseStateYamakadoJueves>
                                                                                  <FirebaseStateYamakadoMiercoles>
                                                                                    <FirebaseStateYamakadoMartes>
                                                                                      <FirebaseStateYamakado>
                                                                                        <FirebaseStateOkamotoDomingo>
                                                                                          <FirebaseStateOkamotoSabado>
                                                                                            <FirebaseStateOkamotoViernes>
                                                                                              <FirebaseStateOkamotoJueves>
                                                                                                <FirebaseStateOkamotoMiercoles>
                                                                                                  <FirebaseStateOkamotoMartes>
                                                                                                    <FirebaseStateOkamoto>
                                                                                                      <FirebaseStateOishiDomingo>
                                                                                                        <FirebaseStateOishiSabado>
                                                                                                          <FirebaseStateOishiViernes>
                                                                                                            <FirebaseStateOishiJueves>
                                                                                                              <FirebaseStateOishiMiercoles>
                                                                                                                <FirebaseStateOishiMartes>
                                                                                                                  <FirebaseStateOishi>
                                                                                                                    <FirebaseStateTomaokaDomingo>
                                                                                                                      <FirebaseStateTomaokaSabado>
                                                                                                                        <FirebaseStateTomaokaViernes>
                                                                                                                          <FirebaseStateTomaokaJueves>
                                                                                                                            <FirebaseStateTomaokaMiercoles>
                                                                                                                              <FirebaseStateTomaokaMartes>
                                                                                                                                <FirebaseStateTomaoka>
                                                                                                                                  <FirebaseStateMatsushimaDomingo>
                                                                                                                                    <FirebaseStateMatsushimaSabado>
                                                                                                                                      <FirebaseStateMatsushimaViernes>
                                                                                                                                        <FirebaseStateMatsushimaJueves>
                                                                                                                                          <FirebaseStateMatsushimaMiercoles>
                                                                                                                                            <FirebaseStateMatsushimaMartes>
                                                                                                                                              <FirebaseStateMatsushima>
                                                                                                                                              <FirebaseStateHoshinoMensaje>
                                                                                                                                                <FirebaseStateHoshinoDomingo>
                                                                                                                                                  <FirebaseStateHoshinoSabado>
                                                                                                                                                    <FirebaseStateHoshinoViernes>
                                                                                                                                                      <FirebaseStateHoshinoJueves>
                                                                                                                                                        <FirebaseStateHoshinoMiercoles>
                                                                                                                                                          <FirebaseStateHoshinoMartes>
                                                                                                                                                            <FirebaseStateHoshino>
                                                                                                                                                              <FirebaseState>
                                                                                                                                                                <PedidosState>
                                                                                                                                                                  <NavigationContainer>
                                                                                                                                                                    <Stack.Navigator initialRouteName="LoginScreen">
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="LoginScreen"
                                                                                                                                                                        component={
                                                                                                                                                                          LoginScreen
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "LoginScreen",
                                                                                                                                                                          headerShown: false,
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="NuevaOrden"
                                                                                                                                                                        component={
                                                                                                                                                                          NuevaOrden
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          headerBackTitle:
                                                                                                                                                                            "Salir",
                                                                                                                                                                          headerBackTitleStyle:
                                                                                                                                                                            {
                                                                                                                                                                              fontSize: 20,
                                                                                                                                                                              color:
                                                                                                                                                                                "red",
                                                                                                                                                                              fontVariant:
                                                                                                                                                                                "proportional-nums",
                                                                                                                                                                            },
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="Menu"
                                                                                                                                                                        component={
                                                                                                                                                                          Menu
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "Menu",
                                                                                                                                                                          headerBackTitleStyle:
                                                                                                                                                                            {
                                                                                                                                                                              fontSize: 15,
                                                                                                                                                                              color:
                                                                                                                                                                                "green",
                                                                                                                                                                              fontStyle:
                                                                                                                                                                                "italic",
                                                                                                                                                                            },
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="MatsushimaDrawer"
                                                                                                                                                                        component={
                                                                                                                                                                          MatsushimaDrawer
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "Matsushima",
                                                                                                                                                                          headerShown: false,
                                                                                                                                                                          headerTitleAlign:
                                                                                                                                                                            "center",
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="TomaokaDrawer"
                                                                                                                                                                        component={
                                                                                                                                                                          TomaokaDrawer
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "Tomaoka",
                                                                                                                                                                          headerShown: false,
                                                                                                                                                                          headerTitleAlign:
                                                                                                                                                                            "center",
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="HoshinoDrawer"
                                                                                                                                                                        component={
                                                                                                                                                                          HoshinoDrawer
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "Hoshino",
                                                                                                                                                                          headerShown: false,
                                                                                                                                                                          headerTitleAlign:
                                                                                                                                                                            "center",
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="OishiDrawer"
                                                                                                                                                                        component={
                                                                                                                                                                          OishiDrawer
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "Oishi",
                                                                                                                                                                          headerShown: false,
                                                                                                                                                                          headerTitleAlign:
                                                                                                                                                                            "center",
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="OkamotoDrawer"
                                                                                                                                                                        component={
                                                                                                                                                                          OkamotoDrawer
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "Okamoto",
                                                                                                                                                                          headerShown: false,
                                                                                                                                                                          headerTitleAlign:
                                                                                                                                                                            "center",
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="YamakadoDrawer"
                                                                                                                                                                        component={
                                                                                                                                                                          YamakadoDrawer
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "Yamakado",
                                                                                                                                                                          headerShown: false,
                                                                                                                                                                          headerTitleAlign:
                                                                                                                                                                            "center",
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="SklarDrawer"
                                                                                                                                                                        component={
                                                                                                                                                                          SklarDrawer
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "Sklar",
                                                                                                                                                                          headerShown: false,
                                                                                                                                                                          headerTitleAlign:
                                                                                                                                                                            "center",
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="EnriqueDrawer"
                                                                                                                                                                        component={
                                                                                                                                                                          EnriqueDrawer
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "Enrique",
                                                                                                                                                                          headerShown: false,
                                                                                                                                                                          headerTitleAlign:
                                                                                                                                                                            "center",
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="User1Drawer"
                                                                                                                                                                        component={
                                                                                                                                                                          User1Drawer
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "User1",
                                                                                                                                                                          headerShown: false,
                                                                                                                                                                          headerTitleAlign:
                                                                                                                                                                            "center",
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="User2Drawer"
                                                                                                                                                                        component={
                                                                                                                                                                          User2Drawer
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "User2",
                                                                                                                                                                          headerShown: false,
                                                                                                                                                                          headerTitleAlign:
                                                                                                                                                                            "center",
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="User3Drawer"
                                                                                                                                                                        component={
                                                                                                                                                                          User3Drawer
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "User3",
                                                                                                                                                                          headerShown: false,
                                                                                                                                                                          headerTitleAlign:
                                                                                                                                                                            "center",
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="DetallePlatillo"
                                                                                                                                                                        component={
                                                                                                                                                                          DetallePlatillo
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "DetallePlatillo",
                                                                                                                                                                          headerBackTitle:
                                                                                                                                                                            "Menu",
                                                                                                                                                                          headerTitleAlign:
                                                                                                                                                                            "center",
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="FormularioPlatillo"
                                                                                                                                                                        component={
                                                                                                                                                                          FormularioPlatillo
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "FormularioPlatillo",
                                                                                                                                                                          headerBackTitle:
                                                                                                                                                                            "Menu",
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="ResumenPedido"
                                                                                                                                                                        component={
                                                                                                                                                                          ResumenPedido
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "ResumenPedido",
                                                                                                                                                                          headerBackTitle:
                                                                                                                                                                            "Menu",
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                      <Stack.Screen
                                                                                                                                                                        name="ProgresoPedido"
                                                                                                                                                                        component={
                                                                                                                                                                          ProgresoPedido
                                                                                                                                                                        }
                                                                                                                                                                        options={{
                                                                                                                                                                          title:
                                                                                                                                                                            "ProgresoPedido",
                                                                                                                                                                          headerBackTitle:
                                                                                                                                                                            "Menu",
                                                                                                                                                                        }}
                                                                                                                                                                      />
                                                                                                                                                                    </Stack.Navigator>
                                                                                                                                                                  </NavigationContainer>
                                                                                                                                                                </PedidosState>
                                                                                                                                                              </FirebaseState>
                                                                                                                                                            </FirebaseStateHoshino>
                                                                                                                                                          </FirebaseStateHoshinoMartes>
                                                                                                                                                        </FirebaseStateHoshinoMiercoles>
                                                                                                                                                      </FirebaseStateHoshinoJueves>
                                                                                                                                                    </FirebaseStateHoshinoViernes>
                                                                                                                                                  </FirebaseStateHoshinoSabado>
                                                                                                                                                </FirebaseStateHoshinoDomingo>
                                                                                                                                                </FirebaseStateHoshinoMensaje>
                                                                                                                                              </FirebaseStateMatsushima>
                                                                                                                                            </FirebaseStateMatsushimaMartes>
                                                                                                                                          </FirebaseStateMatsushimaMiercoles>
                                                                                                                                        </FirebaseStateMatsushimaJueves>
                                                                                                                                      </FirebaseStateMatsushimaViernes>
                                                                                                                                    </FirebaseStateMatsushimaSabado>
                                                                                                                                  </FirebaseStateMatsushimaDomingo>
                                                                                                                                </FirebaseStateTomaoka>
                                                                                                                              </FirebaseStateTomaokaMartes>
                                                                                                                            </FirebaseStateTomaokaMiercoles>
                                                                                                                          </FirebaseStateTomaokaJueves>
                                                                                                                        </FirebaseStateTomaokaViernes>
                                                                                                                      </FirebaseStateTomaokaSabado>
                                                                                                                    </FirebaseStateTomaokaDomingo>
                                                                                                                  </FirebaseStateOishi>
                                                                                                                </FirebaseStateOishiMartes>
                                                                                                              </FirebaseStateOishiMiercoles>
                                                                                                            </FirebaseStateOishiJueves>
                                                                                                          </FirebaseStateOishiViernes>
                                                                                                        </FirebaseStateOishiSabado>
                                                                                                      </FirebaseStateOishiDomingo>
                                                                                                    </FirebaseStateOkamoto>
                                                                                                  </FirebaseStateOkamotoMartes>
                                                                                                </FirebaseStateOkamotoMiercoles>
                                                                                              </FirebaseStateOkamotoJueves>
                                                                                            </FirebaseStateOkamotoViernes>
                                                                                          </FirebaseStateOkamotoSabado>
                                                                                        </FirebaseStateOkamotoDomingo>
                                                                                      </FirebaseStateYamakado>
                                                                                    </FirebaseStateYamakadoMartes>
                                                                                  </FirebaseStateYamakadoMiercoles>
                                                                                </FirebaseStateYamakadoJueves>
                                                                              </FirebaseStateYamakadoViernes>
                                                                            </FirebaseStateYamakadoSabado>
                                                                          </FirebaseStateYamakadoDomingo>
                                                                        </FirebaseStateSklar>
                                                                      </FirebaseStateSklarMartes>
                                                                    </FirebaseStateSklarMiercoles>
                                                                  </FirebaseStateSklarJueves>
                                                                </FirebaseStateSklarViernes>
                                                              </FirebaseStateSklarSabado>
                                                            </FirebaseStateSklarDomingo>
                                                          </FirebaseStateEnrique>
                                                        </FirebaseStateEnriqueMartes>
                                                      </FirebaseStateEnriqueMiercoles>
                                                    </FirebaseStateEnriqueJueves>
                                                  </FirebaseStateEnriqueViernes>
                                                </FirebaseStateEnriqueSabado>
                                              </FirebaseStateEnriqueDomingo>
                                            </FirebaseStateUser1>
                                          </FirebaseStateUser1Martes>
                                        </FirebaseStateUser1Miercoles>
                                      </FirebaseStateUser1Jueves>
                                    </FirebaseStateUser1Viernes>
                                  </FirebaseStateUser1Sabado>
                                </FirebaseStateUser1Domingo>
                              </FirebaseStateUser2>
                            </FirebaseStateUser2Martes>
                          </FirebaseStateUser2Miercoles>
                        </FirebaseStateUser2Jueves>
                      </FirebaseStateUser2Viernes>
                    </FirebaseStateUser2Sabado>
                  </FirebaseStateUser2Domingo>
                </FirebaseStateUser3>
              </FirebaseStateUser3Martes>
            </FirebaseStateUser3Miercoles>
          </FirebaseStateUser3Jueves>
        </FirebaseStateUser3Viernes>
      </FirebaseStateUser3Sabado>
    </FirebaseStateUser3Domingo>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "transparent",
    // Asegúrate de que el contenedor ocupe toda la altura disponible
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#00000080", // Fondo semi-transparente
  },
  blurView: {
    marginTop: 20,
  },
  drawerHeader: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  drawerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  drawerTitle: {
    color: "#fcfcfc",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  logoutLabel: {
    color: "#FFDA00",
    fontWeight: "bold",
  },
});

export default App;

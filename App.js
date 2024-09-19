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

import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";

// Importa la imagen desde los activos
import avatar from "./assets/fotos/avatar.png";
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

import PedidosState from "./context/firebase/pedidos/pedidosState";

import { getAuth, signOut } from "firebase/auth";

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

const App = () => {
  return (

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
                                              component={LoginScreen}
                                              options={{
                                                title: "LoginScreen",
                                                headerShown: false,
                                              }}
                                            />
                                            <Stack.Screen
                                              name="NuevaOrden"
                                              component={NuevaOrden}
                                              options={{
                                                headerBackTitle: "Salir",
                                                headerBackTitleStyle: {
                                                  fontSize: 20,
                                                  color: "red",
                                                  fontVariant:
                                                    "proportional-nums",
                                                },
                                              }}
                                            />
                                            <Stack.Screen
                                              name="Menu"
                                              component={Menu}
                                              options={{
                                                title: "Menu",
                                                headerBackTitleStyle: {
                                                  fontSize: 15,
                                                  color: "green",
                                                  fontStyle: "italic",
                                                },
                                              }}
                                            />
                                            <Stack.Screen
                                              name="MatsushimaDrawer"
                                              component={MatsushimaDrawer}
                                              options={{
                                                title: "Matsushima",
                                                headerShown: false,
                                              }}
                                            />
                                            <Stack.Screen
                                              name="TomaokaDrawer"
                                              component={TomaokaDrawer}
                                              options={{
                                                title: "Tomaoka",
                                                headerShown: false,
                                              }}
                                            />
                                            <Stack.Screen
                                              name="HoshinoDrawer"
                                              component={HoshinoDrawer}
                                              options={{
                                                title: "Hoshino",
                                                headerShown: false,
                                              }}
                                            />
                                            <Stack.Screen
                                              name="DetallePlatillo"
                                              component={DetallePlatillo}
                                              options={{
                                                title: "DetallePlatillo",
                                                headerBackTitle: "Menu",
                                                headerTitleAlign: "center",
                                              }}
                                            />
                                            <Stack.Screen
                                              name="FormularioPlatillo"
                                              component={FormularioPlatillo}
                                              options={{
                                                title: "FormularioPlatillo",
                                                headerBackTitle: "Menu",
                                              }}
                                            />
                                            <Stack.Screen
                                              name="ResumenPedido"
                                              component={ResumenPedido}
                                              options={{
                                                title: "ResumenPedido",
                                                headerBackTitle: "Menu",
                                              }}
                                            />
                                            <Stack.Screen
                                              name="ProgresoPedido"
                                              component={ProgresoPedido}
                                              options={{
                                                title: "ProgresoPedido",
                                                headerBackTitle: "Menu",
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

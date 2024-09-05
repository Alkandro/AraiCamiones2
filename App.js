import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image } from "react-native";
import { BlurView } from "expo-blur";

// Importa la imagen desde los activos
import avatar from "./assets/fotos/avatar.png";
import Icon from "react-native-vector-icons/FontAwesome6";

import NuevaOrden from "./views/NuevaOrden";
import Menu from "./views/Menu";
import DetallePlatillo from "./views/DetallePlatillo";
import FormularioPlatillo from "./views/FormularioPlatillo";
import ResumenPedido from "./views/ResumenPedido";
import ProgresoPedido from "./views/ProgresoPedido";
import Matsushima from "./views/Matsushima";
import Tomaoka from "./views/Tomaoka";
//Hoshino
import LunesHoshino from "./views/Hoshino/LunesHoshino";
import MartesHoshino from "./views/Hoshino/MartesHoshino";
import MiercolesHoshino from "./views/Hoshino/MiercolesHoshino";
import JuevesHoshino from "./views/Hoshino/JuevesHoshino";
import ViernesHoshino from "./views/Hoshino/ViernesHoshino";
import SabadoHoshino from "./views/Hoshino/SabadoHoshino";
import DomingoHoshino from "./views/Hoshino/DomingoHoshino";
//Tomaoka
import LunesTomaoka from "./views/Tomaoka/LunesTomaoka";

import LoginScreen from "./views/LoginScreen";

import FirebaseState from "./context/firebase/firebaseState";
import FirebaseStateMatsushima from "./context/firebase/FirebaseStateMatsushima/firebaseStateMatsushima";
import FirebaseStateTomaoka from "./context/firebase/FirebaseStateTomaoka/firebaseStateTomaoka";
import FirebaseStateHoshino from "./context/firebase/FirebaseStateHoshino/firebaseStateHoshino";
import PedidosState from "./context/firebase/pedidos/pedidosState";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Componente personalizado para el contenido del Drawer con efecto Blur
const CustomDrawerContent = ({ drawerTitle, ...props }) => (
  <View style={styles.drawerContainer}>
    <View style={styles.backgroundOverlay} />
    <BlurView tint="dark" intensity={50} style={styles.blurView} />
    <View style={styles.drawerHeader}>
      <Image source={avatar} style={styles.drawerImage} />
      <Text style={styles.drawerTitle}>{drawerTitle}</Text>
      {/* Título personalizado */}
    </View>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  </View>
);

const HoshinoDrawer = () => {
  return (
    
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Hoshino" />
      )}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "transparent",
          width: 200,
          height: "100%",
        },
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
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Martes"
        component={MartesHoshino}
        options={{
          title: "Martes",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Miercoles"
        component={MiercolesHoshino}
        options={{
          title: "Miercoles",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Jueves"
        component={JuevesHoshino}
        options={{
          title: "Jueves",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Viernes"
        component={ViernesHoshino}
        options={{
          title: "Viernes",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sabado"
        component={SabadoHoshino}
        options={{
          title: "Sabado",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Domingo"
        component={DomingoHoshino}
        options={{
          title: "Domingo",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
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
        drawerStyle: {
          backgroundColor: "transparent",
          width: 200,
          height: "100%",
        },
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
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"}
              size={size}
              color={focused ? "#17f502" : color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <FirebaseStateMatsushima>
      <FirebaseStateHoshino>
        <FirebaseStateTomaoka>
          <FirebaseState>
            <PedidosState>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="LoginScreen">
                  <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ title: "LoginScreen", headerShown: false }}
                  />
                  <Stack.Screen
                    name="NuevaOrden"
                    component={NuevaOrden}
                    options={{
                      headerBackTitle: "Salir",
                      headerBackTitleStyle: {
                        fontSize: 20,
                        color: "red",
                        fontVariant: "proportional-nums",
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
                    name="Matsushima"
                    component={Matsushima}
                    options={{
                      title: "Matsushima",
                      headerBackTitleStyle: {
                        fontSize: 15,
                        color: "green",
                        fontStyle: "italic",
                      },
                    }}
                  />
                  <Stack.Screen
                    name="TomaokaDrawer"
                    component={TomaokaDrawer}
                    options={{ title: "Tomaoka", headerShown: false }}
                  />
                  <Stack.Screen
                    name="HoshinoDrawer"
                    component={HoshinoDrawer}
                    options={{ title: "Hoshino", headerShown: false }}
                  />
                  <Stack.Screen
                    name="DetallePlatillo"
                    component={DetallePlatillo}
                    options={{
                      title: "DetallePlatillo",
                      headerBackTitle: "Menu",
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
        </FirebaseStateTomaoka>
      </FirebaseStateHoshino>
    </FirebaseStateMatsushima>
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
});

export default App;
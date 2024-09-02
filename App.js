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
import Lunes from "./views/Hoshino/Lunes";
import Martes from "./views/Hoshino/Martes";
import Miercoles from "./views/Hoshino/Miercoles";
import Jueves from "./views/Hoshino/Jueves";
import Viernes from "./views/Hoshino/Viernes";
import Sabado from "./views/Hoshino/Sabado";
import Domingo from "./views/Hoshino/Domingo";
//Tokaoka
import LunesTomaoka from "./views/Tomaoka/LunesTomaoka";
// import Martes from "./views/Hoshino/Martes";
// import Miercoles from "./views/Hoshino/Miercoles";
// import Jueves from "./views/Hoshino/Jueves";
// import Viernes from "./views/Hoshino/Viernes";
// import Sabado from "./views/Hoshino/Sabado";
// import Domingo from "./views/Hoshino/Domingo";



import LoginScreen from "./views/LoginScreen";

import FirebaseState from "./context/firebase/firebaseState";
import FirebaseStateMatsushima from "./context/firebase/FirebaseStateMatsushima/firebaseStateMatsushima";
import FirebaseStateTomaoka from "./context/firebase/FirebaseStateTomaoka/firebaseStateTomaoka";
import FirebaseStateHoshino from "./context/firebase/FirebaseStateHoshino/firebaseStateHoshino";
import PedidosState from "./context/firebase/pedidos/pedidosState";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Componente personalizado para el contenido del Drawer con efecto Blur
const CustomDrawerContent = (props) => (
  <View style={styles.drawerContainer}>
    {/* Aplica el efecto blur */}
    <BlurView tint="dark" intensity={50} style={styles.blurView} />
    {/* Encabezado personalizado */}
    <View style={styles.drawerHeader}>
      <Image
        source={avatar} // Usa la imagen de los activos
        style={styles.drawerImage}
      />
      <Text style={styles.drawerTitle}>Hoshino</Text>
    </View>
    {/* Contenido del drawer */}
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  </View>
);

const HoshinoDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "transparent", // Fondo transparente para que se vea el blur
          width: 200,
        },
        drawerActiveTintColor: "#17f502",
        drawerInactiveTintColor: "#fcfcfc", // Color de las letras inactivas
        drawerLabelStyle: {
          color: "#fcfcfc", // Color de las letras activas
          fontSize: 14, // Tamaño del texto
          fontWeight: "bold", // Peso del texto
        },
        drawerItemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen
        name="Lunes"
        component={Lunes}
        options={{
          title: "Lunes",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"} // Cambia el ícono según si está enfocado
              size={size} // Usa el tamaño que proporciona `size`
              color={focused ? "#17f502" : color}
            /> // Cambia el color si está enfocado
            //  name="truck" size={15} color={"#0a0a09"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Martes"
        component={Martes}
        options={{
          title: "Martes",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"} // Cambia el ícono según si está enfocado
              size={size} // Usa el tamaño que proporciona `size`
              color={focused ? "#17f502" : color}
            /> // Cambia el color si está enfocado
            //  name="truck" size={15} color={"#0a0a09"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Miercoles"
        component={Miercoles}
        options={{
          title: "Miercoles",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"} // Cambia el ícono según si está enfocado
              size={size} // Usa el tamaño que proporciona `size`
              color={focused ? "#17f502" : color}
            /> // Cambia el color si está enfocado
            //  name="truck" size={15} color={"#0a0a09"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Jueves"
        component={Jueves}
        options={{
          title: "Jueves",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"} // Cambia el ícono según si está enfocado
              size={size} // Usa el tamaño que proporciona `size`
              color={focused ? "#17f502" : color}
            /> // Cambia el color si está enfocado
            //  name="truck" size={15} color={"#0a0a09"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Viernes"
        component={Viernes}
        options={{
          title: "Viernes",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"} // Cambia el ícono según si está enfocado
              size={size} // Usa el tamaño que proporciona `size`
              color={focused ? "#17f502" : color}
            /> // Cambia el color si está enfocado
            //  name="truck" size={15} color={"#0a0a09"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sabado"
        component={Sabado}
        options={{
          title: "Sabado",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"} // Cambia el ícono según si está enfocado
              size={size} // Usa el tamaño que proporciona `size`
              color={focused ? "#17f502" : color}
            /> // Cambia el color si está enfocado
            //  name="truck" size={15} color={"#0a0a09"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Domingo"
        component={Domingo}
        options={{
          title: "Domingo",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"} // Cambia el ícono según si está enfocado
              size={size} // Usa el tamaño que proporciona `size`
              color={focused ? "#17f502" : color}
            /> // Cambia el color si está enfocado
            //  name="truck" size={15} color={"#0a0a09"} />
          ),
        }}
      />
      {/* Puedes agregar más Drawer.Screen aquí si es necesario */}
    </Drawer.Navigator>
  );
};

const TomaokaDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "transparent", // Fondo transparente para que se vea el blur
          width: 200,
        },
        drawerActiveTintColor: "#17f502",
        drawerInactiveTintColor: "#fcfcfc", // Color de las letras inactivas
        drawerLabelStyle: {
          color: "#fcfcfc", // Color de las letras activas
          fontSize: 14, // Tamaño del texto
          fontWeight: "bold", // Peso del texto
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
              name={focused ? "truck-fast" : "truck-ramp-box"} // Cambia el ícono según si está enfocado
              size={size} // Usa el tamaño que proporciona `size`
              color={focused ? "#17f502" : color}
            /> // Cambia el color si está enfocado
            //  name="truck" size={15} color={"#0a0a09"} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Martes"
        component={Martes}
        options={{
          title: "Martes",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"} // Cambia el ícono según si está enfocado
              size={size} // Usa el tamaño que proporciona `size`
              color={focused ? "#17f502" : color}
            /> // Cambia el color si está enfocado
            //  name="truck" size={15} color={"#0a0a09"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Miercoles"
        component={Miercoles}
        options={{
          title: "Miercoles",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"} // Cambia el ícono según si está enfocado
              size={size} // Usa el tamaño que proporciona `size`
              color={focused ? "#17f502" : color}
            /> // Cambia el color si está enfocado
            //  name="truck" size={15} color={"#0a0a09"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Jueves"
        component={Jueves}
        options={{
          title: "Jueves",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"} // Cambia el ícono según si está enfocado
              size={size} // Usa el tamaño que proporciona `size`
              color={focused ? "#17f502" : color}
            /> // Cambia el color si está enfocado
            //  name="truck" size={15} color={"#0a0a09"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Viernes"
        component={Viernes}
        options={{
          title: "Viernes",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"} // Cambia el ícono según si está enfocado
              size={size} // Usa el tamaño que proporciona `size`
              color={focused ? "#17f502" : color}
            /> // Cambia el color si está enfocado
            //  name="truck" size={15} color={"#0a0a09"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sabado"
        component={Sabado}
        options={{
          title: "Sabado",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"} // Cambia el ícono según si está enfocado
              size={size} // Usa el tamaño que proporciona `size`
              color={focused ? "#17f502" : color}
            /> // Cambia el color si está enfocado
            //  name="truck" size={15} color={"#0a0a09"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Domingo"
        component={Domingo}
        options={{
          title: "Domingo",
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "truck-fast" : "truck-ramp-box"} // Cambia el ícono según si está enfocado
              size={size} // Usa el tamaño que proporciona `size`
              color={focused ? "#17f502" : color}
            /> // Cambia el color si está enfocado
            //  name="truck" size={15} color={"#0a0a09"} />
          ),
        }}
      /> */}
      {/* Puedes agregar más Drawer.Screen aquí si es necesario */}
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
                    options={{
                      title: "Tomaoka",
                      headerBackTitleStyle: {
                        fontSize: 15,
                        color: "green",
                        fontStyle: "italic",
                      },
                    }}
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
                      headerBackTitleStyle: {
                        fontSize: 20,
                        color: "green",
                        fontStyle: "italic",
                      },
                    }}
                  />
                  <Stack.Screen
                    name="FormularioPlatillo"
                    component={FormularioPlatillo}
                    options={{
                      title: "Ordenar Platillo",
                      headerBackTitle: "Detalle",
                      headerBackTitleStyle: {
                        fontSize: 20,
                        color: "green",
                        fontStyle: "italic",
                      },
                    }}
                  />
                  <Stack.Screen
                    name="ResumenPedido"
                    component={ResumenPedido}
                    options={{ title: "Resumen del Pedido" }}
                  />
                  <Stack.Screen
                    name="ProgresoPedido"
                    component={ProgresoPedido}
                    options={{ title: "Progreso del Pedido" }}
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

// Estilos
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  drawerHeader: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  drawerImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Hace la imagen circular
    marginBottom: 10,
  },
  drawerTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;

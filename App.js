import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";

import BotonResumen from "./components/ui/BotonResumen";

import NuevaOrden from "./views/NuevaOrden";
import Menu from "./views/Menu";
import DetallePlatillo from "./views/DetallePlatillo";
import FormularioPlatillo from "./views/FormularioPlatillo";
import ResumenPedido from "./views/ResumenPedido";
import ProgresoPedido from "./views/ProgresoPedido";

import LoginScreen from "./views/LoginScreen";

//importar state de context
import FirebaseState from "./context/firebase/firebaseState";
import PedidosState from "./context/firebase/pedidos/pedidosState";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <FirebaseState>
        <PedidosState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: "#FFDA00",
                },
                headerTitleStyle: {
                  fontWeight: "bold",
                },
                headerTintColor: "#000",
              }}
            >
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                  title: "Login",
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name="NuevaOrden"
                component={NuevaOrden}
                options={{
                  headerBackTitle: "Salir",
                  headerBackTitleStyle: {
                    fontSize: 20,color:'red',
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
                    fontSize: 15,color:'green',fontStyle:'italic',
                    
                  },
                  // headerRight: () => (
                  //   <Button
                  //     onPress={() => alert("This is a button!")}
                  //     title="Ir al Pedido"
                  //     color="#000"
                  //   />
                  // ),
                }}
              />

              <Stack.Screen
                name="DetallePlatillo"
                component={DetallePlatillo}
                options={{
                  title: null,
                  
                    headerBackTitle: "Menu",
                    headerBackTitleStyle: {
                      fontSize: 20,
                      color:'green',fontStyle:'italic',
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
                    color:'green',fontStyle:'italic',
                  },
                }}
              />

              <Stack.Screen
                name="ResumenPedido"
                component={ResumenPedido}
                options={{
                  title: "Resumen del Pedido",
                }}
              />

              <Stack.Screen
                name="ProgresoPedido"
                component={ProgresoPedido}
                options={{
                  title: "Progreso del Pedido",
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PedidosState>
      </FirebaseState>
    </>
  );
};

export default App;

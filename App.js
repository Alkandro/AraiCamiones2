import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

import BotonResumen from "./components/ui/BotonResumen";

import NuevaOrden from "./views/NuevaOrden";
import Menu from "./views/Menu";
import DetallePlatillo from "./views/DetallePlatillo";
import FormularioPlatillo from "./views/FormularioPlatillo";
import ResumenPedido from "./views/ResumenPedido";
import ProgresoPedido from "./views/ProgresoPedido";

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
                name="NuevaOrden"
                component={NuevaOrden}
                options={{
                  title: "Nueva Orden",
                }}
              />

              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{
                  title: "Menu",
                }}

                // Para colocar un boton un boton para ir a alguna pantalla
                // headerRight: () => (
                //   <Button
                //     color="#000"
                //     title="Ir al Pedido"
                //     onPress={() => navigation.navigate("ResumenPedido")}
                //   ></Button>
                // ),
              />

              <Stack.Screen
                name="DetallePlatillo"
                component={DetallePlatillo}
                options={{
                  title: null,
                }}
              />

              <Stack.Screen
                name="FormularioPlatillo"
                component={FormularioPlatillo}
                options={{
                  title: "Ordenar Platillo",
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

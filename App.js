import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store";
import { useEffect, useState } from "react";
import AppSplashScreen from "./SplashScreen";
import { FirebaseProvider } from "./views/FirebaseContext";
import AuthLoadingScreen from "./views/AuthLoadingScreen";
import FirebaseStateUnificado from "./context/firebase/FirebaseStateUnificado";
import PedidosState from "./context/firebase/pedidos/pedidosState";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Icon from "react-native-vector-icons/FontAwesome6";
import LoginScreen from "./views/LoginScreen";

import DetallePlatillo from "./views/DetallePlatillo";
import DetalleMensaje from "./views/DetalleMensaje";

import { HoshinoDrawer } from "./components/Drawers";
import { MatsushimaDrawer } from "./components/Drawers";
import { TomaokaDrawer } from "./components/Drawers";
import { SklarDrawer } from "./components/Drawers";
import { YamakadoDrawer } from "./components/Drawers";
import { OishiDrawer } from "./components/Drawers";
import { OkamotoDrawer } from "./components/Drawers";
import { EnriqueDrawer } from "./components/Drawers";
import { User1Drawer } from "./components/Drawers";
import { User2Drawer } from "./components/Drawers";
import { User3Drawer } from "./components/Drawers";

const Stack = createStackNavigator();
AsyncStorage.getItem("persist:session").then((data) => {
  console.log("Estado persistido:", JSON.parse(data));
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simula la duración del splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Después de 3 segundos, ocultamos el splash screen
    }, 3000); // Puedes ajustar el tiempo a tu gusto

    return () => clearTimeout(timer); // Limpia el timer al desmontar
  }, []);

  if (isLoading) {
    return <AppSplashScreen />; // Muestra el SplashScreen mientras se carga la app
  }

  return (
    <PedidosState>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <FirebaseStateUnificado>
            <FirebaseProvider>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="AuthLoadingScreen">
                  <Stack.Screen
                    name="AuthLoadingScreen"
                    component={AuthLoadingScreen}
                    options={{
                      headerShown: false,
                    }}
                  />

                  <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                      title: "LoginScreen",
                      headerShown: false,
                    }}
                  />

                  <Stack.Screen
                    name="MatsushimaDrawer"
                    component={MatsushimaDrawer}
                    options={{
                      title: "Matsushima",
                      headerShown: false,
                      headerTitleAlign: "center",
                    }}
                  />
                  <Stack.Screen
                    name="TomaokaDrawer"
                    component={TomaokaDrawer}
                    options={{
                      title: "Tomaoka",
                      headerShown: false,
                      headerTitleAlign: "center",
                    }}
                  />
                  <Stack.Screen
                    name="HoshinoDrawer"
                    component={HoshinoDrawer}
                    options={{
                      title: "Hoshino",
                      headerShown: false,
                      headerTitleAlign: "center",
                    }}
                  />
                  <Stack.Screen
                    name="OishiDrawer"
                    component={OishiDrawer}
                    options={{
                      title: "Oishi",
                      headerShown: false,
                      headerTitleAlign: "center",
                    }}
                  />
                  <Stack.Screen
                    name="OkamotoDrawer"
                    component={OkamotoDrawer}
                    options={{
                      title: "Okamoto",
                      headerShown: false,
                      headerTitleAlign: "center",
                    }}
                  />
                  <Stack.Screen
                    name="YamakadoDrawer"
                    component={YamakadoDrawer}
                    options={{
                      title: "Yamakado",
                      headerShown: false,
                      headerTitleAlign: "center",
                    }}
                  />
                  <Stack.Screen
                    name="SklarDrawer"
                    component={SklarDrawer}
                    options={{
                      title: "Sklar",
                      headerShown: false,
                      headerTitleAlign: "center",
                    }}
                  />
                  <Stack.Screen
                    name="EnriqueDrawer"
                    component={EnriqueDrawer}
                    options={{
                      title: "Enrique",
                      headerShown: false,
                      headerTitleAlign: "center",
                    }}
                  />
                  <Stack.Screen
                    name="User1Drawer"
                    component={User1Drawer}
                    options={{
                      title: "User1",
                      headerShown: false,
                      headerTitleAlign: "center",
                    }}
                  />
                  <Stack.Screen
                    name="User2Drawer"
                    component={User2Drawer}
                    options={{
                      title: "User2",
                      headerShown: false,
                      headerTitleAlign: "center",
                    }}
                  />
                  <Stack.Screen
                    name="User3Drawer"
                    component={User3Drawer}
                    options={{
                      title: "User3",
                      headerShown: false,
                      headerTitleAlign: "center",
                    }}
                  />
                  <Stack.Screen
                    name="DetallePlatillo"
                    component={DetallePlatillo}
                    options={({ navigation }) => ({
                      title: "DetallePlatillo",
                      headerBackTitle: null, // Asegúrate de que esto sea null
                      headerTitleAlign: "center",
                      headerStyle: {
                        backgroundColor: "#4CAF50",
                      },
                      headerTintColor: "#fff",
                      headerTitleStyle: {
                        fontWeight: "bold",
                      },
                      headerLeft: () => (
                        <TouchableOpacity
                          onPress={() => navigation.goBack()}
                          style={{
                            padding: 10,
                          }}
                        >
                          <Icon name="angles-left" size={20} color="#fff" />
                        </TouchableOpacity>
                      ),
                    })}
                  />
                  <Stack.Screen
                    name="DetalleMensaje"
                    component={DetalleMensaje}
                    options={({ navigation }) => ({
                      title: "Mensaje",
                      headerBackTitle: null, // Asegúrate de que esto sea null
                      headerTitleAlign: "center",
                      headerStyle: {
                        backgroundColor: "#4CAF50",
                      },
                      headerTintColor: "#fff",
                      headerTitleStyle: {
                        fontWeight: "bold",
                      },
                      headerLeft: () => (
                        <TouchableOpacity
                          onPress={() => navigation.goBack()}
                          style={{
                            padding: 10,
                          }}
                        >
                          <Icon name="angles-left" size={20} color="#fff" />
                        </TouchableOpacity>
                      ),
                    })}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </FirebaseProvider>
          </FirebaseStateUnificado>
        </PersistGate>
      </Provider>
    </PedidosState>
  );
};

export default App;

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

import PedidosState from "./context/firebase/pedidos/pedidosState";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Icon from "react-native-vector-icons/FontAwesome6";
import LoginScreen from "./views/LoginScreen";

import DetallePlatillo from "./views/DetallePlatillo";
import DetalleMensaje from "./views/DetalleMensaje";
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
import FirebaseStateMatsushimaMensaje from "./context/firebase/Matsushima/FirebaseStateMatsushimaMensaje/firebaseStateMatsushimaMensaje";

//TOMAOKA
import FirebaseStateTomaoka from "./context/firebase/FirebaseStateTomaoka/firebaseStateTomaoka";
import FirebaseStateTomaokaMartes from "./context/firebase/FirebaseStateTomaokaMartes/firebaseStateTomaokaMartes";
import FirebaseStateTomaokaMiercoles from "./context/firebase/TomaokaState/FirebaseStateTomaokaMiercoles/firebaseStateTomaokaMiercoles";
import FirebaseStateTomaokaJueves from "./context/firebase/TomaokaState/FirebaseStateTomaokaJueves/firebaseStateTomaokaJueves";
import FirebaseStateTomaokaViernes from "./context/firebase/TomaokaState/FirebaseStateTomaokaViernes/firebaseStateTomaokaViernes";
import FirebaseStateTomaokaSabado from "./context/firebase/TomaokaState/FirebaseStateTomaokaSabado/firebaseStateTomaokaSabado";
import FirebaseStateTomaokaDomingo from "./context/firebase/TomaokaState/FirebaseStateTomaokaDomingo/firebaseStateTomaokaDomingo";
import FirebaseStateTomaokaMensaje from "./context/firebase/TomaokaState/FirebaseStateTomaokaMensaje/firebaseStateTomaokaMensaje";

//OISHI
import FirebaseStateOishi from "./context/firebase/FirebaseStateOishi/firebaseStateOishi";
import FirebaseStateOishiMartes from "./context/firebase/OishiState/FirebaseStateOishiMartes/firebaseStateOishiMartes";
import FirebaseStateOishiMiercoles from "./context/firebase/OishiState/FirebaseStateOishiMiercoles/firebaseStateOishiMiercoles";
import FirebaseStateOishiJueves from "./context/firebase/OishiState/FirebaseStateOishiJueves/firebaseStateOishiJueves";
import FirebaseStateOishiViernes from "./context/firebase/OishiState/FirebaseStateOishiViernes/firebaseStateOishiViernes";
import FirebaseStateOishiSabado from "./context/firebase/OishiState/FirebaseStateOishiSabado/firebaseStateOishiSabado";
import FirebaseStateOishiDomingo from "./context/firebase/OishiState/FirebaseStateOishiDomingo/firebaseStateOishiDomingo";
import FirebaseStateOishiMensaje from "./context/firebase/OishiState/FirebaseStateOishiMensaje/firebaseStateOishiMensaje";

//OKAMOTO
import FirebaseStateOkamoto from "./context/firebase/FirebaseStateOkamoto/firebaseStateOkamoto";
import FirebaseStateOkamotoMartes from "./context/firebase/OkamotoState/FirebaseStateOkamotoMartes/firebaseStateOkamotoMartes";
import FirebaseStateOkamotoMiercoles from "./context/firebase/OkamotoState/FirebaseStateOkamotoMiercoles/firebaseStateOkamotoMiercoles";
import FirebaseStateOkamotoJueves from "./context/firebase/OkamotoState/FirebaseStateOkamotoJueves/firebaseStateOkamotoJueves";
import FirebaseStateOkamotoViernes from "./context/firebase/OkamotoState/FirebaseStateOkamotoViernes/firebaseStateOkamotoViernes";
import FirebaseStateOkamotoSabado from "./context/firebase/OkamotoState/FirebaseStateOkamotoSabado/firebaseStateOkamotoSabado";
import FirebaseStateOkamotoDomingo from "./context/firebase/OkamotoState/FirebaseStateOkamotoDomingo/firebaseStateOkamotoDomingo";
import FirebaseStateOkamotoMensaje from "./context/firebase/OkamotoState/FirebaseStateOkamotoMensaje/firebaseStateOkamotoMensaje";

//YAMAKADO
import FirebaseStateYamakado from "./context/firebase/FirebaseStateYamakado/firebaseStateYamakado";
import FirebaseStateYamakadoMartes from "./context/firebase/YamakadoState/FirebaseStateYamakadoMartes/firebaseStateYamakadoMartes";
import FirebaseStateYamakadoMiercoles from "./context/firebase/YamakadoState/FirebaseStateYamakadoMiercoles/firebaseStateYamakadoMiercoles";
import FirebaseStateYamakadoJueves from "./context/firebase/YamakadoState/FirebaseStateYamakadoJueves/firebaseStateYamakadoJueves";
import FirebaseStateYamakadoViernes from "./context/firebase/YamakadoState/FirebaseStateYamakadoViernes/firebaseStateYamakadoViernes";
import FirebaseStateYamakadoSabado from "./context/firebase/YamakadoState/FirebaseStateYamakadoSabado/firebaseStateYamakadoSabado";
import FirebaseStateYamakadoDomingo from "./context/firebase/YamakadoState/FirebaseStateYamakadoDomingo/firebaseStateYamakadoDomingo";
import FirebaseStateYamakadoMensaje from "./context/firebase/YamakadoState/FirebaseStateYamakadoMensaje/firebaseStateYamakadoMensaje";

//SKLAR
import FirebaseStateSklar from "./context/firebase/FirebaseStateSklar/firebaseStateSklar";
import FirebaseStateSklarMartes from "./context/firebase/SklarState/FirebaseStateSklarMartes/firebaseStateSklarMartes";
import FirebaseStateSklarMiercoles from "./context/firebase/SklarState/FirebaseStateSklarMiercoles/firebaseStateSklarMiercoles";
import FirebaseStateSklarJueves from "./context/firebase/SklarState/FirebaseStateSklarJueves/firebaseStateSklarJueves";
import FirebaseStateSklarViernes from "./context/firebase/SklarState/FirebaseStateSklarViernes/firebaseStateSklarViernes";
import FirebaseStateSklarSabado from "./context/firebase/SklarState/FirebaseStateSklarSabado/firebaseStateSklarSabado";
import FirebaseStateSklarDomingo from "./context/firebase/SklarState/FirebaseStateSklarDomingo/firebaseStateSklarDomingo";
import FirebaseStateSklarMensaje from "./context/firebase/SklarState/FirebaseStateSklarMensaje/firebaseStateSklarMensaje";

//ENRIQUE
import FirebaseStateEnrique from "./context/firebase/FirebaseStateEnrique/firebaseStateEnrique";
import FirebaseStateEnriqueMartes from "./context/firebase/EnriqueState/FirebaseStateEnriqueMartes/firebaseStateEnriqueMartes";
import FirebaseStateEnriqueMiercoles from "./context/firebase/EnriqueState/FirebaseStateEnriqueMiercoles/firebaseStateEnriqueMiercoles";
import FirebaseStateEnriqueJueves from "./context/firebase/EnriqueState/FirebaseStateEnriqueJueves/firebaseStateEnriqueJueves";
import FirebaseStateEnriqueViernes from "./context/firebase/EnriqueState/FirebaseStateEnriqueViernes/firebaseStateEnriqueViernes";
import FirebaseStateEnriqueSabado from "./context/firebase/EnriqueState/FirebaseStateEnriqueSabado/firebaseStateEnriqueSabado";
import FirebaseStateEnriqueDomingo from "./context/firebase/EnriqueState/FirebaseStateEnriqueDomingo/firebaseStateEnriqueDomingo";
import FirebaseStateEnriqueMensaje from "./context/firebase/EnriqueState/FirebaseStateEnriqueMensaje/firebaseStateEnriqueMensaje";

//USER1
import FirebaseStateUser1 from "./context/firebase/FirebaseStateUser1/firebaseStateUser1";
import FirebaseStateUser1Martes from "./context/firebase/User1State/FirebaseStateUser1Martes/firebaseStateUser1Martes";
import FirebaseStateUser1Miercoles from "./context/firebase/User1State/FirebaseStateUser1Miercoles/firebaseStateUser1Miercoles";
import FirebaseStateUser1Jueves from "./context/firebase/User1State/FirebaseStateUser1Jueves/firebaseStateUser1Jueves";
import FirebaseStateUser1Viernes from "./context/firebase/User1State/FirebaseStateUser1Viernes/firebaseStateUser1Viernes";
import FirebaseStateUser1Sabado from "./context/firebase/User1State/FirebaseStateUser1Sabado/firebaseStateUser1Sabado";
import FirebaseStateUser1Domingo from "./context/firebase/User1State/FirebaseStateUser1Domingo/firebaseStateUser1Domingo";
import FirebaseStateUser1Mensaje from "./context/firebase/User1State/FirebaseStateUser1Mensaje/firebaseStateUser1Mensaje";

//USER2
import FirebaseStateUser2 from "./context/firebase/FirebaseStateUser2/firebaseStateUser2";
import FirebaseStateUser2Martes from "./context/firebase/User2State/FirebaseStateUser2Martes/firebaseStateUser2Martes";
import FirebaseStateUser2Miercoles from "./context/firebase/User2State/FirebaseStateUser2Miercoles/firebaseStateUser2Miercoles";
import FirebaseStateUser2Jueves from "./context/firebase/User2State/FirebaseStateUser2Jueves/firebaseStateUser2Jueves";
import FirebaseStateUser2Viernes from "./context/firebase/User2State/FirebaseStateUser2Viernes/firebaseStateUser2Viernes";
import FirebaseStateUser2Sabado from "./context/firebase/User2State/FirebaseStateUser2Sabado/firebaseStateUser2Sabado";
import FirebaseStateUser2Domingo from "./context/firebase/User2State/FirebaseStateUser2Domingo/firebaseStateUser2Domingo";
import FirebaseStateUser2Mensaje from "./context/firebase/User2State/FirebaseStateUser2Mensaje/firebaseStateUser2Mensaje";

//USER3
import FirebaseStateUser3 from "./context/firebase/FirebaseStateUser3/firebaseStateUser3";
import FirebaseStateUser3Martes from "./context/firebase/User3State/FirebaseStateUser3Martes/firebaseStateUser3Martes";
import FirebaseStateUser3Miercoles from "./context/firebase/User3State/FirebaseStateUser3Miercoles/firebaseStateUser3Miercoles";
import FirebaseStateUser3Jueves from "./context/firebase/User3State/FirebaseStateUser3Jueves/firebaseStateUser3Jueves";
import FirebaseStateUser3Viernes from "./context/firebase/User3State/FirebaseStateUser3Viernes/firebaseStateUser3Viernes";
import FirebaseStateUser3Sabado from "./context/firebase/User3State/FirebaseStateUser3Sabado/firebaseStateUser3Sabado";
import FirebaseStateUser3Domingo from "./context/firebase/User3State/FirebaseStateUser3Domingo/firebaseStateUser3Domingo";
import FirebaseStateUser3Mensaje from "./context/firebase/User3State/FirebaseStateUser3Mensaje/firebaseStateUser3Mensaje";

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
    <FirebaseStateUser3Mensaje>
      <FirebaseStateUser3Domingo>
        <FirebaseStateUser3Sabado>
          <FirebaseStateUser3Viernes>
            <FirebaseStateUser3Jueves>
              <FirebaseStateUser3Miercoles>
                <FirebaseStateUser3Martes>
                  <FirebaseStateUser3>
                    <FirebaseStateUser2Mensaje>
                      <FirebaseStateUser2Domingo>
                        <FirebaseStateUser2Sabado>
                          <FirebaseStateUser2Viernes>
                            <FirebaseStateUser2Jueves>
                              <FirebaseStateUser2Miercoles>
                                <FirebaseStateUser2Martes>
                                  <FirebaseStateUser2>
                                    <FirebaseStateUser1Mensaje>
                                      <FirebaseStateUser1Domingo>
                                        <FirebaseStateUser1Sabado>
                                          <FirebaseStateUser1Viernes>
                                            <FirebaseStateUser1Jueves>
                                              <FirebaseStateUser1Miercoles>
                                                <FirebaseStateUser1Martes>
                                                  <FirebaseStateUser1>
                                                    <FirebaseStateEnriqueMensaje>
                                                      <FirebaseStateEnriqueDomingo>
                                                        <FirebaseStateEnriqueSabado>
                                                          <FirebaseStateEnriqueViernes>
                                                            <FirebaseStateEnriqueJueves>
                                                              <FirebaseStateEnriqueMiercoles>
                                                                <FirebaseStateEnriqueMartes>
                                                                  <FirebaseStateEnrique>
                                                                    <FirebaseStateSklarMensaje>
                                                                      <FirebaseStateSklarDomingo>
                                                                        <FirebaseStateSklarSabado>
                                                                          <FirebaseStateSklarViernes>
                                                                            <FirebaseStateSklarJueves>
                                                                              <FirebaseStateSklarMiercoles>
                                                                                <FirebaseStateSklarMartes>
                                                                                  <FirebaseStateSklar>
                                                                                    <FirebaseStateYamakadoMensaje>
                                                                                      <FirebaseStateYamakadoDomingo>
                                                                                        <FirebaseStateYamakadoSabado>
                                                                                          <FirebaseStateYamakadoViernes>
                                                                                            <FirebaseStateYamakadoJueves>
                                                                                              <FirebaseStateYamakadoMiercoles>
                                                                                                <FirebaseStateYamakadoMartes>
                                                                                                  <FirebaseStateYamakado>
                                                                                                    <FirebaseStateOkamotoMensaje>
                                                                                                      <FirebaseStateOkamotoDomingo>
                                                                                                        <FirebaseStateOkamotoSabado>
                                                                                                          <FirebaseStateOkamotoViernes>
                                                                                                            <FirebaseStateOkamotoJueves>
                                                                                                              <FirebaseStateOkamotoMiercoles>
                                                                                                                <FirebaseStateOkamotoMartes>
                                                                                                                  <FirebaseStateOkamoto>
                                                                                                                    <FirebaseStateOishiMensaje>
                                                                                                                      <FirebaseStateOishiDomingo>
                                                                                                                        <FirebaseStateOishiSabado>
                                                                                                                          <FirebaseStateOishiViernes>
                                                                                                                            <FirebaseStateOishiJueves>
                                                                                                                              <FirebaseStateOishiMiercoles>
                                                                                                                                <FirebaseStateOishiMartes>
                                                                                                                                  <FirebaseStateOishi>
                                                                                                                                    <FirebaseStateTomaokaMensaje>
                                                                                                                                      <FirebaseStateTomaokaDomingo>
                                                                                                                                        <FirebaseStateTomaokaSabado>
                                                                                                                                          <FirebaseStateTomaokaViernes>
                                                                                                                                            <FirebaseStateTomaokaJueves>
                                                                                                                                              <FirebaseStateTomaokaMiercoles>
                                                                                                                                                <FirebaseStateTomaokaMartes>
                                                                                                                                                  <FirebaseStateTomaoka>
                                                                                                                                                    <FirebaseStateMatsushimaMensaje>
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
                                                                                                                                                                                        <Provider
                                                                                                                                                                                          store={
                                                                                                                                                                                            store
                                                                                                                                                                                          }
                                                                                                                                                                                        >
                                                                                                                                                                                          <PersistGate
                                                                                                                                                                                            loading={
                                                                                                                                                                                              null
                                                                                                                                                                                            }
                                                                                                                                                                                            persistor={
                                                                                                                                                                                              persistor
                                                                                                                                                                                            }
                                                                                                                                                                                          >
                                                                                                                                                                                            <FirebaseProvider>
                                                                                                                                                                                            <NavigationContainer>
                                                                                                                                                                                              <Stack.Navigator initialRouteName="AuthLoadingScreen">
                                                                                                                                                                                                <Stack.Screen
                                                                                                                                                                                                  name="AuthLoadingScreen"
                                                                                                                                                                                                  component={
                                                                                                                                                                                                    AuthLoadingScreen
                                                                                                                                                                                                  }
                                                                                                                                                                                                  options={{
                                                                                                                                                                                                    headerShown: false,
                                                                                                                                                                                                  }}
                                                                                                                                                                                                />

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
                                                                                                                                                                                                  options={({
                                                                                                                                                                                                    navigation,
                                                                                                                                                                                                  }) => ({
                                                                                                                                                                                                    title:
                                                                                                                                                                                                      "DetallePlatillo",
                                                                                                                                                                                                    headerBackTitle:
                                                                                                                                                                                                      null, // Asegúrate de que esto sea null
                                                                                                                                                                                                    headerTitleAlign:
                                                                                                                                                                                                      "center",
                                                                                                                                                                                                    headerStyle:
                                                                                                                                                                                                      {
                                                                                                                                                                                                        backgroundColor:
                                                                                                                                                                                                          "#4CAF50",
                                                                                                                                                                                                      },
                                                                                                                                                                                                    headerTintColor:
                                                                                                                                                                                                      "#fff",
                                                                                                                                                                                                    headerTitleStyle:
                                                                                                                                                                                                      {
                                                                                                                                                                                                        fontWeight:
                                                                                                                                                                                                          "bold",
                                                                                                                                                                                                      },
                                                                                                                                                                                                    headerLeft:
                                                                                                                                                                                                      () => (
                                                                                                                                                                                                        <TouchableOpacity
                                                                                                                                                                                                          onPress={() =>
                                                                                                                                                                                                            navigation.goBack()
                                                                                                                                                                                                          }
                                                                                                                                                                                                          style={{
                                                                                                                                                                                                            padding: 10,
                                                                                                                                                                                                          }}
                                                                                                                                                                                                        >
                                                                                                                                                                                                          <Icon
                                                                                                                                                                                                            name="angles-left"
                                                                                                                                                                                                            size={
                                                                                                                                                                                                              20
                                                                                                                                                                                                            }
                                                                                                                                                                                                            color="#fff"
                                                                                                                                                                                                          />
                                                                                                                                                                                                        </TouchableOpacity>
                                                                                                                                                                                                      ),
                                                                                                                                                                                                  })}
                                                                                                                                                                                                />
                                                                                                                                                                                                <Stack.Screen
                                                                                                                                                                                                  name="DetalleMensaje"
                                                                                                                                                                                                  component={
                                                                                                                                                                                                    DetalleMensaje
                                                                                                                                                                                                  }
                                                                                                                                                                                                  options={({
                                                                                                                                                                                                    navigation,
                                                                                                                                                                                                  }) => ({
                                                                                                                                                                                                    title:
                                                                                                                                                                                                      "Mensaje",
                                                                                                                                                                                                    headerBackTitle:
                                                                                                                                                                                                      null, // Asegúrate de que esto sea null
                                                                                                                                                                                                    headerTitleAlign:
                                                                                                                                                                                                      "center",
                                                                                                                                                                                                    headerStyle:
                                                                                                                                                                                                      {
                                                                                                                                                                                                        backgroundColor:
                                                                                                                                                                                                          "#4CAF50",
                                                                                                                                                                                                      },
                                                                                                                                                                                                    headerTintColor:
                                                                                                                                                                                                      "#fff",
                                                                                                                                                                                                    headerTitleStyle:
                                                                                                                                                                                                      {
                                                                                                                                                                                                        fontWeight:
                                                                                                                                                                                                          "bold",
                                                                                                                                                                                                      },
                                                                                                                                                                                                    headerLeft:
                                                                                                                                                                                                      () => (
                                                                                                                                                                                                        <TouchableOpacity
                                                                                                                                                                                                          onPress={() =>
                                                                                                                                                                                                            navigation.goBack()
                                                                                                                                                                                                          }
                                                                                                                                                                                                          style={{
                                                                                                                                                                                                            padding: 10,
                                                                                                                                                                                                          }}
                                                                                                                                                                                                        >
                                                                                                                                                                                                          <Icon
                                                                                                                                                                                                            name="angles-left"
                                                                                                                                                                                                            size={
                                                                                                                                                                                                              20
                                                                                                                                                                                                            }
                                                                                                                                                                                                            color="#fff"
                                                                                                                                                                                                          />
                                                                                                                                                                                                        </TouchableOpacity>
                                                                                                                                                                                                      ),
                                                                                                                                                                                                  })}
                                                                                                                                                                                                />
                                                                                                                                                                                              </Stack.Navigator>
                                                                                                                                                                                            </NavigationContainer>
                                                                                                                                                                                            </FirebaseProvider>
                                                                                                                                                                                          </PersistGate>
                                                                                                                                                                                        </Provider>
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
                                                                                                                                                    </FirebaseStateMatsushimaMensaje>
                                                                                                                                                  </FirebaseStateTomaoka>
                                                                                                                                                </FirebaseStateTomaokaMartes>
                                                                                                                                              </FirebaseStateTomaokaMiercoles>
                                                                                                                                            </FirebaseStateTomaokaJueves>
                                                                                                                                          </FirebaseStateTomaokaViernes>
                                                                                                                                        </FirebaseStateTomaokaSabado>
                                                                                                                                      </FirebaseStateTomaokaDomingo>
                                                                                                                                    </FirebaseStateTomaokaMensaje>
                                                                                                                                  </FirebaseStateOishi>
                                                                                                                                </FirebaseStateOishiMartes>
                                                                                                                              </FirebaseStateOishiMiercoles>
                                                                                                                            </FirebaseStateOishiJueves>
                                                                                                                          </FirebaseStateOishiViernes>
                                                                                                                        </FirebaseStateOishiSabado>
                                                                                                                      </FirebaseStateOishiDomingo>
                                                                                                                    </FirebaseStateOishiMensaje>
                                                                                                                  </FirebaseStateOkamoto>
                                                                                                                </FirebaseStateOkamotoMartes>
                                                                                                              </FirebaseStateOkamotoMiercoles>
                                                                                                            </FirebaseStateOkamotoJueves>
                                                                                                          </FirebaseStateOkamotoViernes>
                                                                                                        </FirebaseStateOkamotoSabado>
                                                                                                      </FirebaseStateOkamotoDomingo>
                                                                                                    </FirebaseStateOkamotoMensaje>
                                                                                                  </FirebaseStateYamakado>
                                                                                                </FirebaseStateYamakadoMartes>
                                                                                              </FirebaseStateYamakadoMiercoles>
                                                                                            </FirebaseStateYamakadoJueves>
                                                                                          </FirebaseStateYamakadoViernes>
                                                                                        </FirebaseStateYamakadoSabado>
                                                                                      </FirebaseStateYamakadoDomingo>
                                                                                    </FirebaseStateYamakadoMensaje>
                                                                                  </FirebaseStateSklar>
                                                                                </FirebaseStateSklarMartes>
                                                                              </FirebaseStateSklarMiercoles>
                                                                            </FirebaseStateSklarJueves>
                                                                          </FirebaseStateSklarViernes>
                                                                        </FirebaseStateSklarSabado>
                                                                      </FirebaseStateSklarDomingo>
                                                                    </FirebaseStateSklarMensaje>
                                                                  </FirebaseStateEnrique>
                                                                </FirebaseStateEnriqueMartes>
                                                              </FirebaseStateEnriqueMiercoles>
                                                            </FirebaseStateEnriqueJueves>
                                                          </FirebaseStateEnriqueViernes>
                                                        </FirebaseStateEnriqueSabado>
                                                      </FirebaseStateEnriqueDomingo>
                                                    </FirebaseStateEnriqueMensaje>
                                                  </FirebaseStateUser1>
                                                </FirebaseStateUser1Martes>
                                              </FirebaseStateUser1Miercoles>
                                            </FirebaseStateUser1Jueves>
                                          </FirebaseStateUser1Viernes>
                                        </FirebaseStateUser1Sabado>
                                      </FirebaseStateUser1Domingo>
                                    </FirebaseStateUser1Mensaje>
                                  </FirebaseStateUser2>
                                </FirebaseStateUser2Martes>
                              </FirebaseStateUser2Miercoles>
                            </FirebaseStateUser2Jueves>
                          </FirebaseStateUser2Viernes>
                        </FirebaseStateUser2Sabado>
                      </FirebaseStateUser2Domingo>
                    </FirebaseStateUser2Mensaje>
                  </FirebaseStateUser3>
                </FirebaseStateUser3Martes>
              </FirebaseStateUser3Miercoles>
            </FirebaseStateUser3Jueves>
          </FirebaseStateUser3Viernes>
        </FirebaseStateUser3Sabado>
      </FirebaseStateUser3Domingo>
    </FirebaseStateUser3Mensaje>
  );
};

export default App;

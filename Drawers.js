import "react-native-gesture-handler";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItemList, DrawerItem,} from "@react-navigation/drawer";
import { getAuth, signOut } from "firebase/auth";
import { BlurView } from "expo-blur";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import avatar from "./assets/fotos/avatar.png";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

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
import MensajeMatsushima from "./views/Matsushima/MensajeMatsushima";

//Tomaoka
import LunesTomaoka from "./views/Tomaoka/LunesTomaoka";
import MartesTomaoka from "./views/Tomaoka/MartesTomaoka";
import MiercolesTomaoka from "./views/Tomaoka/MiercolesTomaoka";
import JuevesTomaoka from "./views/Tomaoka/JuevesTomaoka";
import ViernesTomaoka from "./views/Tomaoka/ViernesTomaoka";
import SabadoTomaoka from "./views/Tomaoka/SabadoTomaoka";
import DomingoTomaoka from "./views/Tomaoka/DomingoTomaoka";
import MensajeTomaoka from "./views/Tomaoka/MensajeTomaoka";

//Oishi
import LunesOishi from "./views/Oishi/LunesOishi";
import MartesOishi from "./views/Oishi/MartesOishi";
import MiercolesOishi from "./views/Oishi/MiercolesOishi";
import JuevesOishi from "./views/Oishi/JuevesOishi";
import ViernesOishi from "./views/Oishi/ViernesOishi";
import SabadoOishi from "./views/Oishi/SabadoOishi";
import DomingoOishi from "./views/Oishi/DomingoOishi";
import MensajeOishi from "./views/Oishi/MensajeOishi";

//Okamoto
import LunesOkamoto from "./views/Okamoto/LunesOkamoto";
import MartesOkamoto from "./views/Okamoto/MartesOkamoto";
import MiercolesOkamoto from "./views/Okamoto/MiercolesOkamoto";
import JuevesOkamoto from "./views/Okamoto/JuevesOkamoto";
import ViernesOkamoto from "./views/Okamoto/ViernesOkamoto";
import SabadoOkamoto from "./views/Okamoto/SabadoOkamoto";
import DomingoOkamoto from "./views/Okamoto/DomingoOkamoto";
import MensajeOkamoto from "./views/Okamoto/MensajeOkamoto";

//Yamakado
import LunesYamakado from "./views/Yamakado/LunesYamakado";
import MartesYamakado from "./views/Yamakado/MartesYamakado";
import MiercolesYamakado from "./views/Yamakado/MiercolesYamakado";
import JuevesYamakado from "./views/Yamakado/JuevesYamakado";
import ViernesYamakado from "./views/Yamakado/ViernesYamakado";
import SabadoYamakado from "./views/Yamakado/SabadoYamakado";
import DomingoYamakado from "./views/Yamakado/DomingoYamakado";
import MensajeYamakado from "./views/Yamakado/MensajeYamakado";

//Sklar
import LunesSklar from "./views/Sklar/LunesSklar";
import MartesSklar from "./views/Sklar/MartesSklar";
import MiercolesSklar from "./views/Sklar/MiercolesSklar";
import JuevesSklar from "./views/Sklar/JuevesSklar";
import ViernesSklar from "./views/Sklar/ViernesSklar";
import SabadoSklar from "./views/Sklar/SabadoSklar";
import DomingoSklar from "./views/Sklar/DomingoSklar";
import MensajeSklar from "./views/Sklar/MensajeSklar";

//Enrique
import LunesEnrique from "./views/Enrique/LunesEnrique";
import MartesEnrique from "./views/Enrique/MartesEnrique";
import MiercolesEnrique from "./views/Enrique/MiercolesEnrique";
import JuevesEnrique from "./views/Enrique/JuevesEnrique";
import ViernesEnrique from "./views/Enrique/ViernesEnrique";
import SabadoEnrique from "./views/Enrique/SabadoEnrique";
import DomingoEnrique from "./views/Enrique/DomingoEnrique";
import MensajeEnrique from "./views/Enrique/MensajeEnrique";

//User1
import LunesUser1 from "./views/User1/LunesUser1";
import MartesUser1 from "./views/User1/MartesUser1";
import MiercolesUser1 from "./views/User1/MiercolesUser1";
import JuevesUser1 from "./views/User1/JuevesUser1";
import ViernesUser1 from "./views/User1/ViernesUser1";
import SabadoUser1 from "./views/User1/SabadoUser1";
import DomingoUser1 from "./views/User1/DomingoUser1";
import MensajeUser1 from "./views/User1/MensajeUser1";

//User2
import LunesUser2 from "./views/User2/LunesUser2";
import MartesUser2 from "./views/User2/MartesUser2";
import MiercolesUser2 from "./views/User2/MiercolesUser2";
import JuevesUser2 from "./views/User2/JuevesUser2";
import ViernesUser2 from "./views/User2/ViernesUser2";
import SabadoUser2 from "./views/User2/SabadoUser2";
import DomingoUser2 from "./views/User2/DomingoUser2";
import MensajeUser2 from "./views/User2/MensajeUser2";

//User3
import LunesUser3 from "./views/User3/LunesUser3";
import MartesUser3 from "./views/User3/MartesUser3";
import MiercolesUser3 from "./views/User3/MiercolesUser3";
import JuevesUser3 from "./views/User3/JuevesUser3";
import ViernesUser3 from "./views/User3/ViernesUser3";
import SabadoUser3 from "./views/User3/SabadoUser3";
import DomingoUser3 from "./views/User3/DomingoUser3";
import MensajeUser3 from "./views/User3/MensajeUser3";

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
      <View {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          icon={({ color, size }) => (
            <Icon1 name="logout" color={"white"} size={size} />
          )}
          onPress={handleLogout}
          labelStyle={styles.logoutLabel}
        />
      </View>
    </View>
  );
};

export const HoshinoDrawer = () => {
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
          margin: -5,
        },
        drawerItemStyle: { marginVertical: 10 },
        // Configuración diferente para Android e iOS
        drawerType: Platform.OS === "ios" ? "front" : "front", // iOS empuja la pantalla, Android muestra transparente
        overlayColor:
          Platform.OS === "ios" ? "rgba(0, 0, 0, 0.5)" : "transparent", // Fondo traslúcido en iOS
        drawerStyle: {
          backgroundColor: Platform.OS === "ios" ? "#ffffff" : "transparent", // Color de fondo según la plataforma
          width: 210,
          height: "100%",
        },
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "envelope" : "envelope"}
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
export const MatsushimaDrawer = () => {
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
          margin: -5,
        },
        drawerItemStyle: { marginVertical: 10 },
        // Configuración diferente para Android e iOS
        drawerType: Platform.OS === "ios" ? "front" : "front", // iOS empuja la pantalla, Android muestra transparente
        overlayColor:
          Platform.OS === "ios" ? "rgba(0, 0, 0, 0.5)" : "transparent", // Fondo traslúcido en iOS
        drawerStyle: {
          backgroundColor: Platform.OS === "ios" ? "#ffffff" : "transparent", // Color de fondo según la plataforma
          width: 210,
          height: "100%",
        },
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
        component={MensajeMatsushima}
        options={{
          title: "Mensaje",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "black", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "envelope" : "envelope"}
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
export const TomaokaDrawer = () => {
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
          margin: -5,
        },
        drawerItemStyle: { marginVertical: 10 },
        // Configuración diferente para Android e iOS
        drawerType: Platform.OS === "ios" ? "front" : "front", // iOS empuja la pantalla, Android muestra transparente
        overlayColor:
          Platform.OS === "ios" ? "rgba(0, 0, 0, 0.5)" : "transparent", // Fondo traslúcido en iOS
        drawerStyle: {
          backgroundColor: Platform.OS === "ios" ? "#ffffff" : "transparent", // Color de fondo según la plataforma
          width: 210,
          height: "100%",
        },
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
        component={MensajeTomaoka}
        options={{
          title: "Mensaje",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "black", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "envelope" : "envelope"}
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
export const OishiDrawer = () => {
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
          margin: -5,
        },
        drawerItemStyle: { marginVertical: 10 },
        // Configuración diferente para Android e iOS
        drawerType: Platform.OS === "ios" ? "front" : "front", // iOS empuja la pantalla, Android muestra transparente
        overlayColor:
          Platform.OS === "ios" ? "rgba(0, 0, 0, 0.5)" : "transparent", // Fondo traslúcido en iOS
        drawerStyle: {
          backgroundColor: Platform.OS === "ios" ? "#ffffff" : "transparent", // Color de fondo según la plataforma
          width: 210,
          height: "100%",
        },
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
        component={MensajeOishi}
        options={{
          title: "Mensaje",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "black", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "envelope" : "envelope"}
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
export const OkamotoDrawer = () => {
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
          margin: -5,
        },
        drawerItemStyle: { marginVertical: 10 },
        // Configuración diferente para Android e iOS
        drawerType: Platform.OS === "ios" ? "front" : "front", // iOS empuja la pantalla, Android muestra transparente
        overlayColor:
          Platform.OS === "ios" ? "rgba(0, 0, 0, 0.5)" : "transparent", // Fondo traslúcido en iOS
        drawerStyle: {
          backgroundColor: Platform.OS === "ios" ? "#ffffff" : "transparent", // Color de fondo según la plataforma
          width: 210,
          height: "100%",
        },
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
        component={MensajeOkamoto}
        options={{
          title: "Mensaje",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "black", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "envelope" : "envelope"}
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
export const YamakadoDrawer = () => {
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
          margin: -5,
        },
        drawerItemStyle: { marginVertical: 10 },
        // Configuración diferente para Android e iOS
        drawerType: Platform.OS === "ios" ? "front" : "front", // iOS empuja la pantalla, Android muestra transparente
        overlayColor:
          Platform.OS === "ios" ? "rgba(0, 0, 0, 0.5)" : "transparent", // Fondo traslúcido en iOS
        drawerStyle: {
          backgroundColor: Platform.OS === "ios" ? "#ffffff" : "transparent", // Color de fondo según la plataforma
          width: 210,
          height: "100%",
        },
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
        component={MensajeYamakado}
        options={{
          title: "Mensaje",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "black", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "envelope" : "envelope"}
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
export const SklarDrawer = () => {
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
          margin: -5,
        },
        drawerItemStyle: { marginVertical: 10 },
        // Configuración diferente para Android e iOS
        drawerType: Platform.OS === "ios" ? "front" : "front", // iOS empuja la pantalla, Android muestra transparente
        overlayColor:
          Platform.OS === "ios" ? "rgba(0, 0, 0, 0.5)" : "transparent", // Fondo traslúcido en iOS
        drawerStyle: {
          backgroundColor: Platform.OS === "ios" ? "#ffffff" : "transparent", // Color de fondo según la plataforma
          width: 210,
          height: "100%",
        },
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
        component={MensajeSklar}
        options={{
          title: "Mensaje",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "black", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "envelope" : "envelope"}
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
export const EnriqueDrawer = () => {
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
          margin: -5,
        },
        drawerItemStyle: { marginVertical: 10 },
        // Configuración diferente para Android e iOS
        drawerType: Platform.OS === "ios" ? "front" : "front", // iOS empuja la pantalla, Android muestra transparente
        overlayColor:
          Platform.OS === "ios" ? "rgba(0, 0, 0, 0.5)" : "transparent", // Fondo traslúcido en iOS
        drawerStyle: {
          backgroundColor: Platform.OS === "ios" ? "#ffffff" : "transparent", // Color de fondo según la plataforma
          width: 210,
          height: "100%",
        },
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
        component={MensajeEnrique}
        options={{
          title: "Mensaje",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "black", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "envelope" : "envelope"}
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
export const User1Drawer = () => {
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
          margin: -5,
        },
        drawerItemStyle: { marginVertical: 10 },
        // Configuración diferente para Android e iOS
        drawerType: Platform.OS === "ios" ? "front" : "front", // iOS empuja la pantalla, Android muestra transparente
        overlayColor:
          Platform.OS === "ios" ? "rgba(0, 0, 0, 0.5)" : "transparent", // Fondo traslúcido en iOS
        drawerStyle: {
          backgroundColor: Platform.OS === "ios" ? "#ffffff" : "transparent", // Color de fondo según la plataforma
          width: 210,
          height: "100%",
        },
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
        component={MensajeUser1}
        options={{
          title: "Mensaje",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "black", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "envelope" : "envelope"}
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
export const User2Drawer = () => {
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
          margin: -5,
        },
        drawerItemStyle: { marginVertical: 10 },
        // Configuración diferente para Android e iOS
        drawerType: Platform.OS === "ios" ? "front" : "front", // iOS empuja la pantalla, Android muestra transparente
        overlayColor:
          Platform.OS === "ios" ? "rgba(0, 0, 0, 0.5)" : "transparent", // Fondo traslúcido en iOS
        drawerStyle: {
          backgroundColor: Platform.OS === "ios" ? "#ffffff" : "transparent", // Color de fondo según la plataforma
          width: 210,
          height: "100%",
        },
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
        component={MensajeUser2}
        options={{
          title: "Mensaje",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "black", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "envelope" : "envelope"}
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
export const User3Drawer = () => {
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
          margin: -5,
        },
        drawerItemStyle: { marginVertical: 10 },
        // Configuración diferente para Android e iOS
        drawerType: Platform.OS === "ios" ? "front" : "front", // iOS empuja la pantalla, Android muestra transparente
        overlayColor:
          Platform.OS === "ios" ? "rgba(0, 0, 0, 0.5)" : "transparent", // Fondo traslúcido en iOS
        drawerStyle: {
          backgroundColor: Platform.OS === "ios" ? "#ffffff" : "transparent", // Color de fondo según la plataforma
          width: 210,
          height: "100%",
        },
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
            backgroundColor: "black", // Color de fondo del header
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
        component={MensajeUser3}
        options={{
          title: "Mensaje",
          headerTitleAlign: "center",
          // Cambiar color de fondo y el estilo del header
          headerStyle: {
            backgroundColor: "black", // Color de fondo del header
          },
          headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
          headerTitleStyle: {
            fontWeight: "bold", // Puedes personalizar más el estilo del título
          },
          // Cambiar el icono del Drawer
          drawerIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "envelope" : "envelope"}
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
    paddingVertical: 10,
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

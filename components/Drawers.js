import "react-native-gesture-handler";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { getAuth, signOut } from "firebase/auth";
import { BlurView } from "expo-blur";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import avatar from "../assets/fotos/avatar.png"
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

//Hoshino
import LunesHoshino from "../views/Hoshino/LunesHoshino";
import MartesHoshino from "../views/Hoshino/MartesHoshino";
import MiercolesHoshino from "../views/Hoshino/MiercolesHoshino";
import JuevesHoshino from "../views/Hoshino/JuevesHoshino";
import ViernesHoshino from "../views/Hoshino/ViernesHoshino";
import SabadoHoshino from "../views/Hoshino/SabadoHoshino";
import DomingoHoshino from "../views/Hoshino/DomingoHoshino";
import MensajeHoshino from "../views/Hoshino/MensajeHoshino";

//Matsushima
import LunesMatsushima from "../views/Matsushima/LunesMatsushima";
import MartesMatsushima from "../views/Matsushima/MartesMatsushima";
import MiercolesMatsushima from "../views/Matsushima/MiercolesMatsushima";
import JuevesMatsushima from "../views/Matsushima/JuevesMatsushima";
import ViernesMatsushima from "../views/Matsushima/ViernesMatsushima";
import SabadoMatsushima from "../views/Matsushima/SabadoMatsushima";
import DomingoMatsushima from "../views/Matsushima/DomingoMatsushima";
import MensajeMatsushima from "../views/Matsushima/MensajeMatsushima";

//Tomaoka
import LunesTomaoka from "../views/Tomaoka/LunesTomaoka";
import MartesTomaoka from "../views/Tomaoka/MartesTomaoka";
import MiercolesTomaoka from "../views/Tomaoka/MiercolesTomaoka";
import JuevesTomaoka from "../views/Tomaoka/JuevesTomaoka";
import ViernesTomaoka from "../views/Tomaoka/ViernesTomaoka";
import SabadoTomaoka from "../views/Tomaoka/SabadoTomaoka";
import DomingoTomaoka from "../views/Tomaoka/DomingoTomaoka";
import MensajeTomaoka from "../views/Tomaoka/MensajeTomaoka";

//Oishi
import LunesOishi from "../views/Oishi/LunesOishi";
import MartesOishi from "../views/Oishi/MartesOishi";
import MiercolesOishi from "../views/Oishi/MiercolesOishi";
import JuevesOishi from "../views/Oishi/JuevesOishi";
import ViernesOishi from "../views/Oishi/ViernesOishi";
import SabadoOishi from "../views/Oishi/SabadoOishi";
import DomingoOishi from "../views/Oishi/DomingoOishi";
import MensajeOishi from "../views/Oishi/MensajeOishi";

//Okamoto
import LunesOkamoto from "../views/Okamoto/LunesOkamoto";
import MartesOkamoto from "../views/Okamoto/MartesOkamoto";
import MiercolesOkamoto from "../views/Okamoto/MiercolesOkamoto";
import JuevesOkamoto from "../views/Okamoto/JuevesOkamoto";
import ViernesOkamoto from "../views/Okamoto/ViernesOkamoto";
import SabadoOkamoto from "../views/Okamoto/SabadoOkamoto";
import DomingoOkamoto from "../views/Okamoto/DomingoOkamoto";
import MensajeOkamoto from "../views/Okamoto/MensajeOkamoto";

//Yamakado
import LunesYamakado from "../views/Yamakado/LunesYamakado";
import MartesYamakado from "../views/Yamakado/MartesYamakado";
import MiercolesYamakado from "../views/Yamakado/MiercolesYamakado";
import JuevesYamakado from "../views/Yamakado/JuevesYamakado";
import ViernesYamakado from "../views/Yamakado/ViernesYamakado";
import SabadoYamakado from "../views/Yamakado/SabadoYamakado";
import DomingoYamakado from "../views/Yamakado/DomingoYamakado";
import MensajeYamakado from "../views/Yamakado/MensajeYamakado";

//Sklar
import LunesSklar from "../views/Sklar/LunesSklar";
import MartesSklar from "../views/Sklar/MartesSklar";
import MiercolesSklar from "../views/Sklar/MiercolesSklar";
import JuevesSklar from "../views/Sklar/JuevesSklar";
import ViernesSklar from "../views/Sklar/ViernesSklar";
import SabadoSklar from "../views/Sklar/SabadoSklar";
import DomingoSklar from "../views/Sklar/DomingoSklar";
import MensajeSklar from "../views/Sklar/MensajeSklar";

//Enrique
import LunesEnrique from "../views/Enrique/LunesEnrique";
import MartesEnrique from "../views/Enrique/MartesEnrique";
import MiercolesEnrique from "../views/Enrique/MiercolesEnrique";
import JuevesEnrique from "../views/Enrique/JuevesEnrique";
import ViernesEnrique from "../views/Enrique/ViernesEnrique";
import SabadoEnrique from "../views/Enrique/SabadoEnrique";
import DomingoEnrique from "../views/Enrique/DomingoEnrique";
import MensajeEnrique from "../views/Enrique/MensajeEnrique";

//User1
import LunesUser1 from "../views/User1/LunesUser1";
import MartesUser1 from "../views/User1/MartesUser1";
import MiercolesUser1 from "../views/User1/MiercolesUser1";
import JuevesUser1 from "../views/User1/JuevesUser1";
import ViernesUser1 from "../views/User1/ViernesUser1";
import SabadoUser1 from "../views/User1/SabadoUser1";
import DomingoUser1 from "../views/User1/DomingoUser1";
import MensajeUser1 from "../views/User1/MensajeUser1";

//User2
import LunesUser2 from "../views/User2/LunesUser2";
import MartesUser2 from "../views/User2/MartesUser2";
import MiercolesUser2 from "../views/User2/MiercolesUser2";
import JuevesUser2 from "../views/User2/JuevesUser2";
import ViernesUser2 from "../views/User2/ViernesUser2";
import SabadoUser2 from "../views/User2/SabadoUser2";
import DomingoUser2 from "../views/User2/DomingoUser2";
import MensajeUser2 from "../views/User2/MensajeUser2";

//User3
import LunesUser3 from "../views/User3/LunesUser3";
import MartesUser3 from "../views/User3/MartesUser3";
import MiercolesUser3 from "../views/User3/MiercolesUser3";
import JuevesUser3 from "../views/User3/JuevesUser3";
import ViernesUser3 from "../views/User3/ViernesUser3";
import SabadoUser3 from "../views/User3/SabadoUser3";
import DomingoUser3 from "../views/User3/DomingoUser3";
import MensajeUser3 from "../views/User3/MensajeUser3";

const Drawer = createDrawerNavigator();
const auth = getAuth();

const usersConfig = {
  hoshino: [
    { name: "Lunes", component: LunesHoshino, iconName: "truck-fast" },
    { name: "Martes", component: MartesHoshino, iconName: "truck-fast" },
    { name: "Miercoles", component: MiercolesHoshino, iconName: "truck-fast" },
    { name: "Jueves", component: JuevesHoshino, iconName: "truck-fast" },
    { name: "Viernes", component: ViernesHoshino, iconName: "truck-fast" },
    { name: "Sabado", component: SabadoHoshino, iconName: "truck-fast" },
    { name: "Domingo", component: DomingoHoshino, iconName: "truck-fast" },
    { name: "Mensaje", component: MensajeHoshino, iconName: "envelope" },
  ],
  matsushima: [
    { name: "Lunes", component: LunesMatsushima, iconName: "truck-fast" },
    { name: "Martes", component: MartesMatsushima, iconName: "truck-fast" },
    { name: "Miercoles", component: MiercolesMatsushima,iconName: "truck-fast",},
    { name: "Jueves", component: JuevesMatsushima, iconName: "truck-fast" },
    { name: "Viernes", component: ViernesMatsushima, iconName: "truck-fast" },
    { name: "Sabado", component: SabadoMatsushima, iconName: "truck-fast" },
    { name: "Domingo", component: DomingoMatsushima, iconName: "truck-fast" },
    { name: "Mensaje", component: MensajeMatsushima, iconName: "envelope" },
  ],
  tomaoka: [
    { name: "Lunes", component: LunesTomaoka, iconName: "truck-fast" },
    { name: "Martes", component: MartesTomaoka, iconName: "truck-fast" },
    { name: "Miercoles", component: MiercolesTomaoka, iconName: "truck-fast" },
    { name: "Jueves", component: JuevesTomaoka, iconName: "truck-fast" },
    { name: "Viernes", component: ViernesTomaoka, iconName: "truck-fast" },
    { name: "Sabado", component: SabadoTomaoka, iconName: "truck-fast" },
    { name: "Domingo", component: DomingoTomaoka, iconName: "truck-fast" },
    { name: "Mensaje", component: MensajeTomaoka, iconName: "envelope" },
  ],
  oishi: [
    { name: "Lunes", component: LunesOishi, iconName: "truck-fast" },
    { name: "Martes", component: MartesOishi, iconName: "truck-fast" },
    { name: "Miercoles", component: MiercolesOishi, iconName: "truck-fast" },
    { name: "Jueves", component: JuevesOishi, iconName: "truck-fast" },
    { name: "Viernes", component: ViernesOishi, iconName: "truck-fast" },
    { name: "Sabado", component: SabadoOishi, iconName: "truck-fast" },
    { name: "Domingo", component: DomingoOishi, iconName: "truck-fast" },
    { name: "Mensaje", component: MensajeOishi, iconName: "envelope" },
  ],
  okamoto: [
    { name: "Lunes", component: LunesOkamoto, iconName: "truck-fast" },
    { name: "Martes", component: MartesOkamoto, iconName: "truck-fast" },
    { name: "Miercoles", component: MiercolesOkamoto, iconName: "truck-fast" },
    { name: "Jueves", component: JuevesOkamoto, iconName: "truck-fast" },
    { name: "Viernes", component: ViernesOkamoto, iconName: "truck-fast" },
    { name: "Sabado", component: SabadoOkamoto, iconName: "truck-fast" },
    { name: "Domingo", component: DomingoOkamoto, iconName: "truck-fast" },
    { name: "Mensaje", component: MensajeOkamoto, iconName: "envelope" },
  ],
  yamakado: [
    { name: "Lunes", component: LunesYamakado, iconName: "truck-fast" },
    { name: "Martes", component: MartesYamakado, iconName: "truck-fast" },
    { name: "Miercoles", component: MiercolesYamakado, iconName: "truck-fast" },
    { name: "Jueves", component: JuevesYamakado, iconName: "truck-fast" },
    { name: "Viernes", component: ViernesYamakado, iconName: "truck-fast" },
    { name: "Sabado", component: SabadoYamakado, iconName: "truck-fast" },
    { name: "Domingo", component: DomingoYamakado, iconName: "truck-fast" },
    { name: "Mensaje", component: MensajeYamakado, iconName: "envelope" },
  ],
  sklar: [
    { name: "　　月", component: LunesSklar, iconName: "truck-fast" },
    { name: "火", component: MartesSklar, iconName: "truck-fast" },
    { name: "Miercoles", component: MiercolesSklar, iconName: "truck-fast" },
    { name: "Jueves", component: JuevesSklar, iconName: "truck-fast" },
    { name: "Viernes", component: ViernesSklar, iconName: "truck-fast" },
    { name: "Sabado", component: SabadoSklar, iconName: "truck-fast" },
    { name: "Domingo", component: DomingoSklar, iconName: "truck-fast" },
    { name: "Mensaje", component: MensajeSklar, iconName: "envelope" },
  ],
  enrique: [
    { name: "Lunes", component: LunesEnrique, iconName: "truck-fast" },
    { name: "Martes", component: MartesEnrique, iconName: "truck-fast" },
    { name: "Miercoles", component: MiercolesEnrique, iconName: "truck-fast" },
    { name: "Jueves", component: JuevesEnrique, iconName: "truck-fast" },
    { name: "Viernes", component: ViernesEnrique, iconName: "truck-fast" },
    { name: "Sabado", component: SabadoEnrique, iconName: "truck-fast" },
    { name: "Domingo", component: DomingoEnrique, iconName: "truck-fast" },
    { name: "Mensaje", component: MensajeEnrique, iconName: "envelope" },
  ],
  user1: [
    { name: "Lunes", component: LunesUser1, iconName: "truck-fast" },
    { name: "Martes", component: MartesUser1, iconName: "truck-fast" },
    { name: "Miercoles", component: MiercolesUser1, iconName: "truck-fast" },
    { name: "Jueves", component: JuevesUser1, iconName: "truck-fast" },
    { name: "Viernes", component: ViernesUser1, iconName: "truck-fast" },
    { name: "Sabado", component: SabadoUser1, iconName: "truck-fast" },
    { name: "Domingo", component: DomingoUser1, iconName: "truck-fast" },
    { name: "Mensaje", component: MensajeUser1, iconName: "envelope" },
  ],
  user2: [
    { name: "Lunes", component: LunesUser2, iconName: "truck-fast" },
    { name: "Martes", component: MartesUser2, iconName: "truck-fast" },
    { name: "Miercoles", component: MiercolesUser2, iconName: "truck-fast" },
    { name: "Jueves", component: JuevesUser2, iconName: "truck-fast" },
    { name: "Viernes", component: ViernesUser2, iconName: "truck-fast" },
    { name: "Sabado", component: SabadoUser2, iconName: "truck-fast" },
    { name: "Domingo", component: DomingoUser2, iconName: "truck-fast" },
    { name: "Mensaje", component: MensajeUser2, iconName: "envelope" },
  ],
  user3: [
    { name: "Lunes", component: LunesUser3, iconName: "truck-fast" },
    { name: "Martes", component: MartesUser3, iconName: "truck-fast" },
    { name: "Miercoles", component: MiercolesUser3, iconName: "truck-fast" },
    { name: "Jueves", component: JuevesUser3, iconName: "truck-fast" },
    { name: "Viernes", component: ViernesUser3, iconName: "truck-fast" },
    { name: "Sabado", component: SabadoUser3, iconName: "truck-fast" },
    { name: "Domingo", component: DomingoUser3, iconName: "truck-fast" },
    { name: "Mensaje", component: MensajeUser3, iconName: "envelope" },
  ],
};

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
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.hoshino.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
            headerTitleAlign: "center",
            // Cambiar color de fondo y el estilo del header
            headerStyle: {
              backgroundColor: "black", // Color de fondo del header
            },
            headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
            headerTitleStyle: {
              fontWeight: "bold", // Puedes personalizar más el estilo del título
            },
            drawerIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? screen.iconName : "truck-ramp-box"}
                size={size}
                color={focused ? "#17f502" : color}
              />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
export const MatsushimaDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Matsushima" />
      )}
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.matsushima.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
            headerTitleAlign: "center",
            // Cambiar color de fondo y el estilo del header
            headerStyle: {
              backgroundColor: "black", // Color de fondo del header
            },
            headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
            headerTitleStyle: {
              fontWeight: "bold", // Puedes personalizar más el estilo del título
            },
            drawerIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? screen.iconName : "truck-ramp-box"}
                size={size}
                color={focused ? "#17f502" : color}
              />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
export const TomaokaDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Tomaoka" />
      )}
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.tomaoka.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
            headerTitleAlign: "center",
            // Cambiar color de fondo y el estilo del header
            headerStyle: {
              backgroundColor: "black", // Color de fondo del header
            },
            headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
            headerTitleStyle: {
              fontWeight: "bold", // Puedes personalizar más el estilo del título
            },
            drawerIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? screen.iconName : "truck-ramp-box"}
                size={size}
                color={focused ? "#17f502" : color}
              />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
export const OishiDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Oishi vagabundao" />
      )}
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.oishi.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
            headerTitleAlign: "center",
            // Cambiar color de fondo y el estilo del header
            headerStyle: {
              backgroundColor: "black", // Color de fondo del header
            },
            headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
            headerTitleStyle: {
              fontWeight: "bold", // Puedes personalizar más el estilo del título
            },
            drawerIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? screen.iconName : "truck-ramp-box"}
                size={size}
                color={focused ? "#17f502" : color}
              />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
export const OkamotoDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Okamoto" />
      )}
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.okamoto.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
            headerTitleAlign: "center",
            // Cambiar color de fondo y el estilo del header
            headerStyle: {
              backgroundColor: "black", // Color de fondo del header
            },
            headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
            headerTitleStyle: {
              fontWeight: "bold", // Puedes personalizar más el estilo del título
            },
            drawerIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? screen.iconName : "truck-ramp-box"}
                size={size}
                color={focused ? "#17f502" : color}
              />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
export const YamakadoDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Yamakado" />
      )}
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.yamakado.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
            headerTitleAlign: "center",
            // Cambiar color de fondo y el estilo del header
            headerStyle: {
              backgroundColor: "black", // Color de fondo del header
            },
            headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
            headerTitleStyle: {
              fontWeight: "bold", // Puedes personalizar más el estilo del título
            },
            drawerIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? screen.iconName : "truck-ramp-box"}
                size={size}
                color={focused ? "#17f502" : color}
              />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
export const SklarDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Sklar" />
      )}
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.sklar.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
            headerTitleAlign: "center",
            // Cambiar color de fondo y el estilo del header
            headerStyle: {
              backgroundColor: "black", // Color de fondo del header
            },
            headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
            headerTitleStyle: {
              fontWeight: "bold", // Puedes personalizar más el estilo del título
            },
            drawerIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? screen.iconName : "truck-ramp-box"}
                size={size}
                color={focused ? "#17f502" : color}
              />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
export const EnriqueDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="Enrique" />
      )}
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.enrique.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
            headerTitleAlign: "center",
            // Cambiar color de fondo y el estilo del header
            headerStyle: {
              backgroundColor: "black", // Color de fondo del header
            },
            headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
            headerTitleStyle: {
              fontWeight: "bold", // Puedes personalizar más el estilo del título
            },
            drawerIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? screen.iconName : "truck-ramp-box"}
                size={size}
                color={focused ? "#17f502" : color}
              />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
export const User1Drawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="User1" />
      )}
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.user1.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
            headerTitleAlign: "center",
            // Cambiar color de fondo y el estilo del header
            headerStyle: {
              backgroundColor: "black", // Color de fondo del header
            },
            headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
            headerTitleStyle: {
              fontWeight: "bold", // Puedes personalizar más el estilo del título
            },
            drawerIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? screen.iconName : "truck-ramp-box"}
                size={size}
                color={focused ? "#17f502" : color}
              />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
export const User2Drawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="User2" />
      )}
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.user2.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
            headerTitleAlign: "center",
            // Cambiar color de fondo y el estilo del header
            headerStyle: {
              backgroundColor: "black", // Color de fondo del header
            },
            headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
            headerTitleStyle: {
              fontWeight: "bold", // Puedes personalizar más el estilo del título
            },
            drawerIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? screen.iconName : "truck-ramp-box"}
                size={size}
                color={focused ? "#17f502" : color}
              />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
export const User3Drawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerTitle="User3" />
      )}
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.user3.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
            headerTitleAlign: "center",
            // Cambiar color de fondo y el estilo del header
            headerStyle: {
              backgroundColor: "black", // Color de fondo del header
            },
            headerTintColor: "#FFFFFF", // Color del texto y los íconos en el header
            headerTitleStyle: {
              fontWeight: "bold", // Puedes personalizar más el estilo del título
            },
            drawerIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? screen.iconName : "truck-ramp-box"}
                size={size}
                color={focused ? "#17f502" : color}
              />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

const drawerScreenOptions = {
  drawerActiveTintColor: "#17f502",
  drawerInactiveTintColor: "#fcfcfc",
  drawerLabelStyle: {
    color: "#fcfcfc",
    fontSize: 14,
    fontWeight: "bold",
    margin: -5,
  },
  drawerItemStyle: { marginVertical: 10 },
  drawerType: Platform.OS === "ios" ? "front" : "front",
  overlayColor: Platform.OS === "ios" ? "rgba(0, 0, 0, 0.5)" : "transparent",
  drawerStyle: {
    backgroundColor: Platform.OS === "ios" ? "transparent" : "transparent",
    width: 210,
    height: "100%",
  },
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

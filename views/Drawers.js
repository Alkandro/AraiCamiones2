import "react-native-gesture-handler";
import * as React from "react";
import {useNavigation } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItemList, DrawerItem,} from "@react-navigation/drawer";
import { getAuth, signOut } from "firebase/auth";
import { BlurView } from "expo-blur";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import avatar from "../assets/fotos/avatar.png"
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

//Hoshino
import LunesHoshino from "./Hoshino/LunesHoshino";
import MartesHoshino from "./Hoshino/MartesHoshino";
import MiercolesHoshino from "./Hoshino/MiercolesHoshino";
import JuevesHoshino from "./Hoshino/JuevesHoshino";
import ViernesHoshino from "./Hoshino/ViernesHoshino";
import SabadoHoshino from "./Hoshino/SabadoHoshino";
import DomingoHoshino from "./Hoshino/DomingoHoshino";
import MensajeHoshino from "./Hoshino/MensajeHoshino";

//Matsushima
import LunesMatsushima from "./Matsushima/LunesMatsushima";
import MartesMatsushima from "./Matsushima/MartesMatsushima";
import MiercolesMatsushima from "./Matsushima/MiercolesMatsushima";
import JuevesMatsushima from "./Matsushima/JuevesMatsushima";
import ViernesMatsushima from "./Matsushima/ViernesMatsushima";
import SabadoMatsushima from "./Matsushima/SabadoMatsushima";
import DomingoMatsushima from "./Matsushima/DomingoMatsushima";
import MensajeMatsushima from "./Matsushima/MensajeMatsushima";

//Tomaoka
import LunesTomaoka from "./Tomaoka/LunesTomaoka";
import MartesTomaoka from "./Tomaoka/MartesTomaoka";
import MiercolesTomaoka from "./Tomaoka/MiercolesTomaoka";
import JuevesTomaoka from "./Tomaoka/JuevesTomaoka";
import ViernesTomaoka from "./Tomaoka/ViernesTomaoka";
import SabadoTomaoka from "./Tomaoka/SabadoTomaoka";
import DomingoTomaoka from "./Tomaoka/DomingoTomaoka";
import MensajeTomaoka from "./Tomaoka/MensajeTomaoka";

//Oishi
import LunesOishi from "./Oishi/LunesOishi";
import MartesOishi from "./Oishi/MartesOishi";
import MiercolesOishi from "./Oishi/MiercolesOishi";
import JuevesOishi from "./Oishi/JuevesOishi";
import ViernesOishi from "./Oishi/ViernesOishi";
import SabadoOishi from "./Oishi/SabadoOishi";
import DomingoOishi from "./Oishi/DomingoOishi";
import MensajeOishi from "./Oishi/MensajeOishi";

//Okamoto
import LunesOkamoto from "./Okamoto/LunesOkamoto";
import MartesOkamoto from "./Okamoto/MartesOkamoto";
import MiercolesOkamoto from "./Okamoto/MiercolesOkamoto";
import JuevesOkamoto from "./Okamoto/JuevesOkamoto";
import ViernesOkamoto from "./Okamoto/ViernesOkamoto";
import SabadoOkamoto from "./Okamoto/SabadoOkamoto";
import DomingoOkamoto from "./Okamoto/DomingoOkamoto";
import MensajeOkamoto from "./Okamoto/MensajeOkamoto";

//Yamakado
import LunesYamakado from "./Yamakado/LunesYamakado";
import MartesYamakado from "./Yamakado/MartesYamakado";
import MiercolesYamakado from "./Yamakado/MiercolesYamakado";
import JuevesYamakado from "./Yamakado/JuevesYamakado";
import ViernesYamakado from "./Yamakado/ViernesYamakado";
import SabadoYamakado from "./Yamakado/SabadoYamakado";
import DomingoYamakado from "./Yamakado/DomingoYamakado";
import MensajeYamakado from "./Yamakado/MensajeYamakado";

//Sklar
import LunesSklar from "./Sklar/LunesSklar";
import MartesSklar from "./Sklar/MartesSklar";
import MiercolesSklar from "./Sklar/MiercolesSklar";
import JuevesSklar from "./Sklar/JuevesSklar";
import ViernesSklar from "./Sklar/ViernesSklar";
import SabadoSklar from "./Sklar/SabadoSklar";
import DomingoSklar from "./Sklar/DomingoSklar";
import MensajeSklar from "./Sklar/MensajeSklar";

//Enrique
import LunesEnrique from "./Enrique/LunesEnrique";
import MartesEnrique from "./Enrique/MartesEnrique";
import MiercolesEnrique from "./Enrique/MiercolesEnrique";
import JuevesEnrique from "./Enrique/JuevesEnrique";
import ViernesEnrique from "./Enrique/ViernesEnrique";
import SabadoEnrique from "./Enrique/SabadoEnrique";
import DomingoEnrique from "./Enrique/DomingoEnrique";
import MensajeEnrique from "./Enrique/MensajeEnrique";

//User1
import LunesUser1 from "./User1/LunesUser1";
import MartesUser1 from "./User1/MartesUser1";
import MiercolesUser1 from "./User1/MiercolesUser1";
import JuevesUser1 from "./User1/JuevesUser1";
import ViernesUser1 from "./User1/ViernesUser1";
import SabadoUser1 from "./User1/SabadoUser1";
import DomingoUser1 from "./User1/DomingoUser1";
import MensajeUser1 from "./User1/MensajeUser1";

//User2
import LunesUser2 from "./User2/LunesUser2";
import MartesUser2 from "./User2/MartesUser2";
import MiercolesUser2 from "./User2/MiercolesUser2";
import JuevesUser2 from "./User2/JuevesUser2";
import ViernesUser2 from "./User2/ViernesUser2";
import SabadoUser2 from "./User2/SabadoUser2";
import DomingoUser2 from "./User2/DomingoUser2";
import MensajeUser2 from "./User2/MensajeUser2";

//User3
import LunesUser3 from "./User3/LunesUser3";
import MartesUser3 from "./User3/MartesUser3";
import MiercolesUser3 from "./User3/MiercolesUser3";
import JuevesUser3 from "./User3/JuevesUser3";
import ViernesUser3 from "./User3/ViernesUser3";
import SabadoUser3 from "./User3/SabadoUser3";
import DomingoUser3 from "./User3/DomingoUser3";
import MensajeUser3 from "./User3/MensajeUser3";

const Drawer = createDrawerNavigator();
// const auth = getAuth();

 const usersConfig = {

  hoshino : [
      { name: "Lunes", component: LunesHoshino, iconName: "truck-fast" },
      { name: "Martes", component: MartesHoshino, iconName: "truck-fast" },
      { name: "Miercoles", component: MiercolesHoshino, iconName: "truck-fast" },
      { name: "Jueves", component: JuevesHoshino, iconName: "truck-fast" },
      { name: "Viernes", component: ViernesHoshino, iconName: "truck-fast" },
      { name: "Sabado", component: SabadoHoshino, iconName: "truck-fast" },
      { name: "Domingo", component: DomingoHoshino, iconName: "truck-fast" },
      { name: "Mensaje", component: MensajeHoshino, iconName: "envelope" }
    ],
    matsushima : [
      { name: "Lunes", component: LunesMatsushima, iconName: "truck-fast" },
      { name: "Martes", component: MartesMatsushima, iconName: "truck-fast" },
      { name: "Miercoles", component: MiercolesMatsushima, iconName: "truck-fast" },
      { name: "Jueves", component: JuevesMatsushima, iconName: "truck-fast" },
      { name: "Viernes", component: ViernesMatsushima, iconName: "truck-fast" },
      { name: "Sabado", component: SabadoMatsushima, iconName: "truck-fast" },
      { name: "Domingo", component: DomingoMatsushima, iconName: "truck-fast" },
      { name: "Mensaje", component: MensajeMatsushima, iconName: "envelope" }
    ],
    tomaoka : [
      { name: "Lunes", component: LunesTomaoka, iconName: "truck-fast" },
      { name: "Martes", component: MartesTomaoka, iconName: "truck-fast" },
      { name: "Miercoles", component: MiercolesTomaoka, iconName: "truck-fast" },
      { name: "Jueves", component: JuevesTomaoka, iconName: "truck-fast" },
      { name: "Viernes", component: ViernesTomaoka, iconName: "truck-fast" },
      { name: "Sabado", component: SabadoTomaoka, iconName: "truck-fast" },
      { name: "Domingo", component: DomingoTomaoka, iconName: "truck-fast" },
      { name: "Mensaje", component: MensajeTomaoka, iconName: "envelope" }
    ],
     oishi : [
      { name: "Lunes", component: LunesOishi, iconName: "truck-fast" },
      { name: "Martes", component: MartesOishi, iconName: "truck-fast" },
      { name: "Miercoles", component: MiercolesOishi, iconName: "truck-fast" },
      { name: "Jueves", component: JuevesOishi, iconName: "truck-fast" },
      { name: "Viernes", component: ViernesOishi, iconName: "truck-fast" },
      { name: "Sabado", component: SabadoOishi, iconName: "truck-fast" },
      { name: "Domingo", component: DomingoOishi, iconName: "truck-fast" },
      { name: "Mensaje", component: MensajeOishi, iconName: "envelope" }
    ],
    okamoto : [
      { name: "Lunes", component: LunesOkamoto, iconName: "truck-fast" },
      { name: "Martes", component: MartesOkamoto, iconName: "truck-fast" },
      { name: "Miercoles", component: MiercolesOkamoto, iconName: "truck-fast" },
      { name: "Jueves", component: JuevesOkamoto, iconName: "truck-fast" },
      { name: "Viernes", component: ViernesOkamoto, iconName: "truck-fast" },
      { name: "Sabado", component: SabadoOkamoto, iconName: "truck-fast" },
      { name: "Domingo", component: DomingoOkamoto, iconName: "truck-fast" },
      { name: "Mensaje", component: MensajeOkamoto, iconName: "envelope" }
    ],
     yamakado :[
      { name: "Lunes", component: LunesYamakado, iconName: "truck-fast" },
      { name: "Martes", component: MartesYamakado, iconName: "truck-fast" },
      { name: "Miercoles", component: MiercolesYamakado, iconName: "truck-fast" },
      { name: "Jueves", component: JuevesYamakado, iconName: "truck-fast" },
      { name: "Viernes", component: ViernesYamakado, iconName: "truck-fast" },
      { name: "Sabado", component: SabadoYamakado, iconName: "truck-fast" },
      { name: "Domingo", component: DomingoYamakado, iconName: "truck-fast" },
      { name: "Mensaje", component: MensajeYamakado, iconName: "envelope" }
    ],
    sklar : [
      { name: "Lunes", component: LunesSklar, iconName: "truck-fast" },
      { name: "Martes", component: MartesSklar, iconName: "truck-fast" },
      { name: "Miercoles", component: MiercolesSklar, iconName: "truck-fast" },
      { name: "Jueves", component: JuevesSklar, iconName: "truck-fast" },
      { name: "Viernes", component: ViernesSklar, iconName: "truck-fast" },
      { name: "Sabado", component: SabadoSklar, iconName: "truck-fast" },
      { name: "Domingo", component: DomingoSklar, iconName: "truck-fast" },
      { name: "Mensaje", component: MensajeSklar, iconName: "envelope" }
    ],
    enrique : [
      { name: "Lunes", component: LunesEnrique, iconName: "truck-fast" },
      { name: "Martes", component: MartesEnrique, iconName: "truck-fast" },
      { name: "Miercoles", component: MiercolesEnrique, iconName: "truck-fast" },
      { name: "Jueves", component: JuevesEnrique, iconName: "truck-fast" },
      { name: "Viernes", component: ViernesEnrique, iconName: "truck-fast" },
      { name: "Sabado", component: SabadoEnrique, iconName: "truck-fast" },
      { name: "Domingo", component: DomingoEnrique, iconName: "truck-fast" },
      { name: "Mensaje", component: MensajeEnrique, iconName: "envelope" }
    ],
     user1 : [
      { name: "Lunes", component: LunesUser1, iconName: "truck-fast" },
      { name: "Martes", component: MartesUser1, iconName: "truck-fast" },
      { name: "Miercoles", component: MiercolesUser1, iconName: "truck-fast" },
      { name: "Jueves", component: JuevesUser1, iconName: "truck-fast" },
      { name: "Viernes", component: ViernesUser1, iconName: "truck-fast" },
      { name: "Sabado", component: SabadoUser1, iconName: "truck-fast" },
      { name: "Domingo", component: DomingoUser1, iconName: "truck-fast" },
      { name: "Mensaje", component: MensajeUser1, iconName: "envelope" }
    ],
     user2 : [
      { name: "Lunes", component: LunesUser2, iconName: "truck-fast" },
      { name: "Martes", component: MartesUser2, iconName: "truck-fast" },
      { name: "Miercoles", component: MiercolesUser2, iconName: "truck-fast" },
      { name: "Jueves", component: JuevesUser2, iconName: "truck-fast" },
      { name: "Viernes", component: ViernesUser2, iconName: "truck-fast" },
      { name: "Sabado", component: SabadoUser2, iconName: "truck-fast" },
      { name: "Domingo", component: DomingoUser2, iconName: "truck-fast" },
      { name: "Mensaje", component: MensajeUser2, iconName: "envelope" }
    ],
     user3 : [
      { name: "Lunes", component: LunesUser3, iconName: "truck-fast" },
      { name: "Martes", component: MartesUser3, iconName: "truck-fast" },
      { name: "Miercoles", component: MiercolesUser3, iconName: "truck-fast" },
      { name: "Jueves", component: JuevesUser3, iconName: "truck-fast" },
      { name: "Viernes", component: ViernesUser3, iconName: "truck-fast" },
      { name: "Sabado", component: SabadoUser3, iconName: "truck-fast" },
      { name: "Domingo", component: DomingoUser3, iconName: "truck-fast" },
      { name: "Mensaje", component: MensajeUser3, iconName: "envelope" }
    ],
  };

// Componente personalizado para el Drawer
const CustomDrawerContent = ({ drawerTitle, ...props }) => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    const auth = getAuth(); // Asegúrate de que Firebase Auth esté correctamente inicializado
  
    try {
      // Cerrar sesión en Firebase
      await signOut(auth);
  
      // Eliminar datos persistentes en AsyncStorage
      await AsyncStorage.clear();
  
      // Limpia el estado global si usas Redux (opcional)
      if (dispatch) {
        dispatch(clearUser()); // Esto depende de cómo manejas tu Redux
      }
  
      // Redirigir al LoginScreen
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreen" }],
      });
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
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



// Drawer para Hoshino
  export const HoshinoDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} drawerTitle="Hoshino" />}
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.hoshino.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
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
// Drawer para Matsushima
export const MatsushimaDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} drawerTitle="Matsushima" />}
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.matsushima.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
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
      drawerContent={(props) => <CustomDrawerContent {...props} drawerTitle="Tomaoka" />}
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.tomaoka.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
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
      drawerContent={(props) => <CustomDrawerContent {...props} drawerTitle="Oishi" />}
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.oishi.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
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
    drawerContent={(props) => <CustomDrawerContent {...props} drawerTitle="Okamoto" />}
    screenOptions={drawerScreenOptions}
  >
    {usersConfig.okamoto.map((screen) => (
      <Drawer.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={{
          title: screen.name,
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
      drawerContent={(props) => <CustomDrawerContent {...props} drawerTitle="Yamakado" />}
      screenOptions={drawerScreenOptions}
    >
      {usersConfig.yamakado.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.name,
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
    drawerContent={(props) => <CustomDrawerContent {...props} drawerTitle="Sklarr" />}
    screenOptions={drawerScreenOptions}
  >
    {usersConfig.sklar.map((screen) => (
      <Drawer.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={{
          title: screen.name,
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
    drawerContent={(props) => <CustomDrawerContent {...props} drawerTitle="Enrique" />}
    screenOptions={drawerScreenOptions}
  >
    {usersConfig.enrique.map((screen) => (
      <Drawer.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={{
          title: screen.name,
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
    drawerContent={(props) => <CustomDrawerContent {...props} drawerTitle="User1" />}
    screenOptions={drawerScreenOptions}
  >
    {usersConfig.user1.map((screen) => (
      <Drawer.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={{
          title: screen.name,
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
    drawerContent={(props) => <CustomDrawerContent {...props} drawerTitle="User2" />}
    screenOptions={drawerScreenOptions}
  >
    {usersConfig.user2.map((screen) => (
      <Drawer.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={{
          title: screen.name,
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
    drawerContent={(props) => <CustomDrawerContent {...props} drawerTitle="User3" />}
    screenOptions={drawerScreenOptions}
  >
    {usersConfig.user3.map((screen) => (
      <Drawer.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={{
          title: screen.name,
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
    backgroundColor: Platform.OS === "ios" ? "#ffffff" : "transparent",
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


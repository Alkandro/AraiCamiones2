import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { View, ActivityIndicator } from "react-native";

const AuthLoadingScreen = ({ navigation }) => {
  const user = useSelector((state) => state.session.user); // Asegúrate de que session.user tenga el estado persistido

  useEffect(() => {
    if (user) {
      // Si el usuario está autenticado, redirige al Drawer correspondiente
      const email = user.email;
      const drawerRoutes = {
        "tomaoka@arai.co.jp": "TomaokaDrawer",
        "matsushima@arai.co.jp": "MatsushimaDrawer",
        "hoshino@arai.co.jp": "HoshinoDrawer",
        "oishi@arai.co.jp": "OishiDrawer",
        "okamoto@arai.co.jp": "OkamotoDrawer",
        "yamakado@arai.co.jp": "YamakadoDrawer",
        "sklar@arai.co.jp": "SklarDrawer",
        "enrique@arai.co.jp": "EnriqueDrawer",
        "user1@arai.co.jp": "User1Drawer",
        "user2@arai.co.jp": "User2Drawer",
        "user3@arai.co.jp": "User3Drawer",
      };

      const route = drawerRoutes[email] || "LoginScreen"; // Fallback en caso de error
      navigation.reset({
        index: 0,
        routes: [{ name: route }],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreen" }],
      });
    }
  }, [user]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default AuthLoadingScreen;

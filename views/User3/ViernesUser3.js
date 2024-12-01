import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import firebaseContextUser3Viernes from "../../context/firebase/User3State/FirebaseStateUser3Viernes/firebaseContextUser3Viernes";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const Viernes = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(firebaseContextUser3Viernes);
  const { seleccionarPlatillo } = useContext(PedidoContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="viernes"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={eliminarProductoFirebase}
        obtenerProductos={obtenerProductos}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default Viernes;

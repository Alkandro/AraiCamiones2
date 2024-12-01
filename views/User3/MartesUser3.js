import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import firebaseContextUser3Martes from "../../context/firebase/User3State/FirebaseStateUser3Martes/firebaseContextUser3Martes";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const Martes = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(firebaseContextUser3Martes);
  const { seleccionarPlatillo } = useContext(PedidoContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="martes"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={eliminarProductoFirebase}
        obtenerProductos={obtenerProductos}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default Martes;

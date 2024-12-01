import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import firebaseContextUser1Jueves from "../../context/firebase/User1State/FirebaseStateUser1Jueves/firebaseContextUser1Jueves";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const Jueves = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(firebaseContextUser1Jueves);
  const { seleccionarPlatillo } = useContext(PedidoContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="jueves"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={eliminarProductoFirebase}
        obtenerProductos={obtenerProductos}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default Jueves;

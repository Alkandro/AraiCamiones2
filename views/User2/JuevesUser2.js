import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import firebaseContextUser2Jueves from "../../context/firebase/User2State/FirebaseStateUser2Jueves/firebaseContextUser2Jueves";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const Jueves = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(firebaseContextUser2Jueves);
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

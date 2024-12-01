import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import firebaseContextUser2Domingo from "../../context/firebase/User2State/FirebaseStateUser2Domingo/firebaseContextUser2Domingo";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const Domingo = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(firebaseContextUser2Domingo);
  const { seleccionarPlatillo } = useContext(PedidoContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="domingo"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={eliminarProductoFirebase}
        obtenerProductos={obtenerProductos}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default Domingo;

import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import firebaseContextOkamotoDomingo from "../../context/firebase/OkamotoState/FirebaseStateOkamotoDomingo/firebaseContextOkamotoDomingo";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const Domingo = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(firebaseContextOkamotoDomingo);
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

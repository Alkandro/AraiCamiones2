import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import firebaseContextUser1Viernes from "../../context/firebase/User1State/FirebaseStateUser1Viernes/firebaseContextUser1Viernes";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const Viernes = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(firebaseContextUser1Viernes);
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

import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import firebaseContextOishiMartes from "../../context/firebase/OishiState/FirebaseStateOishiMartes/firebaseContextOishiMartes";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const Martes = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(firebaseContextOishiMartes);
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

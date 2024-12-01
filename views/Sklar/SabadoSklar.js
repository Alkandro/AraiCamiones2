import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import firebaseContextSklarSabado from "../../context/firebase/SklarState/FirebaseStateSklarSabado/firebaseContextSklarSabado";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const Sabado = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(firebaseContextSklarSabado);
  const { seleccionarPlatillo } = useContext(PedidoContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="sabado"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={eliminarProductoFirebase}
        obtenerProductos={obtenerProductos}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default Sabado;

import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import firebaseContextSklarMiercoles from "../../context/firebase/SklarState/FirebaseStateSklarMiercoles/firebaseContextSklarMiercoles";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const Miercoles = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(firebaseContextSklarMiercoles);
  const { seleccionarPlatillo } = useContext(PedidoContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="miercoles"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={eliminarProductoFirebase}
        obtenerProductos={obtenerProductos}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default Miercoles;
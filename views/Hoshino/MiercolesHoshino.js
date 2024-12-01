import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import firebaseContextHoshinoMiercoles from "../../context/firebase/Hoshino/FirebaseStateHoshinoMiercoles/firebaseContextHoshinoMiercoles";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const Miercoles = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(firebaseContextHoshinoMiercoles);
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

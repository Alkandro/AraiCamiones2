import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import firebaseContextUser1Miercoles from "../../context/firebase/User1State/FirebaseStateUser1Miercoles/firebaseContextUser1Miercoles";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const Miercoles = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(firebaseContextUser1Miercoles);
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

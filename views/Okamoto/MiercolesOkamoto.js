import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import firebaseContextOkamotoMiercoles from "../../context/firebase/OkamotoState/FirebaseStateOkamotoMiercoles/firebaseContextOkamotoMiercoles";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const Miercoles = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(firebaseContextOkamotoMiercoles);
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

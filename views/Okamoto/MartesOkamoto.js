import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../context/firebase/FirebaseStateUnificado";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const MartesOkamoto = () => {
  const { obtenerProductos, eliminarProductoFirebase, getMenu } =
    useContext(FirebaseContext);
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const menu = getMenu("okamoto", "martes");
  useEffect(() => {
    const unsub = obtenerProductos("okamoto", "martes");
    return () => unsub(); // limpia el listener al salir de la pantalla
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="martes"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={(id) =>
          eliminarProductoFirebase("okamoto", "martes", id)
        }
        obtenerProductos={() => obtenerProductos("okamoto", "martes")}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default MartesOkamoto;

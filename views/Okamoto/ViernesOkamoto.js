import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../context/firebase/FirebaseStateUnificado";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const ViernesOkamoto = () => {
  const { obtenerProductos, eliminarProductoFirebase, getMenu } =
    useContext(FirebaseContext);
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const menu = getMenu("okamoto", "viernes");
  useEffect(() => {
    const unsub = obtenerProductos("okamoto", "viernes");
    return () => unsub(); // limpia el listener al salir de la pantalla
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="viernes"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={(id) =>
          eliminarProductoFirebase("okamoto", "viernes", id)
        }
        obtenerProductos={() => obtenerProductos("okamoto", "viernes")}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default ViernesOkamoto;

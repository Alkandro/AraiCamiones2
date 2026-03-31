import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../context/firebase/FirebaseStateUnificado";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const ViernesTomaoka = () => {
  const { obtenerProductos, eliminarProductoFirebase, getMenu } =
    useContext(FirebaseContext);
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const menu = getMenu("tomaoka", "viernes");
  useEffect(() => {
    const unsub = obtenerProductos("tomaoka", "viernes");
    return () => unsub(); // limpia el listener al salir de la pantalla
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="viernes"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={(id) =>
          eliminarProductoFirebase("tomaoka", "viernes", id)
        }
        obtenerProductos={() => obtenerProductos("tomaoka", "viernes")}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default ViernesTomaoka;

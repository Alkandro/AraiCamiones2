import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../context/firebase/FirebaseStateUnificado";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const DomingoTomaoka = () => {
  const { obtenerProductos, eliminarProductoFirebase, getMenu } =
    useContext(FirebaseContext);
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const menu = getMenu("tomaoka", "domingo");
  useEffect(() => {
    const unsub = obtenerProductos("tomaoka", "domingo");
    return () => unsub(); // limpia el listener al salir de la pantalla
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="domingo"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={(id) =>
          eliminarProductoFirebase("tomaoka", "domingo", id)
        }
        obtenerProductos={() => obtenerProductos("tomaoka", "domingo")}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default DomingoTomaoka;

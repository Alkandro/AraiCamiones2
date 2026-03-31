import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../context/firebase/FirebaseStateUnificado";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const MartesTomaoka = () => {
  const { obtenerProductos, eliminarProductoFirebase, getMenu } =
    useContext(FirebaseContext);
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const menu = getMenu("tomaoka", "martes");
  useEffect(() => {
    const unsub = obtenerProductos("tomaoka", "martes");
    return () => unsub(); // limpia el listener al salir de la pantalla
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="martes"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={(id) =>
          eliminarProductoFirebase("tomaoka", "martes", id)
        }
        obtenerProductos={() => obtenerProductos("tomaoka", "martes")}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default MartesTomaoka;

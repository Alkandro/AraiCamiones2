import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../context/firebase/FirebaseStateUnificado";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const SabadoTomaoka = () => {
  const { obtenerProductos, eliminarProductoFirebase, getMenu } =
    useContext(FirebaseContext);
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const menu = getMenu("tomaoka", "sabado");
  useEffect(() => {
    const unsub = obtenerProductos("tomaoka", "sabado");
    return () => unsub(); // limpia el listener al salir de la pantalla
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="sabado"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={(id) =>
          eliminarProductoFirebase("tomaoka", "sabado", id)
        }
        obtenerProductos={() => obtenerProductos("tomaoka", "sabado")}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default SabadoTomaoka;

import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../context/firebase/FirebaseStateUnificado";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const SabadoHoshino = () => {
  const { obtenerProductos, eliminarProductoFirebase, getMenu } =
    useContext(FirebaseContext);
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const menu = getMenu("hoshino", "sabado");

  useEffect(() => {
    const unsub = obtenerProductos("hoshino", "sabado");
    return () => unsub();
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="sabado"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={(id) =>
          eliminarProductoFirebase("hoshino", "sabado", id)
        }
        obtenerProductos={() => obtenerProductos("hoshino", "sabado")}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default SabadoHoshino;

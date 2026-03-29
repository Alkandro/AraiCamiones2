import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../context/firebase/FirebaseStateUnificado";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const DomingoHoshino = () => {
  const { obtenerProductos, eliminarProductoFirebase, getMenu } =
    useContext(FirebaseContext);
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const menu = getMenu("hoshino", "domingo");

  useEffect(() => {
    const unsub = obtenerProductos("hoshino", "domingo");
    return () => unsub();
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="domingo"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={(id) =>
          eliminarProductoFirebase("hoshino", "domingo", id)
        }
        obtenerProductos={() => obtenerProductos("hoshino", "domingo")}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default DomingoHoshino;

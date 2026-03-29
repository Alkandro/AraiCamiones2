import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../context/firebase/FirebaseStateUnificado";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const Martes = () => {
  const { obtenerProductos, eliminarProductoFirebase, getMenu } =
    useContext(FirebaseContext);
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const menu = getMenu("hoshino", "martes");

  useEffect(() => {
    const unsub = obtenerProductos("hoshino", "martes");
    return () => unsub();
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="martes"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={(id) =>
          eliminarProductoFirebase("hoshino", "martes", id)
        }
        obtenerProductos={() => obtenerProductos("hoshino", "martes")}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default Martes;

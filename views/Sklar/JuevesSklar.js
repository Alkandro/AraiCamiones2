import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../context/firebase/FirebaseStateUnificado";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const JuevesSklar = () => {
  const { obtenerProductos, eliminarProductoFirebase, getMenu } =
    useContext(FirebaseContext);
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const menu = getMenu("sklar", "jueves");
  useEffect(() => {
    const unsub = obtenerProductos("sklar", "jueves");
    return () => unsub(); // limpia el listener al salir de la pantalla
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="jueves"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={(id) =>
          eliminarProductoFirebase("sklar", "jueves", id)
        }
        obtenerProductos={() => obtenerProductos("sklar", "jueves")}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default JuevesSklar;

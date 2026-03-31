import React, { useContext, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import EnviosList from "../../components/EnviosList";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../context/firebase/FirebaseStateUnificado";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const MiercolesYamakado = () => {
  const { obtenerProductos, eliminarProductoFirebase, getMenu } =
    useContext(FirebaseContext);
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const menu = getMenu("yamakado", "miercoles");
  useEffect(() => {
    const unsub = obtenerProductos("yamakado", "miercoles");
    return () => unsub(); // limpia el listener al salir de la pantalla
  }, []);

  return (
    <NativeBaseProvider>
      <EnviosList
        categoria="miercoles"
        menu={menu}
        seleccionarPlatillo={seleccionarPlatillo}
        eliminarProductoFirebase={(id) =>
          eliminarProductoFirebase("yamakado", "miercoles", id)
        }
        obtenerProductos={() => obtenerProductos("yamakado", "miercoles")}
        navigation={useNavigation()}
      />
    </NativeBaseProvider>
  );
};

export default MiercolesYamakado;

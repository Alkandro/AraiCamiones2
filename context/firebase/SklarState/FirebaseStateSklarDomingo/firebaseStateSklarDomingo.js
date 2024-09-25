import React, { useReducer } from "react";

import firebase from "../../../../firebase";
import FirebaseReducerSklar from "../../FirebaseStateSklar/firebaseReducerSklar";
import FirebaseContextSklarDomingo from "./firebaseContextSklarDomingo";

import { OBTENER_PRODUCTOS_SKLAR } from "../../../../types";
import _ from "lodash";


const FirebaseStateSklarDomingo = (props) => {
  // Crear state inicial
  const initialState = {
    menu: [],
  };

  // useReducer con dispatch  para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducerSklar, initialState);

  // Función que se ejecuta para traer los productos
  const obtenerProductos = () => {
    // consultar firebase
    firebase.db
      .collection("sklarDomingo")
      .where("existencia", "==", true) // traer solo los que esten en existencia
      .onSnapshot(manejarSnapshot);

    function manejarSnapshot(snapshot) {
      let platillos = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      // Ordenar por categoria con lodash
      platillos = _.sortBy(platillos, "categoria");

      // console.log(platillos)

      // Tenemos resultados de la base de datos
      dispatch({
        type: OBTENER_PRODUCTOS_SKLAR,
        payload: platillos,
      });
    }
  };
   // Función para eliminar un producto de Firebase
   const eliminarProductoFirebase = async (id) => {
    try {
      await firebase.db.collection("sklarDomingo").doc(id).delete(); // Eliminar el documento por ID
      console.log("Producto eliminado de Firebase");
    } catch (error) {
      console.error("Error eliminando el producto:", error);
    }
  };

  return (
    <FirebaseContextSklarDomingo.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
        eliminarProductoFirebase, // Asegúrate de exportar esta función
      }}
    >
      {props.children}
    </FirebaseContextSklarDomingo.Provider>
  );
};

export default FirebaseStateSklarDomingo;

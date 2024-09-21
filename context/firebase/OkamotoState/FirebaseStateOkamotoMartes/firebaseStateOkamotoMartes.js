import React, { useReducer } from "react";

import firebase from "../../../../firebase";
import FirebaseReducerOkamoto from "../../FirebaseStateOkamoto/firebaseReducerOkamoto";
import FirebaseContextOkamotoMartes from "./firebaseContextOkamotoMartes";

import { OBTENER_PRODUCTOS_OKAMOTO } from "../../../../types";
import _ from "lodash";


const FirebaseStateOkamotoMartes = (props) => {
  // Crear state inicial
  const initialState = {
    menu: [],
  };

  // useReducer con dispatch  para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducerOkamoto, initialState);

  // Función que se ejecuta para traer los productos
  const obtenerProductos = () => {
    // consultar firebase
    firebase.db
      .collection("okamotoMartes")
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
        type: OBTENER_PRODUCTOS_OKAMOTO,
        payload: platillos,
      });
    }
  };
   // Función para eliminar un producto de Firebase
   const eliminarProductoFirebase = async (id) => {
    try {
      await firebase.db.collection("okamotoMartes").doc(id).delete(); // Eliminar el documento por ID
      console.log("Producto eliminado de Firebase");
    } catch (error) {
      console.error("Error eliminando el producto:", error);
    }
  };

  return (
    <FirebaseContextOkamotoMartes.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
        eliminarProductoFirebase, // Asegúrate de exportar esta función
      }}
    >
      {props.children}
    </FirebaseContextOkamotoMartes.Provider>
  );
};

export default FirebaseStateOkamotoMartes;

import React, { useReducer } from "react";

import firebase from "../../../../firebase";
import FirebaseReducerTomaoka from "../../FirebaseStateTomaoka/firebaseReducerTomaoka";
import FirebaseContextTomaokaMensaje from "./firebaseContextTomaokaMensaje";

import { OBTENER_PRODUCTOS_TOMAOKA } from "../../../../types";
import _ from "lodash";

const FirebaseStateTomaokaMensaje = (props) => {
  // Crear state inicial
  const initialState = {
    menu: [],
  };

  // useReducer con dispatch  para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducerTomaoka, initialState);

  // Función que se ejecuta para traer los productos
  const obtenerProductos = () => {
    // consultar firebase
    
    

    firebase.db
      .collection("tomaokaMensaje")
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
      platillos = _.sortBy(platillos, "categoria", "orden");
      platillos = _.orderBy(platillos, "orden")

      // console.log(platillos)

      // Tenemos resultados de la base de datos
      dispatch({
        type: OBTENER_PRODUCTOS_TOMAOKA,
        payload: platillos,
      });
    }
  };
   // Función para eliminar un producto de Firebase
   const eliminarProductoFirebase = async (id) => {
    try {
      await firebase.db.collection("tomaokaMensaje").doc(id).delete(); // Eliminar el documento por ID
      console.log("Producto eliminado de Firebase");
    } catch (error) {
      console.error("Error eliminando el producto:", error);
    }
  };

  return (
    <FirebaseContextTomaokaMensaje.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
        eliminarProductoFirebase,
      }}
    >
      {props.children}
    </FirebaseContextTomaokaMensaje.Provider>
  );
};

export default FirebaseStateTomaokaMensaje;

import React, { useReducer } from "react";

import firebase from "../../../../firebase";
import FirebaseReducerMatsushima from "../../FirebaseStateMatsushima/firebaseReducerMatsushima";
import FirebaseContextMatsushimaMensaje from "./firebaseContextMatsushimaMensaje";

import { OBTENER_PRODUCTOS_MATSUSHIMA } from "../../../../types";
import _ from "lodash";

const FirebaseStateMatsushimaMensaje = (props) => {
  // Crear state inicial
  const initialState = {
    menu: [],
  };

  // useReducer con dispatch  para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducerMatsushima, initialState);

  // Función que se ejecuta para traer los productos
  const obtenerProductos = () => {
    // consultar firebase
    
    

    firebase.db
      .collection("matsushimaMensaje")
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
        type: OBTENER_PRODUCTOS_MATSUSHIMA,
        payload: platillos,
      });
    }
  };
   // Función para eliminar un producto de Firebase
   const eliminarProductoFirebase = async (id) => {
    try {
      await firebase.db.collection("matsushimaMensaje").doc(id).delete(); // Eliminar el documento por ID
      console.log("Producto eliminado de Firebase");
    } catch (error) {
      console.error("Error eliminando el producto:", error);
    }
  };

  return (
    <FirebaseContextMatsushimaMensaje.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
        eliminarProductoFirebase,
      }}
    >
      {props.children}
    </FirebaseContextMatsushimaMensaje.Provider>
  );
};

export default FirebaseStateMatsushimaMensaje;

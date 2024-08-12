import React, { useReducer } from "react";

import firebase from "../../../firebase";
import FirebaseReducerMatsushima from "./firebaseReducerMatsushima";
import FirebaseContextMatsushima from "./firebaseContextMatsushima";

import { OBTENER_PRODUCTOS_MATSUSHIMA } from "../../../types";
import _ from "lodash";


const FirebaseStateMatsushima = (props) => {
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
      .collection("matsushima")
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
        type: OBTENER_PRODUCTOS_MATSUSHIMA,
        payload: platillos,
      });
    }
  };

  return (
    <FirebaseContextMatsushima.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
      }}
    >
      {props.children}
    </FirebaseContextMatsushima.Provider>
  );
};

export default FirebaseStateMatsushima;

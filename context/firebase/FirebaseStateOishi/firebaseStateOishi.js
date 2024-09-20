import React, { useReducer } from "react";

import firebase from "../../../firebase";
import FirebaseReducerOishi from "./firebaseReducerOishi";
import FirebaseContextOishi from "./firebaseContextOishi";

import { OBTENER_PRODUCTOS_OISHI } from "../../../types";
import _ from "lodash";


const FirebaseStateOishi = (props) => {
  // Crear state inicial
  const initialState = {
    menu: [],
  };

  // useReducer con dispatch  para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducerOishi, initialState);

  // Función que se ejecuta para traer los productos
  const obtenerProductos = () => {
    // consultar firebase
    firebase.db
      .collection("oishi")
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
        type: OBTENER_PRODUCTOS_OISHI,
        payload: platillos,
      });
    }
  };

  return (
    <FirebaseContextOishi.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
      }}
    >
      {props.children}
    </FirebaseContextOishi.Provider>
  );
};

export default FirebaseStateOishi;

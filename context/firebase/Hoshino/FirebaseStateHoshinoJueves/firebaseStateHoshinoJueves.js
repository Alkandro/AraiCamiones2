import React, { useReducer } from "react";

import firebase from "../../../../firebase";
import FirebaseReducerHoshino from "../../FirebaseStateHoshino/firebaseReducerHoshino";
import FirebaseContextHoshinoJueves from "./firebaseContextHoshinoJueves";

import { OBTENER_PRODUCTOS_HOSHINO } from "../../../../types";
import _ from "lodash";

const FirebaseStateHoshinoMiercoles = (props) => {
  // Crear state inicial
  const initialState = {
    menu: [],
  };

  // useReducer con dispatch  para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducerHoshino, initialState);

  // Función que se ejecuta para traer los productos
  const obtenerProductos = () => {
    // consultar firebase
    
    

    firebase.db
      .collection("hoshinoJueves")
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
        type: OBTENER_PRODUCTOS_HOSHINO,
        payload: platillos,
      });
    }
  };

  return (
    <FirebaseContextHoshinoJueves.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
      }}
    >
      {props.children}
    </FirebaseContextHoshinoJueves.Provider>
  );
};

export default FirebaseStateHoshinoMiercoles;

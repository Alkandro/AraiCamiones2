import React, { useReducer } from "react";
import firebase from "../../../../firebase";
import FirebaseReducerTomaoka from "../../FirebaseStateTomaoka/firebaseReducerTomaoka";
import FirebaseContextTomaokaDomingo from "./firebaseContextTomaokaDomingo";
import { OBTENER_PRODUCTOS_TOMAOKA } from "../../../../types";
import _ from "lodash";


const FirebaseStateTomaokaDomingo = (props) => {
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
      .collection("tomaokaDomingo")
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
        type: OBTENER_PRODUCTOS_TOMAOKA,
        payload: platillos,
      });
    }
  };

  return (
    <FirebaseContextTomaokaDomingo.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
      }}
    >
      {props.children}
    </FirebaseContextTomaokaDomingo.Provider>
  );
};

export default FirebaseStateTomaokaDomingo;

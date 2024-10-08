import React, { useReducer } from "react";

import firebase from "../../../../firebase";
import FirebaseReducerUser3 from "../../FirebaseStateUser3/firebaseReducerUser3";
import FirebaseContextUser3Mensaje from "./firebaseContextUser3Mensaje";

import { OBTENER_PRODUCTOS_USER3 } from "../../../../types";
import _ from "lodash";

const FirebaseStateUser3Mensaje = (props) => {
  // Crear state inicial
  const initialState = {
    menu: [],
  };

  // useReducer con dispatch  para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducerUser3, initialState);

  // Función que se ejecuta para traer los productos
  const obtenerProductos = () => {
    // consultar firebase
    
    

    firebase.db
      .collection("user3Mensaje")
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
        type: OBTENER_PRODUCTOS_USER3,
        payload: platillos,
      });
    }
  };
   // Función para eliminar un producto de Firebase
   const eliminarProductoFirebase = async (id) => {
    try {
      await firebase.db.collection("user3Mensaje").doc(id).delete(); // Eliminar el documento por ID
      console.log("Producto eliminado de Firebase");
    } catch (error) {
      console.error("Error eliminando el producto:", error);
    }
  };

  return (
    <FirebaseContextUser3Mensaje.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
        eliminarProductoFirebase,
      }}
    >
      {props.children}
    </FirebaseContextUser3Mensaje.Provider>
  );
};

export default FirebaseStateUser3Mensaje;

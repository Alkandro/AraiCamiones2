import React, { useReducer } from "react";
import firebase from "../../../firebase";
import FirebaseReducerUser3 from "./firebaseReducerUser3";
import FirebaseContextUser3 from "./firebaseContextUser3";
import { OBTENER_PRODUCTOS_USER3 } from "../../../types";
import _ from "lodash";

const FirebaseStateUser3  = (props) => {
  // Crear state inicial
  const initialState = {
    menu: [],
  };

  // useReducer con dispatch para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducerUser3, initialState);

  // Función que se ejecuta para traer los productos
  const obtenerProductos = () => {
    firebase.db
      .collection("user3")
      .where("existencia", "==", true) // traer solo los que estén en existencia
      .onSnapshot(manejarSnapshot);

    function manejarSnapshot(snapshot) {
      let platillos = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      // Ordenar por categoría con lodash
      platillos = _.orderBy(platillos, ["orden"]);

      // Actualizar el estado con los productos obtenidos
      dispatch({
        type: OBTENER_PRODUCTOS_USER3,
        payload: platillos,
      });
    }
  };

  // Función para eliminar un producto de Firebase
  const eliminarProductoFirebase = async (id) => {
    try {
      await firebase.db.collection("user3").doc(id).delete(); // Eliminar el documento por ID
      console.log("Producto eliminado de Firebase");
    } catch (error) {
      console.error("Error eliminando el producto:", error);
    }
  };

  return (
    <FirebaseContextUser3.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
        eliminarProductoFirebase, // Asegúrate de exportar esta función
      }}
    >
      {props.children}
    </FirebaseContextUser3.Provider>
  );
};

export default FirebaseStateUser3;

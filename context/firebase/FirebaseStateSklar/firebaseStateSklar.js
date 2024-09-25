import React, { useReducer } from "react";
import firebase from "../../../firebase";
import FirebaseReducerSklar from "./firebaseReducerSklar";
import FirebaseContextSklar from "./firebaseContextSklar";
import { OBTENER_PRODUCTOS_SKLAR} from "../../../types";
import _ from "lodash";

const FirebaseStateSklar = (props) => {
  // Crear state inicial
  const initialState = {
    menu: [],
  };

  // useReducer con dispatch para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducerSklar, initialState);

  // Función que se ejecuta para traer los productos
  const obtenerProductos = () => {
    firebase.db
      .collection("sklar")
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
        type: OBTENER_PRODUCTOS_SKLAR,
        payload: platillos,
      });
    }
  };

  // Función para eliminar un producto de Firebase
  const eliminarProductoFirebase = async (id) => {
    try {
      await firebase.db.collection("sklar").doc(id).delete(); // Eliminar el documento por ID
      console.log("Producto eliminado de Firebase");
    } catch (error) {
      console.error("Error eliminando el producto:", error);
    }
  };

  return (
    <FirebaseContextSklar.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
        eliminarProductoFirebase, // Asegúrate de exportar esta función
      }}
    >
      {props.children}
    </FirebaseContextSklar.Provider>
  );
};

export default FirebaseStateSklar;

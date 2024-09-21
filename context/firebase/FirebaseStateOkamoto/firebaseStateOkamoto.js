// import React, { useReducer } from "react";

// import firebase from "../../../firebase";
// import FirebaseReducerHoshino from "./firebaseReducerHoshino";
// import FirebaseContextHoshino from "./firebaseContextHoshino";

// import { OBTENER_PRODUCTOS_HOSHINO } from "../../../types";
// import _ from "lodash";

// const FirebaseStateHoshino = (props) => {
//   // Crear state inicial
//   const initialState = {
//     menu: [],
//   };

//   // useReducer con dispatch  para ejecutar las funciones
//   const [state, dispatch] = useReducer(FirebaseReducerHoshino, initialState);

//   // Función que se ejecuta para traer los productos
//   const obtenerProductos = () => {
//     // consultar firebase
    
    

//     firebase.db
//       .collection("hoshino")
//       .where("existencia", "==", true) // traer solo los que esten en existencia
//       .onSnapshot(manejarSnapshot);

//     function manejarSnapshot(snapshot) {
//       let platillos = snapshot.docs.map((doc) => {
//         return {
//           id: doc.id,
//           ...doc.data(),
//         };
//       });

//       // Ordenar por categoria con lodash
//       platillos = _.sortBy(platillos, "categoria", "orden");
//       platillos = _.orderBy(platillos, "orden")

//       // console.log(platillos)

//       // Tenemos resultados de la base de datos
//       dispatch({
//         type: OBTENER_PRODUCTOS_HOSHINO,
//         payload: platillos,
//       });
//     }
//   };

//   return (
//     <FirebaseContextHoshino.Provider
//       value={{
//         menu: state.menu,
//         firebase,
//         obtenerProductos,
//       }}
//     >
//       {props.children}
//     </FirebaseContextHoshino.Provider>
//   );
// };

// export default FirebaseStateHoshino;



import React, { useReducer } from "react";
import firebase from "../../../firebase";
import FirebaseReducerOkamoto from "./firebaseReducerOkamoto";
import FirebaseContextOkamoto from "./firebaseContextOkamoto";
import { OBTENER_PRODUCTOS_OKAMOTO } from "../../../types";
import _ from "lodash";

const FirebaseStateOkamoto = (props) => {
  // Crear state inicial
  const initialState = {
    menu: [],
  };

  // useReducer con dispatch para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducerOkamoto, initialState);

  // Función que se ejecuta para traer los productos
  const obtenerProductos = () => {
    firebase.db
      .collection("okamoto")
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
        type: OBTENER_PRODUCTOS_OKAMOTO,
        payload: platillos,
      });
    }
  };

  // Función para eliminar un producto de Firebase
  const eliminarProductoFirebase = async (id) => {
    try {
      await firebase.db.collection("okamoto").doc(id).delete(); // Eliminar el documento por ID
      console.log("Producto eliminado de Firebase");
    } catch (error) {
      console.error("Error eliminando el producto:", error);
    }
  };

  return (
    <FirebaseContextOkamoto.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
        eliminarProductoFirebase, // Asegúrate de exportar esta función
      }}
    >
      {props.children}
    </FirebaseContextOkamoto.Provider>
  );
};

export default FirebaseStateOkamoto;

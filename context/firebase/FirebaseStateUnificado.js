import React, { useReducer, createContext } from "react";
import firebase from "../../firebase";
import _ from "lodash";

export const FirebaseContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, [action.key]: action.payload };
    default:
      return state;
  }
};

// Sufijos exactos de tus colecciones en Firestore
const SUFIJOS = {
  lunes: "",
  martes: "Martes",
  miercoles: "Miercoles",
  jueves: "Jueves",
  viernes: "Viernes",
  sabado: "Sabado",
  domingo: "Domingo",
  mensaje: "Mensaje",
};

const FirebaseStateUnificado = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  const obtenerProductos = (chofer, dia = "lunes") => {
    const coleccion = chofer + SUFIJOS[dia]; // "hoshino" + "Martes" = "hoshinoMartes"
    const key = `${chofer}_${dia}`;

    const unsub = firebase.db
      .collection(coleccion)
      .where("existencia", "==", true)
      .onSnapshot((snapshot) => {
        let platillos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        platillos = _.orderBy(platillos, ["orden"]);
        dispatch({ type: "SET_DATA", key, payload: platillos });
      });

    return unsub;
  };

  const eliminarProductoFirebase = async (chofer, dia = "lunes", id) => {
    const coleccion = chofer + SUFIJOS[dia];
    try {
      await firebase.db.collection(coleccion).doc(id).delete();
    } catch (error) {
      console.error("Error eliminando:", error);
    }
  };

  const getMenu = (chofer, dia = "lunes") => state[`${chofer}_${dia}`] || [];

  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        obtenerProductos,
        eliminarProductoFirebase,
        getMenu,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseStateUnificado;

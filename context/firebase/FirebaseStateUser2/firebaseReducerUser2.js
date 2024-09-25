import {  OBTENER_PRODUCTOS_USER2 } from "../../../types";


export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS_USER2:
      return {
        ...state,
        menu: action.payload
      }
    default:
      return state;
  }
};

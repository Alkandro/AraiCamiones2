import {  OBTENER_PRODUCTOS_OKAMOTO } from "../../../types";


export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS_OKAMOTO:
      return {
        ...state,
        menu: action.payload
      }
    default:
      return state;
  }
};

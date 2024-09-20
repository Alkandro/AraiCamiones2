import { OBTENER_PRODUCTOS_OISHI } from "../../../types";


export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS_OISHI:
      return {
        ...state,
        menu: action.payload
      }
    default:
      return state;
  }
};

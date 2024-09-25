import { OBTENER_PRODUCTOS_YAMAKADO } from "../../../types";


export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS_YAMAKADO:
      return {
        ...state,
        menu: action.payload
      }
    default:
      return state;
  }
};

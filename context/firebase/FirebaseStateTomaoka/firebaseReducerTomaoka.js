import { OBTENER_PRODUCTOS_TOMAOKA } from "../../../types";


export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS_TOMAOKA:
      return {
        ...state,
        menu: action.payload
      }
    default:
      return state;
  }
};

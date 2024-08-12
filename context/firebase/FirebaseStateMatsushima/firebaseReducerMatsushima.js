import { OBTENER_PRODUCTOS_MATSUSHIMA } from "../../../types";


export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS_MATSUSHIMA:
      return {
        ...state,
        menu: action.payload
      }
    default:
      return state;
  }
};

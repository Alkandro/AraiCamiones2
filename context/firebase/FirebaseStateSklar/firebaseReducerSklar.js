import { OBTENER_PRODUCTOS_SKLAR } from "../../../types";


export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS_SKLAR:
      return {
        ...state,
        menu: action.payload
      }
    default:
      return state;
  }
};

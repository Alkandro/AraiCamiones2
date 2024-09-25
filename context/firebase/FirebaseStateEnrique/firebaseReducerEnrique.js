import { OBTENER_PRODUCTOS_ENRIQUE} from "../../../types";


export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS_ENRIQUE:
      return {
        ...state,
        menu: action.payload
      }
    default:
      return state;
  }
};

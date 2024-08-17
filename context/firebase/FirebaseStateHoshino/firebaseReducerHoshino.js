import { OBTENER_PRODUCTOS_HOSHINO } from "../../../types";


export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS_HOSHINO:
      return {
        ...state,
        menu: action.payload
      }
    default:
      return state;
  }
};

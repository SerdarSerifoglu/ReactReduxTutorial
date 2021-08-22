import { objectItems } from "../initialValues/objectItems.js";
import { ADD_OBJECT, REMOVE_OBJECT } from "../actions/objectActions.js";

const initialState = {
  objectItems: objectItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  /*spread operatörü(...) kullanma sebebimiz bu state'i kullanan yerlerin değişikliği farketmesi için state'in referansını değiştirmemiz gerekli*/
  switch (type) {
    case ADD_OBJECT:
      let object = state.objectItems.find((x) => x.id === payload.id);

      if (object) {
        object.count++;
        return { ...state };
      } else {
        return {
          ...state,
          objectItems: [...state.objectItems, payload],
        };
      }
      break;
    case REMOVE_OBJECT:
      return {
        ...state,
        objectItems: state.objectItems.filter((x) => x.object.id != payload.id),
      };
      break;
    default:
      return state;
  }
}

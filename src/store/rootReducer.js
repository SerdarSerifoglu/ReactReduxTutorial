import { combineReducers } from "redux";
import objectReducer from "./reducers/objectReducer.js";

const rootReducer = combineReducers({
  object: objectReducer,
  //başka reducerlar varsa buraya eklenicek
});

export default rootReducer;

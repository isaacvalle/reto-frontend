import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from "./products";

export default combineReducers({
  user: userReducer,
  products: productReducer
});
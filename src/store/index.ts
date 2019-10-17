import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
import customMiddleware from "../middleware";

const initialState = {
  user: { email: "", password: "", isLoggedIn: false }
};
const middleware = [...customMiddleware];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleware));

const userEmail = localStorage.getItem("user-email");
const userPassword = localStorage.getItem("user-password");
const userIsLoggedIn = localStorage.getItem("user-logged");
if (userEmail && userPassword && userIsLoggedIn) {
  initialState.user.email = userEmail;
  initialState.user.password = userPassword;
  initialState.user.isLoggedIn = userIsLoggedIn === "true";
}
const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;

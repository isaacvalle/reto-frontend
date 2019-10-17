import { Action, Dispatch, MiddlewareAPI } from "redux";
import { userActionTypes as actionTypes } from "actions/types";

const userLocalStorage = (store: MiddlewareAPI) => (next: Dispatch) => 
  <A extends Action>(action: A) => {
    if (action.type === actionTypes.ON_SUCCESSFUL_LOGIN) {
      const nextMiddleware = next(action);
      const nextState = store.getState();
      localStorage.setItem("user-email", nextState.user.email);
      localStorage.setItem("user-password", nextState.user.password);
      localStorage.setItem("user-logged", nextState.user.isLogedIn);
      return nextMiddleware;
    } else if (action.type === actionTypes.LOG_OUT) {
      localStorage.removeItem("user-email");
      localStorage.removeItem("user-password");
      localStorage.removeItem("user-logged");
      return next(action);
    }
    return next(action);
  }

  export default userLocalStorage;
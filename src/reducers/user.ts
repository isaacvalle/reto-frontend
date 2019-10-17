import { userActionTypes as actionTypes } from "actions/types";
import { Reducer } from "redux";
import { userState as State } from "./types";

const initialState: State = {
  isLoggedIn: false,
  email: "",
  password: ""
};

const userReducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_SUCCESSFUL_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
        password: action.payload.password
      };
    case actionTypes.LOG_OUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default userReducer;

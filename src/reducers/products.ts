import { userActionTypes as actionTypes } from "actions/types";
import { Reducer } from "redux";
import { productState as State } from "./types";

const initialState: State = {
  tableProducts: []
};

const productReducer: Reducer<State> = (state: any = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      let product = {
        product: action.payload.product,
        department: action.payload.department,
        price: action.payload.price,
        availability: action.payload.availability
      }
      return {
        ...state,
        tableProducts: [...state.tableProducts, product]
      }
    default:
      return state;
  }
}

export default productReducer;
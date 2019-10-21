import {
    userState, 
    productState
} from "reducers/types";

export type RootState = {
  user: userState;
  products: productState
};
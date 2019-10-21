import { action } from "typesafe-actions";
import { userActionTypes as actionTypes } from "./types";

export const onLoginSuccessful = (email: string, password: string) =>
  action(actionTypes.ON_SUCCESSFUL_LOGIN, { email, password });

export const logout = () => action(actionTypes.LOG_OUT);

export const addProduct = (product: string, department: string, price: string, availability: string) => 
  action(actionTypes.ADD_PRODUCT, { product, department, price, availability });
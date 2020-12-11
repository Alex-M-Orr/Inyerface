import { IUserState } from "../reducers/UserReducer";

 export const REGISTER = "REGISTER";
 export const SET_NAME = "SET_NAME";
 export const SET_WEIGHT = "SET_WEIGHT";
 export const SET_PHONE = "SET_PHONE";

 export const setUserStore = (userData: IUserState, actionType:string) => ({
    type: actionType,
    payload: userData,
 });
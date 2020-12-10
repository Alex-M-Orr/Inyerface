import { IUserState } from "../reducers/UserReducer";

 export const register = "REGISTER";

 export const setUserStore = (userData: IUserState) => ({
    type: register,
    payload: userData,
 });
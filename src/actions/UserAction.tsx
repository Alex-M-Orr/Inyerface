import { IUserState } from "../reducers/UserReducer"

export const REGISTER ='REGISTER';

export const setUserState = (userData: IUserState) => ({
    type: REGISTER,
    payload: userData
});
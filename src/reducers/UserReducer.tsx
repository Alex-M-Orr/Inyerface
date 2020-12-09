import React from 'react';

export interface IUserState {
    email: string,
    password: string,
    name: string,
    weight: number,
    phone: number,
}

export const initialState: IUserState = {
    email: '',
    password: '',
    name: '',
    weight: 0,
    phone: 9876543210,
}

export const UserReducer = (state:IUserState = initialState , action:any) =>  {
    switch (action.type) {
        case 'Register':
            if(action.payload != null){
                return { ...action.payload };
            }
            break;
    
        default:
            return state;
    }

}

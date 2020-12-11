export interface IUserState {
  email: string,
  password: string,
  name: string,
  weight: number,
  phone: number
};

export const initialUserState = {
    email: '',
    password: '',
    name: '',
    weight: 0,
    phone: 0
};

export const UserReducer = (state: IUserState = initialUserState, action:any) => {
    switch(action.type){
        case 'REGISTER':
            return action.payload;
        case 'SET_NAME':
                return {...state, name: action.payload.name};
        case 'SET_WEIGHT':
                return {...state, weight: action.payload.weight};
        case 'SET_PHONE':
                return {...state, phone: action.payload.phone};
        default:
            return state;
    }
}

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
            return state;
        default:
            return state;
    }
}

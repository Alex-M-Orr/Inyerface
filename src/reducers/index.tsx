import React from 'react';
import {UserReducer, IUserState} from './UserReducer';
import { combineReducers } from 'redux';

export interface IRootState {
    userState: IUserState,
}

export const rootReducer = combineReducers<IRootState>({
    userState: UserReducer,
});
import {applyMiddleware, compose, createStore, Store} from 'redux';
import {IRootState, rootReducer} from './reducers/index';
import thunk from 'redux-thunk';

const composeEnhancers = (window as any)._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store:Store<IRootState> = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
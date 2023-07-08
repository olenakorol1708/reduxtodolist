import {applyMiddleware, compose,createStore} from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
let initialState = {};
let composeFunc = process.env.NODE_ENV ==='development' ?composeWithDevTools :compose;
let composeEnhancer = composeFunc(applyMiddleware(thunk))
const store = createStore(rootReducer, initialState,composeEnhancer);
export default store;
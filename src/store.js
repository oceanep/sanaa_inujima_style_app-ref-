import { createStore, combineReducers, applyMiddleware } from 'redux';

import { logger, callAPIMiddleware } from './middleware/api';
import thunkMiddleware from 'redux-thunk';

import { reducers } from './reducers/index';


const reducer = combineReducers(reducers);

const middleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  callAPIMiddleware
);

export const store = createStore(reducer, middleware); 

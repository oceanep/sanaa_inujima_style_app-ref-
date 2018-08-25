import { browserHistory } from 'react-router';
import { createHistory, createBrowserHistory } from 'history';
import { syncHistoryWithStore, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { logger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import homeReducer from './reducers/homeReducer';
import infoReducer from './reducers/infoReducer';
import mapReducer from './reducers/mapReducer';


// Use hash location for Github Pages
// but switch to HTML5 history locally.

export const reducer = combineReducers({mapReducer, homeReducer, routing: routerReducer});
export const middleware = applyMiddleware(
  thunk, // lets us dispatch() functions
  logger,
  routerMiddleware(browserHistory),

);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(middleware));

export const history = syncHistoryWithStore(browserHistory, store);

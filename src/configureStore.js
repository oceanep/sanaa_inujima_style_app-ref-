import { browserHistory } from 'react-router';
import { createHistory, createBrowserHistory } from 'history';
import { syncHistoryWithStore, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { logger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import reducers from './reducers/reducers';


// Use hash location for Github Pages
// but switch to HTML5 history locally.
export const reducer = combineReducers({reducer: reducers, routing: routerReducer});

export const middleware = applyMiddleware(
  thunk, // lets us dispatch() functions
  routerMiddleware(browserHistory),
  logger
);

export const store = createStore(reducer, middleware);

export const history = process.env.NODE_ENV === 'production' ?
  createHistory({queryKey: false}) :
  syncHistoryWithStore(browserHistory, store);

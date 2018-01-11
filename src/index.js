import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createHashHistory';
import AppRoutes from './app-routes';
import AppRouter from './AppRouter';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routeReducer, routerMiddleware, push } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { logger, callAPIMiddleware } from './middleware/api';
import thunkMiddleware from 'redux-thunk';
import { reducers } from './reducers/index';

import 'normalize-css';

injectTapEventPlugin();


// Use hash location for Github Pages
// but switch to HTML5 history locally.
export const history = process.env.NODE_ENV === 'production' ?
  createHistory({queryKey: false}) :
  syncHistoryWithStore(browserHistory, store);

export const reducer = combineReducers(reducers);

export const middleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  routerMiddleware(browserHistory),
  callAPIMiddleware
);

export const store = createStore(reducer, middleware);

ReactDOM.render(
	<Provider store={store}>
	  <AppRouter
	    history={history}
	    onUpdate={() => window.scrollTo(0, 0)}
	  >
	    {AppRoutes}
	  </AppRouter>
	</Provider>
, document.getElementById('content'));

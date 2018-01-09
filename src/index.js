import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHistory from 'history/lib/createHashHistory';
import thunkMiddleware from 'redux-thunk';
import AppRoutes from './app-routes';
import AppRouter from './AppRouter';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger, callAPIMiddleware } from './middleware/api';
import { reducers } from './reducers/index';
import { store } from './store'

import 'normalize-css';



injectTapEventPlugin();


// Use hash location for Github Pages
// but switch to HTML5 history locally.
export const history = process.env.NODE_ENV === 'production' ?
  createHistory({queryKey: false}) :
  createBrowserHistory();

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

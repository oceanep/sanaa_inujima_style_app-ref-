import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './app-routes';
import AppRouter from './AppRouter';

import { Provider } from 'react-redux';
import { history, store } from './configureStore';

import 'normalize-css';

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

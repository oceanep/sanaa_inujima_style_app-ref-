import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './app-routes';
import AppRouter from './AppRouter';

import { Provider } from 'react-redux';
import { history, store } from './configureStore';
import "react-image-gallery/styles/css/image-gallery.css";
import * as firebase from 'firebase';
import {init as firebaseInit} from './middleware/firebase'



import 'normalize-css';

export default !firebase.apps.length ? firebaseInit() : firebase.app();


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

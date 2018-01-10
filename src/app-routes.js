import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

import { store } from './index';

import Application from './components/Application';
import Information from './pages/information';
import HomeContainer from './pages/homeContainer/HomeContainer';
import MapContainer from './pages/mapContainer/MapContainer';

const AppRoutes = (
  <Route path="/">
    <IndexRoute component={HomeContainer} />
    <Route path="home">
      <IndexRoute component={HomeContainer}/>
    </Route>
    <Route path="map">
      <IndexRoute component={MapContainer}/>
    </Route>
  </Route>
);

export default AppRoutes;

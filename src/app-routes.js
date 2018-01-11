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
    <Route path="home" component={HomeContainer}/>
    <Route path="map" component={MapContainer}>
      <IndexRoute component={MapContainer}/>
      <Route path="/info/:id" component={infoContainer}/>
    </Route>
  </Route>
);

export default AppRoutes;

import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

import HomeContainer from './pages/homeContainer/HomeContainer';
import MapContainer from './pages/mapContainer/MapContainer';
import infoContainer from './pages/infoContainer/infoContainer';
import Map from './components/Map/Map';

const AppRoutes = (
  <Route path="/">
    <IndexRoute component={HomeContainer}/>
    <Route path="map" component={MapContainer}>
      <Route path=":id" component={infoContainer}/>
    </Route>
  </Route>
);

export default AppRoutes;

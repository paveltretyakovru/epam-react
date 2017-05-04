import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from './app/app.container';
import AppComponent from './app/app.component';
import Page404Component from './app/pages/page-404.component'

export default (
  <Route path={ AppContainer.path } component={ AppContainer }>
      <IndexRoute component={ AppComponent } />      
      <Route path="*" component={ Page404Component } />
  </Route>
);
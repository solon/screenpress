'use strict';

import React, { Component } from 'react';
import { Route } from 'react-router';
import App from '../layouts/app/containers/App';

export const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component: require('./home')
  },
  childRoutes: [
    require('./login'),
    require('./signup'),
    require('./settings')
  ]
};
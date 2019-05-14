import React, { Component } from 'react';

import { AppRegistry,YellowBox } from 'react-native';

import dva from './utils/dva'
import Router, { routerMiddleware, routerReducer } from './router'

// import appModel from './models/app'
import models from './models'

console.log(models);

YellowBox.ignoreWarnings(['Remote debugger']);

const app = dva({
  initialState: {},
  models: models,
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
})


const Bookkeeping = app.start(<Router />)

AppRegistry.registerComponent('Bookkeeping', () => Bookkeeping);

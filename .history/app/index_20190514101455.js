import React, { Component } from 'react';

import { AppRegistry,YellowBox } from 'react-native';

import dva from './utils/dva'
import Router, { routerMiddleware, routerReducer } from './router'

import appModel from './models/app'

YellowBox.ignoreWarnings(['Remote debugger']);

const app = dva({
  initialState: {},
  models: [appModel],
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
})


const Bookkeeping = app.start(<Router />)

AppRegistry.registerComponent('Bookkeeping', () => Bookkeeping);

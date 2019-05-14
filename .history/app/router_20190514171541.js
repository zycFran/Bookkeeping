import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing, Platform, Image } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationActions
} from 'react-navigation'


import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'

import ModalNavigator from './navigator'

import { connect } from 'react-redux'

export const routerReducer = createNavigationReducer(ModalNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  state => state.router,
  'root'
)

const App = createReduxContainer(ModalNavigator, 'root')


@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  render() {
    const { app, dispatch, router } = this.props
    if (app.loading) return <Loading />

    return <App dispatch={dispatch} state={router} />
  }
}

export default Router

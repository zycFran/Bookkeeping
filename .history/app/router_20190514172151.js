import React, { PureComponent } from 'react'

import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'

import {
  Loading,
} from './pages/index';

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

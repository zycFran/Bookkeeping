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
  componentWillMount() {
    if (Platform.OS === 'android') {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
}
componentWillUnmount() {
    if (Platform.OS === 'android') {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
}

onBackAndroid = () => {
    const  navigator  = this.refs.navigator;
const { navigator } = this.props;  
    const routers = navigator.getCurrentRoutes();
    console.log('当前路由长度：'+routers.length);
    if (routers.length > 1) {
        navigator.pop();
        return true;//接管默认行为
    }
    return false;//默认行为

};
  render() {
    const { app, dispatch, router } = this.props
    if (app.loading) return <Loading />

    return <App dispatch={dispatch} state={router} />
  }
}

export default Router

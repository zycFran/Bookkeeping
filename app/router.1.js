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

import { connect } from 'react-redux'

// import Icon from 'react-native-vector-icons/Ionicons';

import {
  Home,
  Mine,
  Loading,
  Record,
  Bill,
  Chart,
} from './pages/index';

const tabBar_detail_n = require('./assets/images/tabbar_detail_n.png');
const tabBar_detail_s = require('./assets/images/tabbar_detail_s.png');
const tabBar_chart_n = require('./assets/images/tabbar_chart_n.png');
const tabBar_chart_s = require('./assets/images/tabbar_chart_s.png');
const tabBar_add_n = require('./assets/images/tabbar_add_n.png');
const tabBar_add_s = require('./assets/images/tabbar_add_h.png');
const tabBar_bill_n = require('./assets/images/tabbar_discover_n.png');
const tabBar_bill_s = require('./assets/images/tabbar_discover_s.png');
const tabBar_mine_s = require('./assets/images/tabbar_mine_s.png');
const tabBar_mine_n = require('./assets/images/tabbar_mine_n.png');

const Tab = createBottomTabNavigator(

  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '明细',
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Image source={focused ? tabBar_detail_s : tabBar_detail_n} style={{
              height: 30,
              width: 30,
            }} />
          )
        }
      })
    },
    Chart: {
      screen: Chart,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '图表',
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Image source={focused ? tabBar_chart_s : tabBar_chart_n} style={{
              height: 30,
              width: 30,
            }} />
          )
        }
      })
    },
    Record: {
      screen: Record,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '记账',
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Image source={focused ? tabBar_add_s : tabBar_add_n} style={{
              height: 30,
              width: 30,
            }} />
          )
        }
      })
    },
    Bill: {
      screen: Bill,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '账单',
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Image source={focused ? tabBar_bill_s : tabBar_bill_n} style={{
              height: 30,
              width: 30,
            }} />
          )
        }
      })
    },
    Mine: {
      screen: Mine,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Image source={focused ? tabBar_mine_s : tabBar_mine_n} style={{
              height: 30,
              width: 30,
            }} />
          )
        }
      })
    },
  },

  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    initialRouteName: 'Home',
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#282828',
      inactiveTintColor: '#282828',

      inactiveBackgroundColor: '#fff',
      activeBackgroundColor: '#fff',

      style: {
        height: Platform.select({ ios: 54, android: 64 }),
        // backgroundColor: 'white'
      }
    }
  }
);
const Navigator = createStackNavigator(
  {
    Tab: { screen: Tab },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      headerBackTitle: '返回',
      headerTintColor: '#333333',
      showIcon: true
    }
  }
);

const ModalNavigator = createStackNavigator(
  {
    Navigator: { screen: Navigator },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
);

export const routerReducer = createNavigationReducer(ModalNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  state => state.router,
  'root'
)

const App = createReduxContainer(ModalNavigator, 'root')

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getActiveRouteName(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { app, dispatch, router } = this.props
    if (app.loading) return <Loading />

    return <App dispatch={dispatch} state={router} />
  }
}

export default Router

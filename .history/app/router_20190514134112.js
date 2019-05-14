import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing,Platform } from 'react-native'
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

import Icon from 'react-native-vector-icons/Ionicons';

import {
  Mine,
  Loading,
  Record,
  Bill,
} from './pages/index';

const Tab = createBottomTabNavigator(

  {
    Mine: {
      screen: Mine,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Icon name="ios-contact" size={30} color={focused?'#fdde2e':'#282828'} />
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
            <Icon name="ios-contact" size={30} color={focused?'#fdde2e':'#282828'} />
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
            <Icon name="ios-contact" size={30} color={focused?'#fdde2e':'#282828'} />
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
            <Icon name="ios-contact" size={30} color={focused?'#fdde2e':'#282828'} />
          )
        }
      })
    }
  },

  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    initialRouteName: 'BilChartl',
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#282828',
      inactiveTintColor: '#282828',

      inactiveBackgroundColor: '#fff',
      activeBackgroundColor: '#fff',

      style: {
        height:  Platform.select({ios: 54, android: 64}),
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
    // transitionConfig: () => ({
    //   transitionSpec: {
    //     duration: 300,
    //     easing: Easing.out(Easing.poly(4)),
    //     timing: Animated.timing,
    //   },
    //   screenInterpolator: sceneProps => {
    //     const { layout, position, scene } = sceneProps
    //     const { index } = scene

    //     const height = layout.initHeight
    //     const translateY = position.interpolate({
    //       inputRange: [index - 1, index, index + 1],
    //       outputRange: [height, 0, 0],
    //     })

    //     const opacity = position.interpolate({
    //       inputRange: [index - 1, index - 0.99, index],
    //       outputRange: [0, 1, 1],
    //     })

    //     return { opacity, transform: [{ translateY }] }
    //   },
    // }),
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

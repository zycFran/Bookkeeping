// Default
import React, { Component } from 'react';
import { Easing, Animated } from 'react-native';
import { StackNavigator, TabNavigator, addNAVIGATION_HEIGHTelpers } from 'shimo-navigation';
// import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableHighlight, 
  TouchableOpacity 
} from 'react-native';
// Setting
import {
  NAVIGATION_HEIGHT,
  NAVIGATION_BACK_COLOR,
  NAVIGATION_FONT_SIZE,
  NAVIGATION_FONT_COLOR,
  TABBAR_HEIGHT,
  TABBAR_BACK_COLOR,
  TABBAR_FONT_SIZE,
  TABBAR_FONT_COLOR_NORMAL,
  TABBAR_FONT_COLOR_SELECT,
  gestures,
} from './TabbarSetting';
import {
  tabBar_detail_n,
  tabBar_detail_s,
  tabBar_chart_n,
  tabBar_chart_s,
  tabBar_add_n,
  tabBar_add_h,
  tabBar_discover_n,
  tabBar_discover_s,
  tabBar_mine_s,
  tabBar_mine_n,
  tabBar_setting_n,
  tabBar_setting_s,
  backIcon,
} from './TabbarSetting';
// Component
// import { Button, BackLeft, BackRight } from '../../common/index';
import TabbarIcon from './TabbarIcon';
import { 
  Web,
  Discovery,
  Home,
  Chart,
  ChartDetail,
  Account,
  None,
  Mine,
  Category,
  Bill,
  Update,
  About,
  Badge,
  Timing,
  Detail,
  AddCategory,
  Flaunt 
} from '../index';

getController = (data) => {
  return ({
    screen: data.screenName,
    navigationOptions: ({navigation, screenProps}) => ({
      header: null,
      gesturesEnabled: data.isGestures,
      tabBarIcon: (({tintColor, focused}) => {
        return (
          <TabbarIcon source={!focused? data.icon_normal: data.icon_select} 
                      normal={data.icon_normal}
                      select={data.icon_select}
                      isBig={data.isBig == true ? true : false}
                      navigation={navigation}/>
        )
      }),
      tabBarLabel: data.tabTitle,
      tabBarOnPress:(({ route, index },jumpToIndex)=>{
        if (route.routeName != 'None') {
          jumpToIndex(index);
        }
      }),
    })
  })
}

const MyTab = TabNavigator({
  Home: getController({
    'screenName': Home, 
    'navTitle': '首页', 
    'isLeft': false, 
    'isRight': false,
    'isBig': false,
    'navFontSize': NAVIGATION_FONT_SIZE,
    'isGestures': false,
    'tabTitle': '首页',
    'icon_normal': tabBar_detail_n,
    'icon_select': tabBar_detail_s,
  }),
  Mine: getController({
    screenName: Mine,
    navTitle: '我的',
    isLeft: false,
    isRight: false,
    isBig: false,
    tabTitle: '我的',
    navFontSize: NAVIGATION_FONT_SIZE,
    isGestures: false,
    icon_normal: tabBar_mine_n,
    icon_select: tabBar_mine_s
  })
}, {
  tabBarPosition: 'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
  swipeEnabled: false,      // 是否允许在标签之间进行滑动。
  animationEnabled: false,  // 是否在更改标签时显示动画。
  lazy: true,               // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
  initialRouteName: 'Mine', // 设置默认的页面组件
  backBehavior: 'none',     // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  tabBarOptions: {
    inactiveTintColor: TABBAR_FONT_COLOR_NORMAL,
    activeTintColor: TABBAR_FONT_COLOR_SELECT,
    inactiveBackgroundColor: TABBAR_BACK_COLOR, 
    activeBackgroundColor: TABBAR_BACK_COLOR,
    showIcon: true,
    showLabel: true, 
    style: {
      height: TABBAR_HEIGHT,
      backgroundColor: 'white',
    }, 
    labelStyle: {
      fontSize: TABBAR_FONT_SIZE,
      paddingBottom: 5,
    }, 
    pressOpacity: 1,
    upperCaseLabel: false,
    indicatorStyle: {
      height: 0,
    }, 
  },
});

export default MyApp = StackNavigator({
  MyTab: {
    screen: MyTab,
  },
}, {
  
});




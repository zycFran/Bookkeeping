
import React from 'react';
import { StyleSheet } from 'react-native';

import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

export { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';


export const ChartStyles = StyleSheet.create({
  page: {
    flexDirection: 'column'
  }
});

export const HeaderStyles = StyleSheet.create({
  header: {
    // width: pxToDp(550),
    height: pxToDp(130),
    flexDirection: 'row',
  }
});

export const HeaderLeftStyles =  StyleSheet.create({
  tabWrap:{
    width: pxToDp(550),
    height: pxToDp(130),
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: pxToDp(60),
    borderLeftWidth: 0,
  },
  left: {
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    borderLeftWidth: 1,
  },
  right: {
    borderRightWidth: 1,
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },
  text: {
    fontWeight: '300',
    fontSize: 12,
  },
});
export const HeaderRightStyles =  StyleSheet.create({
  // tabWrap:{
  //   width: pxToDp(550),
  //   height: pxToDp(130),
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: pxToDp(60),
    borderLeftWidth: 0,
  },
  left: {
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    borderLeftWidth: 1,
  },
  right: {
    borderRightWidth: 1,
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },
  text: {
    fontWeight: '300',
    fontSize: 12,
  },
});

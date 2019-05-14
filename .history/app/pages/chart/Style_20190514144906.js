
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
    width: '100%',
    height: pxToDp(130),
    flexDirection: 'row',
    // backgroundColor: StreamColor,
  }
});

export const HeaderLeftStyles =  StyleSheet.create({
  tabWrap:{
    width: pxToDp(280),
    height: pxToDp(130),
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    width: pxToDp(100),
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
    // color: 'white',
    fontWeight: '300',
    fontSize: 12,
  },
});
export const HeaderRightStyles =  StyleSheet.create({
  tabWrap:{
    width: pxToDp(470),
    height: pxToDp(130),
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    // flex: 1,
    width: pxToDp(125),
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

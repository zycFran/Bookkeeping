
import React from 'react';
import {  StyleSheet} from 'react-native';

import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

export { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

// export StreamColor

export const styles = StyleSheet.create({
  record: {
    alignItems: 'center',
    width: ScreenWidth,
    backgroundColor: StreamColor
  },
  tabWrap:{
    width: pxToDp(550),
    height: pxToDp(124),
    flexDirection: 'row',
    // paddingTop: pxToDp(40),
    // paddingBottom: pxToDp(40),
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    
    height: pxToDp(124),
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

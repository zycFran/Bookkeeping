
import React from 'react';
import {  StyleSheet} from 'react-native';

import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

export { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

// export StreamColor

export const styles = StyleSheet.create({
  container: {
    height: 27,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
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
  
export const dakaStyles = StyleSheet.create({
    daka:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: pxToDp(40),
      right: pxToDp(30)
    },
    badgeIcon: {
      width: pxToDp(40),
      height:  pxToDp(40),
      marginRight: pxToDp(10),
    },
    badgeText: {
      fontSize: 13,
      color: '#222222',
      fontWeight: '300',
    }
  })

import React from 'react';
import {  StyleSheet} from 'react-native';

import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

export { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

// export StreamColor

export const styles = StyleSheet.create({
  container: {
    width: ScreenWidth - 80,
    height: pxToDp(20),
    flexDirection: 'row',
    padding: pxToDp(40)
    // alignItems: 'center',
  },
  record:{

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


import React from 'react';
import { StyleSheet } from 'react-native';

import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

export { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

export const HeaderStyles =  StyleSheet.create({
  wrap:{
    backgroundColor: StreamColor,
    paddingBottom: pxToDp(40),
    paddingTop: pxToDp(70),
    textAlign: 'center'
  },  
  title:{
    fontSize: 12,
    color: TitleColor,
    textAlign: 'center'
  },
  balance_wrap: {
    flexDirection: 'row',
    textAlign: 'center',
    marginTop: pxToDp(40),
    marginBottom: pxToDp(50)
  },
  balance: {
    fontSize: 30,
    fontWeight:'600',
    color: '#000',
    textAlign: 'center',
  },
  balance_small:{
    fontSize: 20
  },

  tab:{
      flexDirection: 'row',
  },  

  tab_item:{
    flex: 1,
    lineHeight: pxToDp(54)
    flexDirection: 'row',
  },

  tab_item_label:{
    fontSize: 12,
    color: '#666'
  },

  tab_item_money:{
    fontSize: 18,
    color: '#000'
  },

  tab_item_left:{
    textAlign: 'right',
    borderRightColor: '#666',
    borderRightWidth: 1,
    alignItems: 'flex-end',
    paddingRight: pxToDp(40),
    lineHeight: pxToDp(54)
  },

  tab_item_right: {
    flexDirection: 'row',
    textAlign: 'left',
    paddingLeft: pxToDp(40),
    lineHeight: pxToDp(54)
  }
});

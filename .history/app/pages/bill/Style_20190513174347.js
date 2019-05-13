
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
    height: pxToDp(120),
    alignItems: 'center',
    marginTop: pxToDp(40),
    // marginBottom: pxToDp(50)
  },
  balance_money: {
    flexDirection: 'row',
  },
  balance: {
    fontSize: 28,
    fontWeight:'600',
    color: '#000',
    textAlign: 'center',
  },
 
  balance_small:{
    fontSize: 22,
    marginTop: pxToDp(10),
  },

  tab:{
    flexDirection: 'row',
  },  

  tab_item:{
    flex: 1,
    flexDirection: 'row',
  },

  tab_item_left:{
    borderRightColor: '#666',
    borderRightWidth: 1,
    lineHeight: pxToDp(54),
    justifyContent: 'flex-end',
    paddingRight: pxToDp(40),
    lineHeight: pxToDp(54)
  },

  tab_item_right: {
    flexDirection: 'row',
    lineHeight: pxToDp(54),
    justifyContent: 'flex-start',
    paddingLeft: pxToDp(40),
    lineHeight: pxToDp(54)
  },

  tab_item_label:{
    fontSize: 13,
    lineHeight: pxToDp(54),
    color: '#666',
    marginTop: pxToDp(10)
  },

  tab_item_money:{
    fontSize: 18,
    marginLeft: pxToDp(25),
    lineHeight: pxToDp(54),
    color: '#000'
  },

});

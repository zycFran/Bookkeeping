
import React from 'react';
import { StyleSheet } from 'react-native';

import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

export { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';


export const BillStyles = StyleSheet.create({
  bill: {
    flexDirection: 'column'
  }
})

export const HeaderStyles =  StyleSheet.create({
  wrap:{
    height:pxToDp(320),
    backgroundColor: StreamColor,
    // paddingBottom: pxToDp(40),
    paddingTop: pxToDp(70),
    textAlign: 'center'
  },  
  title:{
    fontSize: 12,
    color: TitleColor,
    textAlign: 'center'
  },
  balance_wrap: {
    height: pxToDp(160),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
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
    height: pxToDp(40),
    alignItems: 'center',
    lineHeight: pxToDp(40),
    flexDirection: 'row',
  },

  tab_item_left:{
    borderRightColor: '#666',
    borderRightWidth: 1,
    justifyContent: 'flex-end',
    paddingRight: pxToDp(40)
  },

  tab_item_right: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: pxToDp(40),
  },

  tab_item_label:{
    fontSize: 13,
    lineHeight: pxToDp(54),
    color: '#666',
    marginTop: pxToDp(2)
  },

  tab_item_money:{
    fontSize: 18,
    marginLeft: pxToDp(25),
    lineHeight: pxToDp(54),
    color: '#000'
  },

});

export const ListStyles = StyleSheet.create({
  list:{
    flex: 1,
    // height: ScreenHeight - pxToDp(360) - pxToDp(124),
    backgroundColor: '#fff'
  },

  theader:{
    height: pxToDp(60),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
  },

  tbody:{
    // flex: 1,
  },

  th:{
    flex: 1,
    height: pxToDp(60),
    lineHeight: pxToDp(60),
    textAlign: 'center',
    color: '#999',
  },  

  tr: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
  },

  td:{
    flex: 1,
    height: pxToDp(60),
    lineHeight: pxToDp(60),
    textAlign: 'center',
    color: '#999',
  }

});

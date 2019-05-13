
import React from 'react';
import { StyleSheet } from 'react-native';

import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

export { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

export const styles = StyleSheet.create({
  mine: {
    flex: 1,
    // height: '100%',
    backgroundColor: '#f1f1f1',
  },

  top: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#fdde2e'
  },
  top_user: {
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden'
  },
  top_user_image: {
    marginTop: pxToDp(34),
    width: pxToDp(130),
    height: pxToDp(130),
    borderRadius: pxToDp(130) / 2,
    // margin: '0 auto',
  },
  top_user_text: {
    marginTop: pxToDp(22),
    marginBottom: pxToDp(42),
    textAlign: 'center',
    fontSize: 15
  },
  tabs: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  tab_item: {
    flex: 1,
    textAlign: 'center',
    // paddingBottom: pxToDp(10)
  },
  tab_item_num: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
  },
  tab_item_text: {
    color: '#c18300',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: pxToDp(80),
  },
  menus: {
    marginTop: pxToDp(30)
  },
  menu_item: {
    backgroundColor: '#fff',
    height: pxToDp(95),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  menu_item_left: {
    flexDirection: 'row',
    width: pxToDp(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  menu_item_left_image: {
    width: pxToDp(40),
    height: pxToDp(40)
  },
  menu_item_right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: pxToDp(93),
    borderBottomWidth: pxToDp(2),
    borderBottomColor: '#f1f1f1',
    paddingRight: pxToDp(20)
  },
  menu_item_detail: {
    fontSize: 13,
    color: '#ccc',
    marginRight: pxToDp(10)
  },
  menu_item_name: {
    flex: 1,
    fontSize: 16,
    fontWeight: '300',
    color: TitleColor,
    paddingLeft: 10,
  },
  menu_item_link: {
    width: pxToDp(24),
    height: pxToDp(32),
  },
  menu_item_right_last: {
    borderBottomWidth: 0
  }
})

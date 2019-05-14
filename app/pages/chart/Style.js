
import React from 'react';
import { StyleSheet } from 'react-native';

import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

export { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';


export const ChartStyles = StyleSheet.create({
  page: {
    flexDirection: 'column'
  },
  body: {

  },
});

export const HeaderStyles = StyleSheet.create({
  header: {
    // width: pxToDp(550),
    width: '100%',
    height: pxToDp(130),
    flexDirection: 'row',
    backgroundColor: StreamColor,
  }
});

export const HeaderLeftStyles =  StyleSheet.create({
  tabWrap:{
    width: pxToDp(280),
    height: pxToDp(130),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    // flex: 1,
    width: pxToDp(110),
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
    color: 'white',
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
    justifyContent: 'center',
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

export const BodyStyles = StyleSheet.create({
  name: {
    fontWeight: '300',
    fontSize: 10,
    color: TitleColor,
    marginLeft: 10,
    marginTop: 5,
  },
  detail: {
    fontWeight: '300',
    fontSize: 9,
    color: TitleColor,
    marginLeft: 10,
    marginTop: 3,
    marginBottom: 10,
  },
  bottom: {
    flexDirection: 'row',
    position: 'relative',
    // justifyContent: 'space-between',
    marginTop: 3,
    paddingBottom: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
  },
  bottomText: {
    // flex: 1,
    textAlign: 'center',
    fontSize: 9,
    color: '#666',
    fontWeight: '300',
    // marginLeft: 10,
    // marginRight: 10,
  },
  inEx: {
    marginTop: 10,
    fontWeight: '300',
    fontSize: 11,
    color: TitleColor,
    marginLeft: 10,
    paddingBottom: 15,
  },
});
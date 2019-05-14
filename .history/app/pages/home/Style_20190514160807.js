
import React from 'react';
import { StyleSheet } from 'react-native';

import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

export { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';


export const HomeStyles = StyleSheet.create({
  page: {
    flexDirection: 'column'
  }
})

export const HeaderStyles =  StyleSheet.create({
  container: {
    width: ScreenWidth,
    backgroundColor: StreamColor,
    flexDirection: 'column',
    height: 70,
    paddingTop: 10,
    paddingBottom: 10,
  },
  // 顶部
  top: {
    width: ScreenWidth,
    flexDirection: 'row',
  },
  text: {
    fontWeight: '300',
    fontSize: 11,
    color: '#282828',
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center'
  },
  // 底部
  bottom: {
    width: ScreenWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  one: {
    flex: 3, 
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  oneV: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  oneLeft: {
    fontSize: 18,
    color: '#282828',
    fontWeight: '300',
  },
  oneRight: {
    fontSize: 9,
    color: '#282828',
    fontWeight: '300',
    marginBottom: 3,
    marginLeft: 2,
  },
  oneIcon: {
    width: 12,
    height: 12,
    marginLeft: 2,
    marginBottom: 2,
  },
  two: {
    flex: 4,
    paddingTop: 5,
    paddingBottom: 5,
  },
  twoText: {
    fontWeight: '300',
    fontSize: 16,
    color: '#282828',
    textAlign: 'center',
  },
  line: {
    width: 0.5,
    height: 15,
    backgroundColor: 'gray',
  }
  

});

export const ListStyles = StyleSheet.create({
  container: {
    height: ScreenHeight - 64 - 54 - 50,
    backgroundColor: 'white',
  },
  header: {
    width: ScreenWidth,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: BackDefaultColor,
  },
  headerText: {
    fontSize: 12,
    color: TitleColor,
    fontWeight: '300',
  },
  noData: {
    width: ScreenWidth,
    height: ScreenHeight - 64 - 54 - 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: ScreenWidth / 4,
    height: ScreenWidth / 4,
  },
  name: {
    fontWeight: '300',
    color: 'rgba(200,200,200,1)',
    fontSize: 12,
  },
  line: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(233,233,233,1)',
    height: 0.5,
  }

});

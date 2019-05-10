// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, Switch, Image, View, Animated, InteractionManager } from 'react-native';
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';
import { FetchUtils } from '../../utils/ajax';

console.log(ScreenWidth);
console.log(pxToDp);
class Mine extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSwitch: false
    }
  }

  componentDidMount() {
    let url = 'https://www.meprint.com/r/user/page/whoAmI'
    FetchUtils.getAction(url).then((data)=>{
      console.log(data);
    })
    let url2 = 'https://www.meprint.com/r/resourceManage/query/new'
    FetchUtils.postAction(url2, {
      limit: 8,
      sortField: {},
      start: 0,
      state: [4]
    }).then((data)=>{
      console.log(data);
    })
  }

  _onValueChange = () => {

  }

  render() {
    return (
      <View style={styles.mine}>
        <View style={styles.top}>
          <View style={dakaStyles.daka}>
            <Image style={dakaStyles.badgeIcon} resizeMode={'contain'} source={require('../../assets/images/signin.png')} />
            <Text style={dakaStyles.badgeText}>打卡</Text>
          </View>
          <View style={styles.top_user}>
            <Image style={styles.top_user_image}
              resizeMode={'contain'}
              source={require('../../assets/images/default_header.png')}
            />
            <Text style={styles.top_user_text}>zyc</Text>
          </View>

          <View style={styles.tabs}>
            <View style={styles.tab_item}>
              <Text style={styles.tab_item_num}>0</Text>
              <Text style={styles.tab_item_text}>已连续打卡</Text>
            </View>
            <View style={styles.tab_item}>
              <Text style={styles.tab_item_num}>0</Text>
              <Text style={styles.tab_item_text}>总记账天数</Text>
            </View>
            <View style={styles.tab_item}>
              <Text style={styles.tab_item_num}>0</Text>
              <Text style={styles.tab_item_text}>总记账笔数</Text>
            </View>
          </View>
        </View>
        <View style={styles.menus}>
          <View style={styles.menu_item}>
            <View style={styles.menu_item_left}>
              <Image style={styles.menu_item_left_image} source={require('../../assets/images/mine_tallytype.png')} />
            </View>

            <View style={styles.menu_item_right}>
              <Text style={styles.menu_item_name}>类别设置</Text>
              <Text style={styles.menu_item_detail}>点击进入</Text>
              <Image source={require('../../assets/images/ad_arrow.png')}
                resizeMode={'contain'}
                style={styles.menu_item_link} />
            </View>
          </View>
          <View style={styles.menu_item}>
            <View style={styles.menu_item_left}>
              <Image style={styles.menu_item_image} source={require('../../assets/images/mine_tallytype.png')} />
            </View>

            <View style={[styles.menu_item_right, styles.menu_item_right_last]}>
              <Text style={styles.menu_item_name}>特别提醒</Text>
              <Switch style={styles.menu_item_switch}
                trackColor={StreamColor}
                value={this.state.isSwitch}
                onValueChange={this._onValueChange}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mine:{
    backgroundColor:'#000'
  },
  container: {
    width: ScreenWidth,
    alignItems: 'center',
  },
  top: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#fdde2e'
  },
  top_user: {
    width: ScreenWidth,
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
    width: ScreenWidth,
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
    backgroundColor: '#fff',
    marginTop: pxToDp(1200)
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

const dakaStyles = StyleSheet.create({
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

export default Mine;
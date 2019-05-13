// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, Switch, Image, View, Animated, InteractionManager } from 'react-native';
import { FetchUtils } from '../../utils/ajax';

import {dakaStyles, styles,StreamColor} from './Style'

import { connect } from 'react-redux'

@connect()
class Mine extends Component {
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

export default Mine;
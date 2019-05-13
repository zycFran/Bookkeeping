// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, Switch, Image, View, Animated, InteractionManager } from 'react-native';
import { FetchUtils } from '../../utils/ajax';

import {dakaStyles, styles,StreamColor} from './Style'

import { connect } from 'react-redux'

@connect()
class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitch: false
    }
  }

  componentDidMount() {
   
  }

  _onValueChange = () => {

  }

  render() {
    return (
      <View style={styles.mine}>

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

export default Record;
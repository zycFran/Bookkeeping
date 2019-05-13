// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, Image, View, Animated, InteractionManager } from 'react-native';
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

import { dakaStyles, styles } from './Style'

import {CATEGORY_JSON} from './MockJson'

import Table from './Table'
import HeaderTab from './HeaderTab'

import { connect } from 'react-redux'

@connect()
class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultArr: ['支出', '收入'],
      selectColor: '',
      currentSelect: 0,
      inExCurrent: 0,
      currentItem: undefined,
    }
  }

  componentDidMount() {

  }
  _onPress = (c)=>{
    this.setState({

    })
  }

  _onScroll = () => {
    console.log(22)
  }

  render() {
    return (
      <View style={styles.record}>
        <HeaderTab
            onPress={() => this._onPress()}>

        </HeaderTab>

        <Table
          ref={'table'}
          currentSelect={this.state.inExCurrent}
          data={CATEGORY_JSON}
          onPress={this._onPress}
          onScroll={this._onScroll}
        />
      </View>
    );
  }
}

export default Record;
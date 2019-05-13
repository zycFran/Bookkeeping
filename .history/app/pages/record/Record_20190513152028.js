// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, Image, View, Animated, InteractionManager } from 'react-native';
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

import { dakaStyles, styles } from './Style'

import {CATEGORY_JSON} from './MockJson'

import TableComponent from './Table'

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

  _onPress = () => {
    console.log(111)
  }
  _onScroll = () => {
    console.log(22)
  }
  viewStyle = (i) => {
    var arr = [];
    arr.push(styles.button);
    arr.push({ borderColor: TitleColor });
    if (i == 0) {
      arr.push(styles.left);
    } else if (i == this.state.defaultArr.length - 1) {
      arr.push(styles.right);
    }
    if (this.state.currentSelect == i) {
      arr.push({
        backgroundColor: TitleColor,
      })
    } else {
      arr.push({
        backgroundColor: StreamColor,
      })
    }
    return arr;
  }
  textStyle = (i) => {
    if (this.state.currentSelect == i) {
      return [styles.text, {
        color: StreamColor
      }]
    } else {
      return [styles.text, {
        color: TitleColor
      }]
    }
  }
  render() {
    return (
      <View style={styles.record}>
        <View style={styles.tabWrap}>
          <TouchableHighlight
            style={this.viewStyle(0)}
            onPress={() => this._onPress()}
            underlayColor={'#28282844'}
          >
            <View>
              <Text style={this.textStyle(0)} >支出</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={this.viewStyle(1)}
            onPress={() => this._onPress()}
            underlayColor={'#28282844'}
          >
            <View>
              <Text style={this.textStyle(1)} >收入</Text>
            </View>
          </TouchableHighlight>
        </View>

        <TableComponent
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
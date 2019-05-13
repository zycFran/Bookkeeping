// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, Image, View, Animated, InteractionManager } from 'react-native';

import { dakaStyles, styles, StreamColor } from './Style'

import { connect } from 'react-redux'

@connect()
class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultArr: []
    }
  }

  componentDidMount() {

  }

  _onPress = () => {

  }
  viewStyle=(i)=>{
    var arr = [];
    arr.push(styles.button);
    arr.push({borderColor: this.state.selectColor});
    if (i == 0) {
      arr.push(styles.left);
    } else if (i == this.state.defaultArr.length - 1) {
      arr.push(styles.right);
    }
    if (this.state.currentSelect == i) {
      arr.push({
        backgroundColor: this.state.selectColor,
      })
    } else {
      arr.push({
        backgroundColor: this.state.normalColor,
      })
    }
    return arr;
  }
  textStyle=(i)=>{
    if (this.state.currentSelect == i) {
      return [styles.text, {
        color: this.state.selectTitle
      }]
    } else {
      return [styles.text, {
        color: this.state.normalTitle
      }]
    }
  }
  render() {
    return (
      <View style={styles.container}>
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
    );
  }
}

export default Record;
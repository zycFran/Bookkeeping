// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, Switch, Image, View, Animated, InteractionManager } from 'react-native';

import { dakaStyles, styles, StreamColor } from './Style'

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

  _onPress = () => {

  }
  textStyle=(i)=>{
    if (this.state.currentSelect == i) {
      return [styles.text, {
        color: this.props.selectTitle
      }]
    } else {
      return [styles.text, {
        color: this.props.normalTitle
      }]
    }
  }
  render() {
    return (
      <View style={styles.record}>
        <TouchableHighlight
          style={this.viewStyle()}
          onPress={() => this._onPress()}
          underlayColor={'#28282844'}
        >
          <View key={i}>
            <Text style={this.textStyle(1)} >{this.props.defaultArr[0]}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.viewStyle()}
          onPress={() => this._onPress()}
          underlayColor={'#28282844'}
        >
          <View key={i}>
            <Text style={this.textStyle(1)} >{this.props.defaultArr[1]}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Record;
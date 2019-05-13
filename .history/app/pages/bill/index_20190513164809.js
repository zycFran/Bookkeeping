// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, Image, View, Animated, InteractionManager } from 'react-native';
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

import { styles } from './Style'

import { connect } from 'react-redux'

@connect()
class Bill extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <View>
          <Text>None</Text>
      </View>
    );
  }
}

export default Bill;
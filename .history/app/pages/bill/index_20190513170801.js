// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, Image, View, Animated, InteractionManager } from 'react-native';
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

import { HeaderStyles } from './Style'

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
          <View style={HeaderStyles.wrap}>
                <Text style={HeaderStyles.title}>账单</Text>
          </View>
      </View>
    );
  }
}

export default Bill;
// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, Image, View, Animated, InteractionManager } from 'react-native';
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

import { dakaStyles, styles } from './Style'

import { connect } from 'react-redux'

@connect()
class None extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  componentDidMount() {

  }
  _onPress = (c)=>{
    this.setState({
      currentSelect: c
    });
  }

  _onScroll = () => {
    console.log(22)
  }

  render() {
    return (
      <View style={styles.record}>
        <HeaderTab
            currentSelect = {this.state.currentSelect}
            onPress={(c) => this._onPress(c)}>

        </HeaderTab>

        <ContentTable
          ref={'table'}
          currentSelect={this.state.currentSelect}
          onPress={this._onPress}
          onScroll={this._onScroll}
        />
      </View>
    );
  }
}

export default None;
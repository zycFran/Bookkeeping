// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, Switch, Image, View, Animated, InteractionManager } from 'react-native';

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

      </View>
    );
  }
}

export default Record;
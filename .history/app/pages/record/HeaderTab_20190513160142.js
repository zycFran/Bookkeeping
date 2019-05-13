// Default
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// Common
import { Navigation, BackgroundView } from '../../common/index';
// Utils
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, BackDefaultColor } from '../../utils/index';

class HeaderTab extends Component {

  static defaultProps = {
    onPress: () => { }
  }

  componentDidMount() {
    console.log(this.props.item);
  }
  render() {
    return (
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
    );
  }
}

Cell.defaultProps = {
  onPress: () => { }
}
Cell.propTypes = {
  onPress: PropTypes.func,
}

export default HeaderTab;
// Default
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, TouchableHighlight, Text, View, Image, TouchableOpacity } from 'react-native';
// Common
import { Navigation, BackgroundView } from '../../common/index';

// Utils
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, BackDefaultColor } from '../../utils/index';

import { dakaStyles, styles } from './Style'
class HeaderTab extends Component {

  static propTypes = {
    onPress: PropTypes.func
  }

  static defaultProps = {
    onPress: () => { }
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
    if (this.props.currentSelect == i) {
      return [styles.text, {
        color: StreamColor
      }]
    } else {
      return [styles.text, {
        color: TitleColor
      }]
    }
  }
  componentDidMount() {
    console.log(this.props.item);
  }


  render() {
    return (
      <View style={styles.tabWrap}>
        <TouchableHighlight
          style={this.viewStyle(0)}
          onPress={() => this.props.onPress(0)}
          underlayColor={'#28282844'}
        >
          <View>
            <Text style={this.textStyle(0)} >支出</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.viewStyle(1)}
          onPress={() => this.props.onPress(1)}
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

export default HeaderTab;
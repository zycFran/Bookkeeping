// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, Switch, Image, View, Animated, InteractionManager } from 'react-native';
import { FetchUtils } from '../../utils/ajax';

import { dakaStyles, styles, StreamColor } from './Style'

import { connect } from 'react-redux'

@connect()
class Home extends Component {
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
    _onPress = () => {
        console.log(11);
    }
    top() {
        let title = [this.props.year+"年", "收入", "支出"];
        let arr = [];
        for (let i=0; i<3; i++) {
          arr.push (
            <View key={i} style={{flex: i == 0 ? 3 : 4}}>
              <Text style={styles.text}>{title[i]}</Text>
            </View>
          )
        }
        return arr;
      }
      bottom() {
        let arr = [];
        for (let i=0; i<4; i++) {
          // 月份
          if (i == 0) {
            arr.push (
              <TouchableOpacity 
                key={i} 
                style={styles.one} 
                activeOpacity={0.8}
                onPress={this.props.onPress}
              >
                <View style={styles.oneV}>
                  <Text style={styles.oneLeft}>{this.props.month}</Text>
                  <Text style={styles.oneRight}>月</Text>
                  <Image 
                    resizeMode={"contain"} 
                    style={styles.oneIcon} 
                    source={require('../../assets/images/time_down.png')}
                  />
                </View>
              </TouchableOpacity>
            )
          } 
          // 线
          else if (i == 1) {
            arr.push (
              <View key={i} style={styles.line}/>
            )
          } 
          // 收入/支出
          else {
            let inEx = i == 2 ? this.props.ex : this.props.in;
            arr.push (
              <View key={i} style={styles.two}>
                <Text style={styles.twoText}>{inEx}</Text>
              </View>
            )
          }
        } 
        return arr;
      }
    render() {
        return (
            <View style={styles.mine}>
                <View style={HeaderStyles.container}>
                    <View style={HeaderStyles.top}>
                    {this.top()}
                    </View>
                    <View style={HeaderStyles.bottom}>
                    {this.bottom()}
                    </View>
                </View>
            </View>
        );
    }
}

export default Home;
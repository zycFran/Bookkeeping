// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, Switch, Image, View, Animated, TouchableOpacity } from 'react-native';
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

import { HomeStyles, HeaderStyles } from './Style'

import { connect } from 'react-redux'

@connect()
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 2019,
            month: 5,
            ex: '支出',
            in: '收入'
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
        let title = [this.state.year + "年", "收入", "支出"];
        let arr = [];
        for (let i = 0; i < 3; i++) {
            arr.push(
                <View key={i} style={{ flex: i == 0 ? 3 : 4 }}>
                    <Text style={HeaderStyles.text}>{title[i]}</Text>
                </View>
            )
        }
        return arr;
    }
    bottom() {
        let arr = [];
        for (let i = 0; i < 4; i++) {
            // 月份
            if (i == 0) {
                arr.push(
                    <TouchableOpacity
                        key={i}
                        style={HeaderStyles.one}
                        activeOpacity={0.8}
                        onPress={this._onPress}
                    >
                        <View style={HeaderStyles.oneV}>
                            <Text style={HeaderStyles.oneLeft}>{this.state.month}</Text>
                            <Text style={HeaderStyles.oneRight}>月</Text>
                            <Image
                                resizeMode={"contain"}
                                style={HeaderStyles.oneIcon}
                                source={require('../../assets/images/time_down.png')}
                            />
                        </View>
                    </TouchableOpacity>
                )
            }
            // 线
            else if (i == 1) {
                arr.push(
                    <View key={i} style={HeaderStyles.line} />
                )
            }
            // 收入/支出
            else {
                let inEx = i == 2 ? this.state.ex : this.state.in;
                arr.push(
                    <View key={i} style={HeaderStyles.two}>
                        <Text style={HeaderStyles.twoText}>{inEx}</Text>
                    </View>
                )
            }
        }
        return arr;
    }
    render() {
        return (
            <View style={HomeStyles.page}>
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
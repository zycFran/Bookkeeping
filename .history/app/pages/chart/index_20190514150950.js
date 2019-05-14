// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, Image, View, SectionList, InteractionManager } from 'react-native';
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

import { AreaChart, Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Svg, {
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop,
    TSpan
} from 'react-native-svg';
import {
    HeaderStyles,
    HeaderRightStyles,
    HeaderLeftStyles,
    ChartStyles,
    BodyStyles,
}
    from './Style'

import { connect } from 'react-redux'

@connect()
class Chart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentTypeSelect: 1,
            currentTimeSelect: '周',
            data: [

            ]
        }
    }

    componentDidMount() {
        let arr = [];
        let item = { 
            data: [
                {
                    name: '分数',
                    money: 3431
                },
                {
                    name: '分数',
                    money: 34342
                },
                {
                    name: '分数3',
                    money: 34342
                }
            ] 
        }
        for (let i = 0; i < item.data.length; i++) {
            if (item.data[i].inEx != this.props.inEx) {
                continue;
            }
            arr.push({
                key: i,
                row: i,
                name: item.data[i].name,
                percent: 0.45,
                money: item.data[i].money + '',
            })
        }
    }
    getCount() {
        if (this.state.currentTimeSelect == '周') {
            return 7;
        } else if (this.state.currentTimeSelect == '月') {
            return 30;
        } else if (this.state.currentTimeSelect == '年') {
            return 12;
        }
    }
    _renderItem = ({ item, index }) => {
        return (
            <View style={ListStyles.tr}>
                <Text style={[ListStyles.td]}>{item.month}月</Text>
                <Text style={[ListStyles.td]}>{item.exMoney}</Text>
                <Text style={[ListStyles.td]}>{item.inMoney}</Text>
                <Text style={[ListStyles.td]}>-{item.balance}</Text>
            </View>
        )
    }

    _loadMoreBills = (number) => {

        const { dispatch, bill } = this.props;
        const page = bill.page + 1
        dispatch({ type: 'bill/loadMoreBills', payload: { page } })
    }

    _onScroll = () => {
        // console.log("S")
    }

    leftTab = () => {
        let t = [
            {
                label: '支出',
                style: [HeaderLeftStyles.button, HeaderLeftStyles.left],
                textStyle: [HeaderLeftStyles.text]
            },
            {
                label: '收入',
                style: [HeaderLeftStyles.button, HeaderLeftStyles.right],
                textStyle: [HeaderLeftStyles.text]
            }
        ],
            tabs = [];

        for (let i = 0; i < t.length; i++) {
            tabs.push(
                <TouchableHighlight key={i}
                    style={[...t[i].style, { backgroundColor: this.state.currentTypeSelect == i ? TitleColor : StreamColor }]}
                    onPress={() => this._onSelectType(t[i], i)}
                    underlayColor={'#282828'}
                >
                    <View key={i}>
                        <Text style={[...t[i].textStyle, { color: this.state.currentTypeSelect == i ? StreamColor : TitleColor }]}>{t[i].label}</Text>
                    </View>
                </TouchableHighlight>
            )
        }
        return (
            <View style={HeaderLeftStyles.tabWrap}>
                {tabs}
            </View>
        )
    }

    rightTab = () => {
        let t = [
            {
                label: '周',
                style: [HeaderRightStyles.button, HeaderRightStyles.left],
                textStyle: [HeaderRightStyles.text]
            },
            {
                label: '月',
                style: [HeaderRightStyles.button, HeaderRightStyles.center],
                textStyle: [HeaderRightStyles.text]
            },
            {
                label: '年',
                style: [HeaderRightStyles.button, HeaderRightStyles.right],
                textStyle: [HeaderRightStyles.text]
            }
        ],
            tabs = [];

        for (let i = 0; i < t.length; i++) {
            tabs.push(
                <TouchableHighlight key={i}
                    style={[...t[i].style, { backgroundColor: this.state.currentTimeSelect == t[i].label ? TitleColor : StreamColor }]}
                    onPress={() => this._onSelectTime(t[i])}
                    underlayColor={'#28282844'}
                >
                    <View key={i}>
                        <Text style={[...t[i].textStyle, { color: this.state.currentTimeSelect == t[i].label ? StreamColor : TitleColor }]} >{t[i].label}</Text>
                    </View>
                </TouchableHighlight>
            )
        }
        return (
            <View style={HeaderRightStyles.tabWrap}>
                {tabs}
            </View>
        )
    }

    _onSelectType = (type, i) => {
        this.setState({
            currentTypeSelect: i
        })
    }

    _onSelectTime = (m) => {
        this.setState({
            currentTimeSelect: m.label
        })
    }
    // 原点
    circle() {
        let arr = [];
        let count = this.getCount();
        var padding = (ScreenWidth - 12 * 2) / (count - 1);
        for (let i = 0; i < count; i++) {
            var data = this.state.data.data[i];
            var value = 95;
            if (data != undefined) {
                if (i == 11) {
                    console.log(this.state.data);
                }
                value = 90 - 90.0 / this.state.data.max * data.value + 5;
            }
            var color = value == 95 ? 'white' : StreamColor;
            arr.push(
                <Circle
                    key={i}
                    cx={10 + 2 + i * padding + ""}
                    cy={value + ""}
                    r="2.5"
                    fill={color}
                    stroke={'#ccc'}
                    strokeWidth="0.5"
                />
            )
        }
        return arr;
    }
    // 文本
    text() {
        let arr = [];
        let count = this.getCount();
        let week = ['一', '二', '三', '四', '五', '六', '日'];
        for (let i = 0; i < count; i++) {
            if (this.state.currentTimeSelect == '周') {
                var padding = (ScreenWidth - 123 * 2) / (count - 1);
                var style = [styles.bottomText, { left: i * padding, width: 35 }];
                arr.push(
                    <Text key={i} style={style}>{'周' + week[i]}</Text>
                )
            } else if (this.state.currentTimeSelect == '月') {
                var padding = (ScreenWidth - 185 * 2) / (count - 1);
                var style = [styles.bottomText, { left: 6 + i * padding, width: 12 }];
                if ((i + 1) % 5 == 0 || i == 0 || i == count - 1) {
                    arr.push(
                        <Text key={i} style={style}>{i + 1}</Text>
                    )
                } else {
                    arr.push(
                        <Text key={i} style={style}></Text>
                    )
                }
            } else if (this.state.currentTimeSelect == '年') {
                var padding = (ScreenWidth - 125 * 2) / (count - 1);
                var style = [styles.bottomText, { left: 5 + i * padding, width: 20 }];
                if (i == 0 || (i + 1) % 3 == 0) {
                    arr.push(
                        <Text key={i} style={style}>{i + 1 + "月"}</Text>
                    )
                } else {
                    arr.push(
                        <Text key={i} style={style}></Text>
                    )
                }
            }
        }
        return arr;
    }
    // 折线
    polyline() {
        var str = '';
        let count = this.getCount();
        let padding = (ScreenWidth - 12 * 2) / (count - 1);
        for (let i = 0; i < count; i++) {
            var value = 95;
            var data = this.state.data.data[i];
            if (data != undefined) {
                value = 90 - 90.0 / this.state.data.max * data.value + 5;
            }
            str = str + (10 + i * padding + 2) + "," + value;
            if (i != count - 1) {
                str = str + ' ';
            }
        }
        return (
            <Polyline
                points={str}
                fill="none"
                stroke={'#bbb'}
                strokeWidth="1"
            />
        )
    }
    render() {
        return (
            <View style={ChartStyles.page}>
                <View style={HeaderStyles.header}>
                    {this.leftTab()}
                    {this.rightTab()}
                </View>
                <View style={ChartStyles.body}>
                    <Text style={BodyStyles.name}>总{this.state.currentTypeSelect == 0 ? '支出' : '收入'}: 34555</Text>
                    <Text style={BodyStyles.detail}>平均值: 1213</Text>
                    <Svg
                        width={ScreenWidth + ""}
                        height={"100"}
                        fill={'#000'}
                    >
                        <Line
                            x1="10"
                            y1="5"
                            x2={ScreenWidth - 10 + ""}
                            y2="5"
                            stroke={'#ddd'}
                            strokeWidth="1"
                        />
                        <Line
                            x1="10"
                            y1="95"
                            x2={ScreenWidth - 10 + ""}
                            y2="95"
                            stroke={'#ddd'}
                            strokeWidth="1"
                        />
                        {this.polyline()}
                        {this.circle()}
                    </Svg>
                    <View style={BodyStyles.bottom}>
                        {this.text()}
                    </View>
                    <Text style={BodyStyles.inEx}>{this.state.currentTypeSelect == 0 ? '支出' : '收入'}排行榜</Text>
                </View>
            </View>
        )
    }
}

export default Chart;
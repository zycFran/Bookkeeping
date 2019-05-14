// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, Image, View, SectionList, InteractionManager } from 'react-native';
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

import { AreaChart, Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import {
    HeaderStyles,
    HeaderRightStyles,
    HeaderLeftStyles,
    ChartStyles
}
    from './Style'

import { connect } from 'react-redux'

@connect()
class Chart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentTypeSelect: 1,
            currentTimeSelect: '周'
        }
    }

    componentDidMount() {
        // console.log(this.props)
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

    render() {
        return (
            <View style={ChartStyles.page}>
                <View style={HeaderStyles.header}>
                    {this.leftTab()}
                    {this.rightTab()}
                </View>
                <View style={styles.body}>
                    <View
                        style={styles.container}
                        {...this._panResponder.panHandlers}
                        onResponderTerminationRequest={() => false}
                    >

                        <Text style={styles.name}>总{this.state.currentTypeSelect == 0 ? '支出' : '收入'}: {Save.toDecimal2(this.props.data.sum)}</Text>
                        <Text style={styles.detail}>平均值: {Save.toDecimal2(this.props.data.avg)}</Text>
                        <Svg
                            width={ScreenWidth + ""}
                            height={"100"}
                            fill={'#000'}
                        >
                            {this.defaultLine()}
                            {this.polyline()}
                            {this.circle()}
                        </Svg>
                        <View style={styles.bottom}>
                            {this.text()}
                        </View>
                        <Text style={styles.inEx}>{this.props.currentTypeSelect == 0 ? '支出' : '收入'}排行榜</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Chart;
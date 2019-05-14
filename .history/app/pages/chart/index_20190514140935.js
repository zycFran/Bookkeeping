// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, Image, View, SectionList, InteractionManager } from 'react-native';
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

import { AreaChart, Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import { HeaderStyles, ListStyles, BillStyles } from './Style'

import { connect } from 'react-redux'

@connect()
class Chart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

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
        const t = [
            {
                label: '支出',
                style: [styles.button, styles.left]
            },
            {
                label: '收入',
                style: [styles.button, styles.left]
            }
        ], 
        tabs = [];

        for (let i = 0; i < t.length; t++) {
            tabs.push(
                <TouchableHighlight key = {i}
                    onPress={() => this.props._onSelectType(i)}
                    underlayColor={'#28282844'}
                >
                    <View style={[...t[i].style,{ backgroundColor: this.currentSelect == 0 ? TitleColor : StreamColor }]}>
                        <Text style={this.textStyle(0)} >{t[i].label}</Text>
                    </View>
                </TouchableHighlight>
            )
        }
        return tabs;
    }

    rightTab = () => {

    }

    _onSelectType = (type) => {

    }

    render() {
        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    <View style={styles.left}>
                        <TouchableHighlight
                            onPress={() => this.props.onPress(0)}
                            underlayColor={'#28282844'}
                        >
                            <View style={[styles.button, styles.left, { backgroundColor: this.currentSelect == 0 ? TitleColor : StreamColor }]}>
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
                    <View style={styles.right}></View>
                </View>
                <View style={styles.body}>
                    <View
                        style={styles.container}
                        {...this._panResponder.panHandlers}
                        onResponderTerminationRequest={() => false}
                    >

                        <Text style={styles.name}>总{this.props.inEx == 0 ? '支出' : '收入'}: {Save.toDecimal2(this.props.data.sum)}</Text>
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
                        <Text style={styles.inEx}>{this.props.inEx == 0 ? '支出' : '收入'}排行榜</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Chart;
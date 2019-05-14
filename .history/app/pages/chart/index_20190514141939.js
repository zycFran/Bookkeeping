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
            currentTypeSelect: 0,
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
        const t = [
            {
                label: '支出',
                style: [styles.button, styles.left],
                textStyle:[styles.text]
            },
            {
                label: '收入',
                style: [styles.button, styles.right],
                textStyle:[styles.text]
            }
        ], 
        tabs = [];

        for (let i = 0; i < t.length; t++) {
            tabs.push(
                <TouchableHighlight key = {i}
                    onPress={() => this.props._onSelectType(i)}
                    underlayColor={'#28282844'}
                >
                    <View style={[...t[i].style,{ backgroundColor: this.currentTypeSelect == i ? StreamColor : TitleColor }]}>
                        <Text style={[...t[i].style,{ color: this.currentTypeSelect == i ? StreamColor : TitleColor }]} >{t[i].label}</Text>
                    </View>
                </TouchableHighlight>
            )
        }
        return tabs;
    }

    rightTab = () => {
        const t = [
            {
                label: '周',
                style: [HeaderRightstyles.button, styles.left],
                textStyle:[styles.text]
            },
            {
                label: '月',
                style: [styles.button, styles.center],
                textStyle:[styles.text]
            },
            {
                label: '年',
                style: [styles.button, styles.right],
                textStyle:[styles.text]
            }
        ], 
        tabs = [];

        for (let i = 0; i < t.length; t++) {
            tabs.push(
                <TouchableHighlight key = {i}
                    onPress={() => this.props._onSelectTime(i)}
                    underlayColor={'#28282844'}
                >
                    <View style={[...t[i].style,{ backgroundColor: this.currentTimeSelect == t[i].label ? StreamColor : TitleColor }]}>
                        <Text style={[...t[i].style,{ color: this.currentTimeSelect == t[i].label ? StreamColor : TitleColor }]} >{t[i].label}</Text>
                    </View>
                </TouchableHighlight>
            )
        }
        return tabs;
    }

    _onSelectType = (type) => {

    }

    _onSelectTime = (m)=>{

    }

    render() {
        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    {this.leftTab()}
                    {this.rightTab()}
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
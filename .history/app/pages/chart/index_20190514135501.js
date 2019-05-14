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

    render() {
        return (
            <View style={styles.page}>
                <View style={styles.header}>

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
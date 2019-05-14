// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, Image, View, SectionList, InteractionManager } from 'react-native';
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

import { HeaderStyles, ListStyles, BillStyles } from './Style'

import { connect } from 'react-redux'

@connect(({ bill, router }) => ({ bill, router }))
class Bill extends PureComponent {
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
        dispatch({ type: 'bill/loadMoreBills', payload:{page}})
    }

    _onScroll=()=>{
        // console.log("S")
    }

    render() {
        return (
            const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

            return (
                <AreaChart
                    style={{ height: 200 }}
                    data={ data }
                    contentInset={{ top: 30, bottom: 30 }}
                    curve={ shape.curveNatural }
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                >
                    <Grid/>
                </AreaChart>
            )
        );
    }
}

export default Bill;
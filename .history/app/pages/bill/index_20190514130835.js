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
            <View style={BillStyles.bill}>
                <View style={HeaderStyles.wrap}>
                    <Text style={HeaderStyles.title}>账单</Text>
                    <View style={HeaderStyles.balance_wrap}>
                        <Text style={HeaderStyles.balance}>38934</Text>
                        <Text style={HeaderStyles.balance_small}>.34</Text>
                    </View>
                    <View style={HeaderStyles.tab}>
                        <View style={[HeaderStyles.tab_item, HeaderStyles.tab_item_left]}>
                            <Text style={HeaderStyles.tab_item_label}>支出</Text>
                            <Text style={HeaderStyles.tab_item_money}>-3434.00</Text>
                        </View>
                        <View style={[HeaderStyles.tab_item, HeaderStyles.tab_item_right]}>
                            <Text style={HeaderStyles.tab_item_label}>收入</Text>
                            <Text style={HeaderStyles.tab_item_money}>3434.00</Text>
                        </View>
                    </View>
                </View>

                <View style={ListStyles.list}>
                    <View style={ListStyles.theader}>
                        <Text style={[ListStyles.th]}>月份</Text>
                        <Text style={[ListStyles.th]}>收入</Text>
                        <Text style={[ListStyles.th]}>支出</Text>
                        <Text style={[ListStyles.th]}>结余</Text>
                    </View>
                    <View style={ListStyles.tbody}>
                        <SectionList style={ListStyles.tbodyH}
                            sections={[]}
                            renderItem={this._renderItem}
                            refreshing={true}
                            onScroll={this._onScroll}
                            onEndReached={this._loadMoreBills}
                            onEndReachedThreshold={0.1}
                            stickySectionHeadersEnabled={false}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>

                </View>
            </View>
        );
    }
}

export default Bill;
// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, Image, View, Animated, InteractionManager } from 'react-native';
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

import { HeaderStyles, ListStyles } from './Style'

import { connect } from 'react-redux'

@connect()
class Bill extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    data = () => {
        return [
            {
                month: 4,
                exMoney: 1999,
                inMoney: 3399,
                balance: -2399
            }
        ];
    }

    _renderItem = ({ item }) => {
        return (
            <View style={ListStyles.tr}>
                <Text style={[ListStyles.td]}>{item.month}月</Text>
                <Text style={[ListStyles.td]}>{item.exMoney}</Text>
                <Text style={[ListStyles.td]}>{item.inMoney}</Text>
                <Text style={[ListStyles.td]}>-{item.balance}</Text>
            </View>
        )
    }

    render() {
        return (
            <View>
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
                    <View style={styles.theader}>
                        <Text style={[styles.header_th]}>月份</Text>
                        <Text style={[styles.header_th]}>收入</Text>
                        <Text style={[styles.header_th]}>支出</Text>
                        <Text style={[styles.header_th]}>结余</Text>
                    </View>
                    <SectionList
                        sections={this.data()}
                        renderItem={this._renderItem}
                        // ListHeaderComponent={this._ListHeaderComponent()}
                        // renderSectionHeader={this._renderItem}
                        // ItemSeparatorComponent={() => this._ItemSeparatorComponent()}
                        stickySectionHeadersEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

            </View>
        );
    }
}

export default Bill;
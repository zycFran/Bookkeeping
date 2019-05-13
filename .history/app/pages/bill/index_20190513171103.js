// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, Image, View, Animated, InteractionManager } from 'react-native';
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

import { HeaderStyles } from './Style'

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

    render() {
        return (
            <View>
                <View style={HeaderStyles.wrap}>
                    <Text style={HeaderStyles.title}>账单</Text>
                    <View style={HeaderStyles.balance}>
                        <Text>38934</Text>
                        <Text style={HeaderStyles.balance_small}>.34</Text>
                    </View>
                    <View style={HeaderStyles.tab}>
                        <View style={[HeaderStyles.tab_item, HeaderStyles.tab_item_left]}>
                            <Text style={HeaderStyles.tab_item_label}>支出</Text>
                            <Text style={HeaderStyles.tab_item_money}>-3434.00</Text>
                        </View>
                        <View style={[HeaderStyles.tab_item, HeaderStyles.tab_item_left]}>
                            <Text style={HeaderStyles.tab_item_label}>收入</Text>
                            <Text style={HeaderStyles.tab_item_money}>3434.00</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Bill;
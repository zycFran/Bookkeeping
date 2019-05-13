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

                <View >
                    <View style={styles.container}>
                        <Text style={[styles.name, { flex: 2 }]}>月份</Text>
                        <Text style={[styles.name]}>收入</Text>
                        <Text style={[styles.name]}>支出</Text>
                        <Text style={[styles.name]}>结余</Text>
                    </View>
                    <SectionList
                        sections={this.data()}
                        renderItem={({ item }) => <Cell item={item} />}
                        ListHeaderComponent={this._ListHeaderComponent()}
                        renderSectionHeader={(section) => this._renderSectionHeader(section.section)}
                        ItemSeparatorComponent={() => this._ItemSeparatorComponent()}
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
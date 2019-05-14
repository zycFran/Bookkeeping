// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, SectionList, Image, View, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, pxToDp } from '../../utils/index';

import { HomeStyles, HeaderStyles, ListStyles } from './Style'

import { connect } from 'react-redux'

@connect()
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 2019,
            month: 5,
            ex: 2323,
            in: 34423,
            data: {
                range: [{
                    date: []
                }]
            }
        }
    }

    componentDidMount() {

    }

    _onValueChange = () => {

    }
    _onHeaderClick = () => {
        // this.refs.picker.show(3);
    }
    _onPress = () => {
        console.log(11);
    }
    top() {
        let title = [this.state.year + "年", "收入", "支出"];
        let arr = [];
        for (let i = 0; i < 3; i++) {
            arr.push(
                <View key={i} style={{ flex: i == 0 ? 3 : 4 }}>
                    <Text style={HeaderStyles.text}>{title[i]}</Text>
                </View>
            )
        }
        return arr;
    }
    bottom() {
        let arr = [];
        for (let i = 0; i < 4; i++) {
            // 月份
            if (i == 0) {
                arr.push(
                    <TouchableOpacity
                        key={i}
                        style={HeaderStyles.one}
                        activeOpacity={0.8}
                        onPress={this._onPress}
                    >
                        <View style={HeaderStyles.oneV}>
                            <Text style={HeaderStyles.oneLeft}>{this.state.month}</Text>
                            <Text style={HeaderStyles.oneRight}>月</Text>
                            <Image
                                resizeMode={"contain"}
                                style={HeaderStyles.oneIcon}
                                source={require('../../assets/images/time_down.png')}
                            />
                        </View>
                    </TouchableOpacity>
                )
            }
            // 线
            else if (i == 1) {
                arr.push(
                    <View key={i} style={HeaderStyles.line} />
                )
            }
            // 收入/支出
            else {
                let inEx = i == 2 ? this.state.ex : this.state.in;
                arr.push(
                    <View key={i} style={HeaderStyles.two}>
                        <Text style={HeaderStyles.twoText}>{inEx}</Text>
                    </View>
                )
            }
        }
        return arr;
    }
    _renderItem = (item) => {
        return (
            <View></View>
        )
    }
    _renderSectionHeader = (section) => {
        return (
            <View style={ListStyles.header}>
                <Text style={ListStyles.headerText}>{section.remark}</Text>
                <Text style={ListStyles.headerText}>{section.detail}</Text>
            </View>
        )
    }
    _ItemSeparatorComponent = () => {
        return (
            <View style={[ListStyles.line, {
                left: 40
            }]} />
        )
    }
    _noData = () => {
        return (
            <View style={ListStyles.noData}>
                <Image
                    style={ListStyles.icon}
                    source={require('../../assets/images/no_data.png')}
                />
                <Text style={ListStyles.name}>暂无数据</Text>
            </View>
        );
    }
    data(i) {
        let section = [];
        let param = this.state.data.param;
        return [];
        let key = this.state.data.range[i].remark;
        if (param[key] != undefined) {
            let keys = Object.keys(param[key].data);
            keys.sort((a, b) => {
                return b - a;
            })
            for (let i = 0; i < keys.length; i++) {
                let data = [];
                for (let y = 0; y < param[key].data[keys[i]].data.length; y++) {
                    let dict = param[key].data[keys[i]].data[y];
                    dict['key'] = y;
                    data.push(dict)
                }
                let detail = '';
                if (param[key].data[keys[i]].inmax != 0) {
                    detail = detail + '支出:  ' + param[key].data[keys[i]].inmax;
                }
                if (param[key].data[keys[i]].exmax != 0) {
                    detail = detail + '   ' + '收入:  ' + param[key].data[keys[i]].exmax;
                }
                section.push({
                    data: data,
                    remark: param[key].data[keys[i]].remark,
                    detail: detail,
                })
            }
            return section;
        }
        return [];
    }
    list() {
        let arr = [];
        for (let i = 0; i < this.state.data.range.length; i++) {
            arr.push(
                <SectionList
                    key={i}
                    style={{ height: ScreenHeight - 64 - 54 - 50 }}
                    renderItem={({ item }) => this._renderItem(item)}
                    renderSectionHeader={({ section }) => this._renderSectionHeader(section)}
                    ItemSeparatorComponent={this.state}
                    sections={this.data(this.state.data.range.length - i - 1)}
                    ListEmptyComponent={this._noData()}
                    stickySectionHeadersEnabled={false}
                />
            )
        }
        return arr;
    }
    render() {
        return (
            <View style={HomeStyles.page}>
                <View style={HeaderStyles.container}>
                    <View style={HeaderStyles.top}>
                        {this.top()}
                    </View>
                    <View style={HeaderStyles.bottom}>
                        {this.bottom()}
                    </View>
                </View>
                <View style={ListStyles.container}>
                    <ScrollView
                        style={{ height: ScreenHeight - 64 - 54 - 50 }}
                        pagingEnabled={true}
                        ref={'scroll'}
                        onMomentumScrollEnd={(event) => {
                            let height = event.nativeEvent.layoutMeasurement.height;
                            let page = event.nativeEvent.contentOffset.y / height;
                            this.props.onMomentumScrollEnd(parseInt(page));
                        }}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        {this.list()}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Home;
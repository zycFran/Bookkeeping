// Default
import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, Switch, Image, View, Animated, InteractionManager } from 'react-native';
import { FetchUtils } from '../../utils/ajax';

import { dakaStyles, styles, StreamColor } from './Style'

import { connect } from 'react-redux'

@connect()
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitch: false
        }
    }

    componentDidMount() {

    }

    _onValueChange = () => {

    }
    _onPress = () => {
        console.log(11);
    }

    render() {
        return (
            <View style={styles.mine}>
                <View style={styles.container}>
        <View style={styles.top}>
          {this.top()}
        </View>
        <View style={styles.bottom}>
          {this.bottom()}
        </View>
      </View>
            </View>
        );
    }
}

export default Home;
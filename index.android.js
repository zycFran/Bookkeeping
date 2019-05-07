/**
 * @format
 */

import React, { Component } from 'react';

import { AppRegistry } from 'react-native';

import RootScene from './src/RootScene';


export default class Bookkeeping extends Component {
  render() {
    return (
        <RootScene/>
      );
  }
}

AppRegistry.registerComponent('Bookkeeping', () => Bookkeeping);

import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, StatusBar } from 'react-native';
import { Constants } from 'expo';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';


import AppNavigator from './Navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
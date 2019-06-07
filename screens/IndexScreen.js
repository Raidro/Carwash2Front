import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';

import bgimage from '../assets/images/Android-BackgroundChart.png';
import Icon from 'react-native-vector-icons/Ionicons';
const { width: WIDTH } = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={bgimage} style={styles.backgroundContainer} />
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
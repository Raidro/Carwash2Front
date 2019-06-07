/*import React, { Component } from 'react';
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

import bgimage from '../assets/Android-BackgroundChart.png';
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
});*/

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants, MapView } from 'expo';

export default class App extends Component {
  state = {
    mapRegion: {
      latitude: -5.7793,
      longitude: -35.2009,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: 'stretch', height: 550 }}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
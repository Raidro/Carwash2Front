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
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import { Constants, MapView } from 'expo';
const { width: WIDTH } = Dimensions.get('window');

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
          style={{ alignSelf: 'stretch', height: 430 }}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        />

        <View style={styles.container}>
          <TouchableOpacity onPress={() => {}} style={styles.btnCadastrar}>
            <Text style={styles.text}> Solicitar </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },

  btnCadastrar: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 120,
  },
  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
});

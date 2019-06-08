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
  FlatList,
} from 'react-native';

import bgimage from '../assets/images/Android-BackgroundChart.png';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
const { width: WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    //justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    alignItems: 'center',
    color: 'black',
    fontSize: 35,
    fontWeight: '500',
    marginTop: 60,
    marginBottom: 50,
    opacity: 0.7,
  },

  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 25,
    textAlign: 'center',
  },

  list: {
    //alignItems: 'center',
    flexGrow: 1,
    margin: 4,
    padding: 20,
    borderRadius: 25,

  },

  itemContainer: {
    //alignItems: 'center',
    backgroundColor: '#496283',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#rgba(255,255,255,0.1)',
    padding: 20,
    marginBottom: 10,
  },

});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
    };
  }

  componentDidMount() {
    this.loadName();
  }

  loadName = async () => {
    const response = await axios.get(
      'http://192.168.1.108/carwash2/public/user'
    ).then(({ data }) => {
      const name = data.data;
      this.setState({ name: name });
    }).catch(error => {
      console.log(error);
    });
  };

  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  render() {
    return (
      <ImageBackground source={bgimage} style={styles.backgroundContainer}>
        <View>
          <Text style={styles.logoText}>USUARIOS</Text>
        </View>
        <View>
          <FlatList
            contentContainerStyle={styles.list}
            data={this.state.name}
            keyExtractor={item => item.id}
            renderItem={this.renderItem}
          />
        </View>
      </ImageBackground>
    );
  }
}

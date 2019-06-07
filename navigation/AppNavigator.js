import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import IndexScreen from '../screens/IndexScreen';
import ListScreen from '../screens/ListScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

export default createAppContainer(createSwitchNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    Index: IndexScreen,
    List: ListScreen,
  },
  {
    initialRouteName: 'List',
  }
));
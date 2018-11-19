
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { AppRegistry } from "react-native";
import LoginActivity from './component/activity/LoginActivity';
import HomeActivity from './component/activity/HomeActivity';
import LandingPage from './component/activity/LandingPage';
import RegisterActivity from './component/activity/RegisterActivity';

const RootStack = createStackNavigator(
{
  LoginPage: { screen: LoginActivity },
  HomePage: { screen: HomeActivity },
  LandingPage: { screen: LandingPage},
  RegisterPage: { screen: RegisterActivity}
},
{
    initialRouteName: 'LandingPage',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

YellowBox.ignoreWarnings(
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
]);
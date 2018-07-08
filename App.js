import React from 'react';
import HomeScreen from './src/components/homeScreen';
import MenuScreen from './src/components/menuScreen';
import {createStackNavigator} from 'react-navigation';
import {StyleSheet} from "react-native";

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Menu: MenuScreen
}, {initialRouteName: 'Menu'});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

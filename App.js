import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// You can import from local files
import HomeScreen from './screens/HomeScreen';
import JokeScreen from './screens/jokeScreen';
import AstrologyScreen from './screens/AstrologyScreen';
import WeatherScreen from './screens/WeatherScreen';
import NewsScreen from './screens/NewsScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  JokeScreen: JokeScreen,
  AstrologyScreen: AstrologyScreen,
  WeatherScreen: WeatherScreen,
  NewsScreen: NewsScreen,
});

const AppContainer = createAppContainer(AppNavigator);

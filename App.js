import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import EditEventCardScreen from './src/screens/EditEventCardScreen';
import Router from './src/router/Router';

const Stack = createNativeStackNavigator();

const App = () => {
  return <Router />;
};

export default App;

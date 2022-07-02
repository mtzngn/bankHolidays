import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import EditEventCardScreen from './src/screens/EditEventCardScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UK Bank Holidays" component={HomeScreen} />
        <Stack.Screen name="Edit Event" component={EditEventCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="EditEventCardScreen"
          component={EditEventCardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import EditEventCardScreen from '../screens/EditEventCardScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'UK Bank Holidays'}}
        />
        <Stack.Screen name="Edit Event" component={EditEventCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

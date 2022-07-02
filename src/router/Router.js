import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import EditEventCardScreen from '../screens/EditEventCardScreen';
import {Button} from '@react-native-material/core';
import {green} from '../themes/colors';

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
        <Stack.Screen
          name="Edit Event"
          component={EditEventCardScreen}
          options={({navigation, route}) => ({
            headerLeft: () => (
              <Button
                onPress={() => navigation.goBack()}
                title="Go Back"
                variant="text"
                color={green}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

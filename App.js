import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [days, setDays] = useState();
  const getBankHolidays = async () => {
    const response = await fetch('https://www.gov.uk/bank-holidays.json');
    const data = await response.json();
    console.log('gollum', data);
  };

  useEffect(() => {
    getBankHolidays();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

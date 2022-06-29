import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
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
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('EditCard')}>
        <Text>take me to edit card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

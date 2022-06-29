import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

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
    <SafeAreaView>
      <Text>yowwww</Text>
    </SafeAreaView>
  );
};

export default App;

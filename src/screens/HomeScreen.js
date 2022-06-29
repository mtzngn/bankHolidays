import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {fetchBankHolidays} from '../api';
import {useDispatch, useSelector} from 'react-redux';
import {initilizeBankHolidays} from '../reducers/bankHolidaysReducer';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const initiliazeReduxStore = async () => {
    const bankHolidays = await fetchBankHolidays();
    const englandAndWales = bankHolidays['england-and-wales'].events;
    dispatch(
      initilizeBankHolidays({
        englandAndWales,
      }),
    );
  };

  useEffect(() => {
    initiliazeReduxStore();
  });

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

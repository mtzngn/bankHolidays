import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {fetchBankHolidays} from '../api';
import {useDispatch} from 'react-redux';
import {initilizeBankHolidays} from '../reducers/bankHolidaysReducer';
import EventList from '../components/EventList/EventList';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const initiliazeReduxStore = async () => {
    const bankHolidays = await fetchBankHolidays();
    const events = bankHolidays['england-and-wales'].events;
    dispatch(
      initilizeBankHolidays({
        events,
      }),
    );
  };

  useEffect(() => {
    initiliazeReduxStore();
  });

  return (
    <SafeAreaView>
      <EventList />
    </SafeAreaView>
  );
};

export default HomeScreen;

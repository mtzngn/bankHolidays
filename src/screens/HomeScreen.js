import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {fetchBankHolidays} from '../api';
import {useDispatch} from 'react-redux';
import {initilizeBankHolidays} from '../reducers/bankHolidaysReducer';
import EventList from '../components/EventList/EventList';
import {addDivisons, filterBySixMonthFromNow} from '../utils';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const initiliazeReduxStore = async () => {
    const bankHolidays = await fetchBankHolidays();
    const unFilteredEvents = addDivisons(bankHolidays);
    const events = filterBySixMonthFromNow(unFilteredEvents).slice(0, 5);

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

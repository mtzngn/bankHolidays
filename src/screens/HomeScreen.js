import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchBankHolidays} from '../api/bankHolidaysApi';
import {initilizeBankHolidays} from '../reducers/bankHolidaysReducer';
import {
  addDivisons,
  filterBySixMonthFromNow,
  sortByDate,
} from '../utils/generalFunctions';
import {white} from '../themes/colors';
import EventList from '../components/EventList/EventList';

const styles = StyleSheet.create({
  homeWrapper: {backgroundColor: white},
});

const HomeScreen = () => {
  const dispatch = useDispatch();

  const initiliazeReduxStore = async () => {
    const bankHolidays = await fetchBankHolidays();
    const divisionAddedEvents = addDivisons(bankHolidays);
    const sortedByDateEvents = sortByDate(divisionAddedEvents);
    const events = filterBySixMonthFromNow(sortedByDateEvents).slice(0, 5);

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
    <SafeAreaView style={styles.homeWrapper}>
      <EventList />
    </SafeAreaView>
  );
};

export default HomeScreen;

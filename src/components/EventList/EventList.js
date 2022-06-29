import React from 'react';
import {Text, ScrollView, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';

const EventList = () => {
  const {events} = useSelector(state => state.bankHolidays);
  const renderEventCards = () => {
    return events.map(event => {
      return <Text>{event.title}</Text>;
    });
  };
  return (
    <SafeAreaView>
      <ScrollView>{events.length > 0 && renderEventCards()}</ScrollView>
    </SafeAreaView>
  );
};

export default EventList;

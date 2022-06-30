import React from 'react';
import {Text, ScrollView, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import EventCard from '../EventCard/EventCard';

const styles = StyleSheet.create({
  eventListContainer: {
    alignItems: 'center',
    paddingLeft: 10,
  },
});

const EventList = () => {
  const {events} = useSelector(state => state.bankHolidays);
  const renderEventCards = () => {
    return events.map((event, i) => {
      return <EventCard event={event} key={`${event.date}${i}`} />;
    });
  };
  return (
    <View style={styles.eventListContainer}>
      <ScrollView>{events?.length > 0 && renderEventCards()}</ScrollView>
    </View>
  );
};

export default EventList;

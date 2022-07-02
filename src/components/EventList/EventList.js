import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import EventCard from '../EventCard/EventCard';

const styles = StyleSheet.create({
  eventListContainer: {
    alignItems: 'center',
    height: '100%',
  },
});

const EventList = () => {
  const {events} = useSelector(state => state.bankHolidays);
  const renderEventCards = () =>
    events.map((event, i) => <EventCard event={event} key={event.id} />);

  return (
    <View style={styles.eventListContainer}>
      <ScrollView>{events?.length > 0 && renderEventCards()}</ScrollView>
    </View>
  );
};

export default EventList;

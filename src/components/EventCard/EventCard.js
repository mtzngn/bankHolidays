import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {formatText} from '../../utils/generalFunctions';
import {gray, white, green} from '../../themes/colors';

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    width: '95%',
    height: 70,
    marginVertical: 10,
    shadowColor: gray,
    shadowOffset: {width: 1.5, height: 1.5},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  divisionAndDateContainer: {
    padding: 1,
    backgroundColor: white,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: green,
  },
  titleAndNoteContainer: {
    backgroundColor: white,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
  },
  text: {
    fontWeight: '300',
    fontSize: 14,
    color: gray,
  },
  date: {
    fontSize: 14,
  },
});

const EventCard = ({event}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate('Edit Event', {event});
      }}>
      <View style={styles.divisionAndDateContainer}>
        <Text style={styles.title}>{formatText(event.division)}</Text>
        <Text style={styles.date}>{event.date}</Text>
      </View>
      <View style={styles.titleAndNoteContainer}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.text}>{event.notes}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;

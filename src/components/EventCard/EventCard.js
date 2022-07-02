import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {formatText} from '../../utils/generalFunctions';
import {gray, white, green10, green} from '../../themes/colors';

const styles = division =>
  StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
      width: '98%',
      height: 70,
      marginVertical: 5,
      shadowColor: gray,
      shadowOffset: {width: 1.5, height: 1.5},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    },
    divisionAndDateContainer: {
      padding: 1,
      backgroundColor: green10,
      width: '30%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 5,
      borderLeftWidth: 5,
      borderLeftColor: division === 'scotland' ? '##004b84' : '#CF081F',
    },
    titleAndNoteContainer: {
      backgroundColor: white,
      width: '70%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 5,
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
      style={styles().cardContainer}
      onPress={() => {
        navigation.navigate('Edit Event', {event});
      }}>
      <View style={styles(event.division).divisionAndDateContainer}>
        <Text style={styles().title}>
          {event.division && formatText(event.division)}
        </Text>
        <Text style={styles().date}>{event.date}</Text>
      </View>
      <View style={styles().titleAndNoteContainer}>
        <Text style={styles().title}>{event.title}</Text>
        <Text style={styles().text}>{event.notes}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;

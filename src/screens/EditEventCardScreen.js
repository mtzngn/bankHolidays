import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateEvent} from '../reducers/bankHolidaysReducer';
import {TextInput, Button} from '@react-native-material/core';
import {green} from '../themes/colors';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    margin: 5,
  },
});

const EditEventCardScreen = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {event} = route.params;
  const {id} = event;
  const [date, setDate] = useState(event.date);
  const [division, setDivision] = useState(event.division);
  const [notes, setNotes] = useState(event.notes);
  const [title, setTitle] = useState(event.title);

  const onSubmitPress = () => {
    const updatedEvent = {date, notes, division, title, id};
    dispatch(updateEvent({updatedEvent}));
    navigation.navigate('Home');
  };

  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.container}>
        <TextInput value={date} label={'Date'} onChangeText={setDate} />
      </View>

      <View style={styles.container}>
        <TextInput
          value={division}
          label={'Division'}
          onChangeText={setDivision}
        />
      </View>

      <View style={styles.container}>
        <TextInput value={notes} label={'Notes'} onChangeText={setNotes} />
      </View>

      <View style={styles.container}>
        <TextInput
          value={title}
          label={'Title'}
          onChangeText={setTitle}
          color={green}
        />
      </View>
      <Button
        title="Submit"
        variant="contained"
        onPress={onSubmitPress}
        color={green}
      />
    </View>
  );
};

export default EditEventCardScreen;

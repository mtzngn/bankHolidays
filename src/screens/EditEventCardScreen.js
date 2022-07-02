import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateEvent} from '../reducers/bankHolidaysReducer';
import {Button} from '@react-native-material/core';
import {green} from '../themes/colors';
import CustomInput from '../common/CustomInput';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
    navigation.navigate('UK Bank Holidays');
  };

  const renderInputs = () => {
    return (
      <>
        <CustomInput value={title} label="Title" onChangeText={setTitle} />
        <CustomInput value={date} label="Date" onChangeText={setDate} />
        <CustomInput
          value={division}
          label="Division"
          onChangeText={setDivision}
        />
        <CustomInput value={notes} label="Notes" onChangeText={setNotes} />
      </>
    );
  };

  const renderSubmitButton = () => {
    return (
      <Button
        title="Submit"
        variant="contained"
        onPress={onSubmitPress}
        color={green}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderInputs()}
      {renderSubmitButton()}
    </View>
  );
};

export default EditEventCardScreen;

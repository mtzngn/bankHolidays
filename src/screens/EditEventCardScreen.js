import React from 'react';
import {View, Text} from 'react-native';

const EditEventCardScreen = ({route}) => {
  const {date, division, notes, title} = route.params.event;

  return (
    <View>
      <Text>EditEventCardScreen</Text>
    </View>
  );
};

export default EditEventCardScreen;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from '@react-native-material/core';
import {green} from '../themes/colors';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    margin: 5,
  },
});

const CustomInput = ({value, label, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        label={label}
        onChangeText={onChangeText}
        color={green}
      />
    </View>
  );
};

export default CustomInput;

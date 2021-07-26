import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import Gap from '../Gap';

const TextInput = ({label, placeholder, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Gap height={5} />
      <TextInputRN
        style={styles.input}
        placeholder={placeholder}
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {fontSize: 14, marginLeft: 5, fontFamily: 'Poppins-Light', color: '#020202'},
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    borderWidth: 0,
    borderColor: '#000',
    borderRadius: 0, 
    fontFamily: 'Poppins-Medium',
    padding: 9.6,
    backgroundColor: '#fff', 
  },
});

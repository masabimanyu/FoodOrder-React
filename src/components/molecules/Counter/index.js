import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcMin, IcPlus} from '../../../assets';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value);
  }, []);

  const onCount = (type) => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 0) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCount('minus')}>
        <Text style={styles.Val}> - </Text>
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity onPress={() => onCount('plus')}>
        <Text style={styles.Val}> + </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  Val: {
    color: '#000',
    fontSize: 16,
    margin: 5,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
  },
  value: {
    backgroundColor: '#fff',
    fontSize: 15,
     margin: 5,
    fontFamily: 'Poppins-Medium',
    color: '#000',
    marginHorizontal: 8,
  },
});

import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import { LoadGif } from '../../../assets';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#fff" />
      <Text style={styles.text}>Just a moment, we will check you</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 14, color: '#fff', fontFamily: 'Poppins-Regular', marginTop: 15},
});

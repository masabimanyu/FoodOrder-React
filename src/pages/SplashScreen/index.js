import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {getData} from '../../utils';
import {Gap} from '../../components';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then((res) => {
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'Home'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Abimanyu</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
 container: {
    backgroundColor: '#00b3b3',
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 32, color: '#fff', fontFamily: 'Poppins-Medium'},
});

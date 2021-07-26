import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Gap height={30} />
      <Text style={styles.title}>Pembayaran Telah diterima</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Pesanan akan kami proses</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="Kembali"
          color="#000"
          onPress={() => navigation.replace('Home')}
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
  subTitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});

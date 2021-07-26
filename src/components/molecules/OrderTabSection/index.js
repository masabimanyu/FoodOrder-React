import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ItemListFood from '../ItemListFood';
import {getData, showMessage, storeData} from '../../../utils';

          
const OrderTabSection = (navigation) => {
  const [orderData, setOrderData] = useState({});
 
  useEffect(() => {
      updateorderData();
    });

  const updateorderData = () => {
    getData('orderData').then((res) => {
      setOrderData(res);
    });
  };

  return (
    <View>
     <ItemListFood
              key={orderData.order_id}
              name={orderData.payment_type}
              items={orderData.gross_amount}
              price={orderData.settlement_time}
            />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({
  tabView: {backgroundColor: 'white'},
  tabIndicator: {
    backgroundColor: '#020202',
    height: 3,
    width: '65%',
    marginLeft: '5%',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 3,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  tabStyle: {width: 'auto'},
  tabText: (focused) => ({
    fontFamily: 'Poppins-Medium',
    color: focused ? '#020202' : '#8D92A3',
  }),
  containerInProgress: {paddingTop: 8, paddingHorizontal: 4},
  containerPastOrders: {paddingTop: 8, paddingHorizontal: 34},
});

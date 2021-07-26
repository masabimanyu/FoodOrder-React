import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyOrder, Header, OrderTabSection, HomeProfile, ItemListFood, Gap} from '../../components';
import {getData} from '../../utils'

const Order = () => {
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
    <View style={styles.page}>
      {orderData.order_id < 1 ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <HomeProfile  
              title="Eatree"
              subTitle="Eat easier with Tree | Active Order" />
          <Gap height={30} />
          <View style={styles.tabContainer}>
            <ItemListFood
              key={orderData.order_id}
              Oid={orderData.order_id}
              name={orderData.payment_type}
              items={orderData.gross_amount}
              price={orderData.settlement_time}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#1a1a1a'},
  content: {flex: 1},
  tabContainer: {flex: 1, marginTop: -10, marginLeft: 15,},
});

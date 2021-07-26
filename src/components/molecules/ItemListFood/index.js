import React , {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import Number from '../Number';
import Counter from '../Counter';
import {Gap, Button} from '../../atoms';
import {IcMin, IcPlus} from '../../../assets';

const ItemListFood = ({name, items, price, Oid}) => {
  return (
      <View style={styles.content}>
      <ScrollView>
          <View style={styles.page}>
                <Text style={styles.title}>ID</Text>
                <View style={styles.row}>
                <Text style={styles.price}>{Oid}</Text>
                </View>
                <Text style={styles.title}>Metode Bayar</Text>
                <View style={styles.row}>
                <Text style={styles.price}>{name}</Text>
                </View>
                <Text style={styles.title}>Jumlah</Text>
                <View style={styles.row}>
                <Text style={styles.price}>IDR {items}</Text>
                </View>
            </View>
        </ScrollView>
        </View>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    paddingHorizontal: 6,
    marginLeft:10,
  },
  containerList: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  counter: {
    marginRight: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 0,
  },
  content: {flex: 1,
    flexDirection: 'column',
  },
  picturePath: {
 marginLeft: 10,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#fff',
  },
  price: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    color: '#fff',
  },
  items: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  date: {fontSize: 10, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  status: (status) => ({
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: status === 'CANCELLED' ? '#D9435E' : '#1ABC9C',
  }),
  row: {flexDirection: 'row', alignItems: 'center'},
  dot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#8D92A3',
    marginHorizontal: 4,
  },
  footer: {flexDirection: 'row', paddingVertical: 86, alignItems: 'center', backgroundColor:'#FFC700',},
  priceContainer: {flex: 1},
  button: {width: 163},
  labelTotal: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3', marginLeft: 15,},
  priceTotal: {fontSize: 18, fontFamily: 'Poppins-Regular', color: '#020202', marginLeft: 15,},
});
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {IcBackWhite} from '../../assets';
import {Button, Counter, Number, HomeProfile, Gap} from '../../components';
import {getData} from '../../utils';

const FoodDetail = ({navigation, route}) => {
  const {
    id,
    name,
    picturePath,
    description,
    ingredients,
    rate,
    price,
  } = route.params;
  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then((res) => {
      setUserProfile(res);
    });
  }, []);

  const onCounterChange = (value) => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const driver = 100;
    const promo = (90 / 100) * totalPrice;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driver + tax - promo;

    const data = {
      item: {
        id,
        name,
        price,
        picturePath,
      },
      transaction: {
        totalItem,
        totalPrice,
        driver,
        tax,
        promo,
        total,
      },
      userProfile,
    };

    navigation.navigate('OrderSummary', data);
  };

  return (
    <View style={styles.page}>
     <HomeProfile  
              title="Eatree"
              subTitle="Eat easier with Tree | Foods "
               onBack={() => navigation.goBack()} />
      <Image source={{uri: picturePath}} style={styles.cover} />
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{name}</Text>
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Gap height={20} />
          <Text style={styles.label}>Descriptions:</Text>
          <Text style={styles.desc}>{description}</Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>{ingredients}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Number number={totalItem * price} style={styles.priceTotal} />
          </View>
          <View style={styles.button}>
            <Button text="Pesan" onPress={onOrder} color="#1a1a1a" textColor="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#1a1a1a',},
  cover: {height: 250, margin: 8, borderRadius: 18, }, 
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 10,
    margin: 15,
    paddingHorizontal: 39,
    flex: 1,
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30,
    backgroundColor: '#fff',
  },
  mainContent: {flex: 1},
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1,
    marginTop: 20,
  },
  title: {fontSize: 18, fontFamily: 'Poppins-Medium', color: '#000'},
  desc: {
    fontSize: 12,
    justifyContent: 'space-between',
    fontFamily: 'Poppins-Light',
    color: '#000',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000',
    marginBottom: 2,
  },
  footer: {flexDirection: 'row', paddingVertical: 16, alignItems: 'center'},
  priceContainer: {flex: 1},
  button: {width: 163},
  labelTotal: {fontSize: 13, fontFamily: 'Poppins-Medium', color: '#000'},
  priceTotal: {fontSize: 15, fontFamily: 'Poppins-Light', color: '#000'},
});

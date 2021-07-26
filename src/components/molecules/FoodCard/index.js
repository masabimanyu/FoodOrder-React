import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const FoodCard = ({image, name, price, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.text}>{name}</Text>
            <Text style={styles.textBawah}>IDR. {price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#fff',
    elevation: 5,
    overflow: 'hidden',
    marginRight: 24,
  },
  image: {width: 150, height: 100, resizeMode: 'cover'},
  content: {padding: 10},
  text: {fontSize: 12, fontFamily: 'Poppins-Medium', color: '#020202'},
  textBawah: {fontSize: 10, fontFamily: 'Poppins-Regular', color: '#a6a6a6'},
});

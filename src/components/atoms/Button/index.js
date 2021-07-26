import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({text, color = '#0052cc', textColor= '#fff' , onPress, opacity}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (color, opacity) => ({
    backgroundColor: color,
    padding: 10,
    margin: 10,
    ShadowOpacity: opacity,
    shadowColor: color,
    elevation: 7,
    borderRadius: 15,
  }),
  text: (textColor) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: textColor,
    textAlign: 'center',
  }),
});

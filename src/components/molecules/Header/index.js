import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBack} from '../../../assets';

const Header = ({title, subTitle, onBack, Paddingtop,size, subSize, color, SubColor, PadVet}) => {
  return (
    <View style={styles.container(Paddingtop)}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title(size)}>{title}</Text>
        <Text style={styles.subTitle(subSize)}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (Paddingtop, PadVet) => ({
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
 }),
  title: (size, color)  => ({ 
    fontSize: size, 
    fontFamily: 'Poppins-Medium', 
    color: color,
  }),
  subTitle: (subSize, SubColor) => ({ fontSize: subSize, fontFamily: 'Poppins-Light', color: SubColor, paddingBottom: 5,}),
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
});

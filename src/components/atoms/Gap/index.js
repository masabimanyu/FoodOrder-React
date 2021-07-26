import React from 'react';
import {View} from 'react-native';

const Gap = ({width, height, color}) => {
  return <View style={{width: width, height: height, backgroundColor: color}} />;
};

export default Gap;

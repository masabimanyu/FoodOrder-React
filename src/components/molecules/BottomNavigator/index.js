import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {
  IcHomeOff,
  IcHomeOn,
  IcOrderOff,
  IcOrderOn,
  IcProfileOff,
  IcProfileOn,
} from '../../../assets';
{/* 
const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <IcHomeOn /> : <IcHomeOff />;
    case 'Order':
      return focus ? <IcOrderOn /> : <IcOrderOff />;
    case 'Profile':
      return focus ? <IcProfileOn /> : <IcProfileOff />;
    default:
      return <IcOrderOn />;
  }
};

  <Icon label={label} focus={isFocused} />
  
  */}

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{backgroundColor: '#1a1a1a'}}>
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
             <Text style={styles.text}>
             {label}
             </Text>
          </TouchableOpacity>
        );
      })}
    </View>
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 25,
        height: 50,
        borderRadius: 15,
        shadowColor: '#000',
        elevation: 5,
        justifyContent: 'space-between',
  },
  text: {
      textAlign: 'center',
      fontFamily: 'Poppins-Medium',
      padding: 15,
      marginLeft: 15,
      marginRight: 15,
      color: '#000',
      justifyContent: 'space-between',
  },
});


import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  FoodDetail,
  Home,
  Order,
  OrderSummary,
  SignIn,
  SplashScreen,
  SuccessOrder,
  Account,
} from '../pages';
import {BottomNavigator} from '../components';
import { fromLeft } from 'react-navigation-transitions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    activeTintColor: 'red',
    inactiveTintColor: 'black',
    indicatorStyle: { backgroundColor: 'red', height: '100%' },
    pressOpacity: 2,
  };

const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    }); 
  };


const App = () => {
    return(
        <Tab.Navigator tabBarOptions={{ indicatorStyle: { backgroundColor: 'red' } }} tabBar={(props) => <BottomNavigator {...props} />}>
                <Tab.Screen name="Home" component={Home}  />
                <Tab.Screen name="Active Order" component={Order}  />
                <Tab.Screen name="Account" component={Account} />
         </Tab.Navigator>
    );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={App}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FoodDetail"
        component={FoodDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessOrder"
        component={SuccessOrder}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
   
  );
  
};

export default Router;

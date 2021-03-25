/**
 * Root Stack Screen
 */
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Home/HomeScreen';
import DetailScreen from '../Home/DetailScreen';

const RootStack = createStackNavigator();

const RootStackScreen = (props) => {
  return (
    <RootStack.Navigator headerMode="none" initialRouteName="HomeScreen">
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="DetailScreen" component={DetailScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;

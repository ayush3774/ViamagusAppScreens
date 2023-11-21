

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from './ScreenOne';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

const YourStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenOne" component={ScreenOne} />
      <Stack.Screen name="AppNavigator" component={AppNavigator} />
     
    </Stack.Navigator>
  );
};

export default YourStackNavigator;

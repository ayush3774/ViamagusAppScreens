
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './AppNavigator';
import { Image } from 'react-native';
import ScreenOne from './Screens/ScreenOne';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenOne">
        
        <Stack.Screen
          name="ScreenOne"
          component={ScreenOne}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

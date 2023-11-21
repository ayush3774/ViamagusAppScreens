// AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LeagueScreen from './assets/LeagueScreen';
import ResearchScreen from './assets/ResearchScreen';
import LeaderboardScreen from './assets/LeaderboardScreen';
import ProfileScreen from './assets/ProfileScreen';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeScreenn from './assets/HomeScreenn';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'rgba(98, 49, 173, 1)', // Set the active color here
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenn}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color={color} />
          ),
          headerShown: false, // Hide the header
        }}
      />
      <Tab.Screen
        name="Leagues"
        component={LeagueScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="trophy" size={24} color={color} />
          ),
          headerShown: false, // Hide the header
        }}
      />
      <Tab.Screen
        name="Research"
        component={ResearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search" size={24} color={color} />
          ),
          headerShown: false, // Hide the header
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart-outline" size={24} color={color} />
          ),
          headerShown: false, // Hide the header
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
          headerShown: false, // Hide the header
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;


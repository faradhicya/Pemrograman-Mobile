import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import About from './About';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#2196F3',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: () => false,
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />

        <Tab.Screen
          name="About"
          component={About}
          options={{ title: 'About' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
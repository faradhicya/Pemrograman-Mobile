import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Home';
import About from './About';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
        drawerStyle: {
      width: 200,
    },
  }}
>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />

        <Drawer.Screen
          name="About"
          component={About}
          options={{ title: 'About' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
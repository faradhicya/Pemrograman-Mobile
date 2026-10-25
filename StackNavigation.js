import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import About from './About';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Halaman Home' }}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={{ title: 'Halaman About' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
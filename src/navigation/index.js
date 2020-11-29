import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Main, Write, List, Spend, Profile } from '../pages'



const Tab = createBottomTabNavigator();
function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="홈" component={Main} />
      <Tab.Screen name="내역" component={List} />
      <Tab.Screen name="지출" component={Spend} />
      <Tab.Screen name="프로필" component={Profile} />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={MainTab} />
        <Stack.Screen name="Write" component={Write} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Svg, {Path} from 'react-native-svg';

import {Home, Scan} from '../screens';
import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            <Image
              source={icons.more}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                backgroundColor: focused ? COLORS.red : COLORS.secondary,
              }}
            />;
          },
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({focused}) => {
            <Image
              source={icons.scan}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.white : COLORS.darkgray,
              }}
            />;
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            <Image
              source={icons.user}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.white : COLORS.secondary,
              }}
            />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

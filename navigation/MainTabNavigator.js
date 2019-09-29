import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import CalendarScreen from '../screens/CalendarScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreenReference from '../screens/HomeScreen-reference';
import Colors from '../constants/Colors';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeReferenceStack = createStackNavigator(
  {
    HomeReference: HomeScreenReference,
  },
  config
);
HomeReferenceStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `${focused ? 'ios-information-circle' : 'ios-information-circle'}`
          : 'md-information-circle'
      }
    />
  ),
};
HomeReferenceStack.path = '';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Tasks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `${focused ? 'ios-happy' : 'ios-sad'}`
          : 'md-sad'
      }
    />
  ),
};
HomeStack.path = '';

// originally links stack
const CalendarStack = createStackNavigator(
  {
    Calendar: CalendarScreen,
  },
  config
);
CalendarStack.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'md-calendar' : 'md-calendar'} />
  ),
};
CalendarStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'ios-person'} />
  ),
};
SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    // HomeReferenceStack,
    CalendarStack,
    SettingsStack,
  },
  {
    headerMode: 'none',
    tabBarOptions: {
      activeTintColor: Colors.tabTextSelected,
      inactiveTintColor: Colors.tabTextDefault,
      style: {
        backgroundColor: 'black',
        borderTopColor: 'black',
      },
      labelStyle: {
        fontSize: 13,

      }
    },
  }
);

tabNavigator.path = '';

export default tabNavigator;

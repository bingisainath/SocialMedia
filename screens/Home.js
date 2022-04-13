import { View, Text,SafeAreaView } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './Feed';
import Logout from './Logout';
import Profile from './Profile';
import AweIcon from 'react-native-vector-icons/FontAwesome5';
import OctIcons from 'react-native-vector-icons/Octicons';
import AntIcons from 'react-native-vector-icons/AntDesign';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = (props) => {

  const {route} = props;

  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'feed-person' : 'feed-person';
              return <OctIcons name={iconName} size={size} color={color}/>;
            } else if (route.name === 'Logout') {
              iconName = focused ? 'logout' : 'logout';
              return <AntIcons name={iconName} size={size} color={color}/>;
            } 

            return <AweIcon name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor: '#2798d9',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Feed" component={Feed} options={{headerTitle:''}}/>
        <Tab.Screen name="Profile" component={Profile} options={{headerTitle:''}} email='email' password='password'/>
        <Tab.Screen name="Logout" component={Logout} options={{headerTitle:''}}/>
      </Tab.Navigator>
    </>
  )
}

export default Home
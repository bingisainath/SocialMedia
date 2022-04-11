import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from './Feed';
import Logout from './Logout';
import Profile from './Profile';
import AweIcon from 'react-native-vector-icons/FontAwesome5';
import OctIcons from 'react-native-vector-icons/Octicons';
import AntIcons from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const Home = (props) => {
  return (
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

            // You can return any component that you like here!
            return <AweIcon name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Logout" component={Logout} />
      </Tab.Navigator>
  )
}

export default Home
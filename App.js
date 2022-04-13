import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LandingScreen from './screens/LandingScreen'
import SignUpScreen from './screens/SignupScreen'
import SignInScreen from './screens/SigninScreen';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {

  return(
    <NavigationContainer >
      <Stack.Navigator>
          <Stack.Screen name="LandingScreen" component={LandingScreen} options={{headerShown:false}}/>
          <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerTitle:''}}/>
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerTitle:''}}/>
          <Stack.Screen name="Home" component={Home} options={{headerTitle:''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
const Stack = createNativeStackNavigator();
const AuthenticationScreens = props => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} initialParams={{...props}} />
  </Stack.Navigator>
);
const HomeScreens = props => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} initialParams={{...props}} />
  </Stack.Navigator>
);
function App() {
  const [isUserLoggedIn, setUserLogin] = useState(false);
  return (
    <NavigationContainer>
      {!isUserLoggedIn ? (
        <AuthenticationScreens setUserLogin={() => setUserLogin(true)} />
      ) : (
        <HomeScreens setUserLogin={() => setUserLogin(true)} />
      )}
    </NavigationContainer>
  );
}
export default App;

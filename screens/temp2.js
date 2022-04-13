import React from 'react';
import { View, Text, Button } from 'react-native';
const Login = (props) => {
const { route } = props;
return (
<View>
<Text>
This is a login screen
</Text>
<Button title="Login" color="green" onPress={() => route.params.setUserLogin()} />
</View>
)
}
export default Login;
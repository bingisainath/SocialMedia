import { View, Text, Button,StyleSheet } from 'react-native'
import React from 'react'
import LandingScreen from './LandingScreen'
import { createSwitchNavigator } from 'react-navigation';
import RoundedButton from '../components/RoundedButton';


const Logout = (props) => {

  const {navigation} = props

  return (
    <View >
      <Text>Logout</Text>
      <Button title="logout" onPress={()=>navigation.navigate(LandingScreen)}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    border:1,
    borderColor:"black"
  },
  loginButtonStyle: {
    backgroundColor: 'black',
    marginLeft:20,
  },
  TextColorStyle: {
    color: 'white'
  }
})

export default Logout;
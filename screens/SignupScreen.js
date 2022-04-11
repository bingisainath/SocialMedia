import React, { useState } from 'react'
import { View, StyleSheet, Text, Button, Dimensions,Alert, SafeAreaView } from 'react-native'
import EmailTextField from '../components/EmailTextField'
import PasswordTextField from '../components/PasswordTextField'
import RoundedTextField from '../components/RoundedTextField'



const { widht, height } = Dimensions.get('window')

const SignupScreen = ( props ) => {
    
    const {navigation} = props;

    const navigateSignIn = () => {
        navigation.navigate('SignInScreen')
    }

    return (
        <SafeAreaView>
            <View>
                <Text style = {styles.titleText} >Sign UP</Text>
                <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                    <RoundedTextField placeHolder = "Full Name"/>
                    <EmailTextField placeholder = "EmailAddress"/>
                    <RoundedTextField placeHolder = "Phone Number" />
                    <PasswordTextField placeHolder = "Password"/>
                    <Button buttonStyle = {styles.loginButtonStyle} title= "SignUP" textStyle = {styles.signInTextColorStyle} onPress={ ()=>Alert.alert('success')}/>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 30,
    marginBottom: 30,
    marginTop: 20
},

loginButtonStyle: {
    backgroundColor: 'black',
},
signInTextColorStyle: {
    color: 'white'
}

})
export default SignupScreen
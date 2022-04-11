import React, {useState} from 'react'
import { View, StyleSheet, Text, Button, SafeAreaView, Image, Dimensions,Alert } from 'react-native'
import RoundedButton from '../components/RoundedButton';

const {width, height} = Dimensions.get('window')
const LandingScreen = (props) =>{

    const {navigation} = props;

    const navigateSignIn = () => {
        navigation.navigate('SignInScreen')
    }

    const navigateSignUp = () => {
        navigation.navigate('SignUpScreen')
    }

    return(
        <SafeAreaView options={{headerShown:false}}>
            <View style = {styles.ViewStyle}>
                <Image style = {styles.ImageStyle} source={{uri: 'https://reactjs.org/logo-og.png'}}></Image>
                <Text style = {styles.WelcomeStyle} > Welcome</Text>
            </View>
                <RoundedButton  onPress = {navigateSignIn}   buttonStyle = {styles.LoginButtonStyle} textStyle = {styles.signinTextColorStyle} title = "Login" ></RoundedButton >
                <RoundedButton onPress = {navigateSignUp}  buttonStyle = {styles.SignupButtonSytle} textStyle = {styles.signupTextColorStyle} title = "Sign up" ></RoundedButton>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ImageStyle: {
        width: width / 1.5,
        height: width / 1.5
        
    },

    ViewStyle : {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    WelcomeStyle: {
        marginHorizontal: 20,
        marginTop: 50,
        marginBottom: 30,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    LoginButtonStyle: {
        backgroundColor:'black'
    },
    SignupButtonSytle: {
        backgroundColor: 'lightblue'
    },
    signinTextColorStyle:{
        color:'white'
    },
    signupTextColorStyle:{
        color: 'black'
    }
    
    


    
})

export default LandingScreen
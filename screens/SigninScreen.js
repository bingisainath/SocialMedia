import React, {userState, useState} from 'react'
import { View, StyleSheet, Text, Button, SafeAreaView,Alert } from 'react-native'
import EmailTextField from '../components/EmailTextField'
import PasswordTextField from '../components/PasswordTextField'
import RoundedButton from '../components/RoundedButton';

const SignInScreen = (props) =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {navigation} = props

    const navigate = () => {
        navigation.navigate('Home')
    }

    return(
        <SafeAreaView>
            <View>
                <Text style = {styles.titleText}>Sign In</Text>
                <View style = {{justifyContent: 'center', alignItems: 'center'}} >
                    <EmailTextField term = {email} placeholder = "Email Address"
                    onChangeText = {newEmail => setEmail(newEmail)}/>
                    <PasswordTextField 
                    term = {password}
                    placeHolder = "Password"
                    onChangeText = {newPassword => setPassword(newPassword)}/>
                </View>
            </View>
            <RoundedButton buttonStyle = {styles.loginButtonStyle} textStyle = {styles.signInTextColorStyle} title = "Login" onPress={navigate} initialParams={{...props}} ></RoundedButton>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titleText : {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 30,
        marginBottom: 30,
        marginTop: 40,
    },
    loginButtonStyle: {
        backgroundColor: 'black',
        marginLeft:90,
    },
    signInTextColorStyle:{
        color: 'white'
    }
})

export default SignInScreen
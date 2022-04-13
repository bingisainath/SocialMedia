import React, { useState } from 'react'
import { View, StyleSheet, Text, Button, Dimensions,Alert, SafeAreaView } from 'react-native'
import EmailTextField from '../components/EmailTextField'
import PasswordTextField from '../components/PasswordTextField'
import RoundedTextField from '../components/RoundedTextField'
import RoundedButton from '../components/RoundedButton'


const { widht, height } = Dimensions.get('window')

const SignupScreen = ( props ) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    
    const {navigation} = props;

    const navigateSignIn = () => {
        navigation.navigate('SignInScreen')
    }

    return (
        <SafeAreaView>
            <View>
                <Text style = {styles.titleText} >Sign Up</Text>
                <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                    <RoundedTextField term={name} placeHolder = "Full Name" onTermChange = {newName => setName(newName)}/>
                    <EmailTextField term={email} placeholder = "EmailAddress" onTermChange = {newEmail => setEmail(newEmail)}/>
                    <RoundedTextField term={phone} placeHolder = "Phone Number" onTermChange = {newPhone => setPhone(newPhone)} />
                    <PasswordTextField term={password} placeHolder = "Password" onTermChange = {newPassword => setPassword(newPassword)}/>
                    <RoundedButton buttonStyle = {styles.SignUpButtonStyle} title= "SignUP" textStyle = {styles.signUpTextColorStyle} onPress={() => { Alert.alert(`Email: ${email}
Name: ${name}`)}}/>
                    <RoundedButton buttonStyle = {styles.BackButtonStyle} title= "Back" textStyle = {styles.BackTextColorStyle} onPress={navigateSignIn}/>
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

SignUpButtonStyle: {
    backgroundColor: 'black',
    marginRight: 30,
    
},
signUpTextColorStyle: {
    color: 'white'
},
BackButtonStyle:{
    backgroundColor: 'lightblue',
    marginRight: 30,
},
BackTextColorStyle:{
    color:'black'
},


})
export default SignupScreen
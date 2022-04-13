import { View, Text } from 'react-native'
import React from 'react'
import EmailTextField from '../components/EmailTextField'

const Profile = (props) => {
  const {email,password} = props;
  return (
    <View>
      <Text>{`email ${email}`}</Text>
    </View>
  )
}

export default Profile
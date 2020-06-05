import React from 'react'
import { View, Text, Button } from 'react-native'

const SignIn = ({navigation}) => {
   return (
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}} >
         <Text style={{fontSize:30, fontWeight: 'bold'}} >Sign In Component</Text>
         <Button title="SignUp" onPress={() => navigation.navigate('SignUp') } /> 
      </View>
   )
}

export default SignIn

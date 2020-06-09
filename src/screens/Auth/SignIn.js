import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { 
   Container, Header, Content, Form,
   Item, Input, Label, Button, Text
} from 'native-base';
import axios from '../../config/api'
import { login } from '../../redux/actions'
import { btn, bg, sign, txtColor } from '../../styles'

const SignIn = ({navigation}) => {

   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

   const dispatch = useDispatch()

   const onSignIn = () => {
      const data = {username, password}
      axios.post('/user/login', data)
         // res.data = {username, token}
         .then(res => {
            // hasil = {type: 'LOGIN', payload: {username, token} }
            const hasil = login(res.data)
            dispatch(hasil)
         })
         .catch(err => {
            if(err.response.data.message){
               Alert.alert("", `${err.response.data.message}`)
            } else {
               console.log({err})
               Alert.alert("Snap!", "Something is wrong, check console")
            }
            
         })

   }

   return (
      <Container>
        <Content>
           <Text style={[sign.title]} >Sign In</Text>
            <Form>
            <Item stackedLabel>
               <Label>Username</Label>
               <Input value={username} onChangeText={(text) => setUsername(text)} />
            </Item>
            <Item stackedLabel last>
               <Label>Password</Label>
               <Input secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
            </Item>
            </Form>
            <Button block style={[btn, bg.purple]}  onPress={onSignIn} >
               <Text style={[txtColor.white]}  >Sign In</Text>
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
               <Text style={[sign.link]}>Don't have an account ?</Text>
            </TouchableOpacity>
         </Content>
      </Container>
   )
}

export default SignIn

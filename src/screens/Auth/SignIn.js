import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { TouchableOpacity, StyleSheet, Text, Alert } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label} from 'native-base';
import axios from '../../config/api'
import { login } from '../../redux/actions'

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
           <Text style={styles.text} >Sign In</Text>
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
            <TouchableOpacity style={styles.signBtn} onPress={onSignIn} >
               <Text style={styles.signText} >Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
               <Text style={styles.signUpText}>Don't have an account ?</Text>
            </TouchableOpacity>
         </Content>
      </Container>
   )
}

const styles = StyleSheet.create({
   text: {
      marginTop: 35,
      fontSize: 25,
      textAlign: 'center'
   },
   signBtn : {
      backgroundColor: 'purple',
      padding: 9,
      margin: 5,
      borderRadius: 5
   },
   signText: {
      fontSize: 19,
      color: 'white',
      textAlign: 'center'
   },
   signUpText: {
      marginTop: 5,
      fontSize: 17,
      color: 'blue',
      textAlign: 'center'
   }
})


export default SignIn

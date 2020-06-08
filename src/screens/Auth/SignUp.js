import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text} from 'native-base';
import axios from '../../config/api'

const SignOut = ({navigation}) => {

   const [username, setUsername] = useState('')
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const dispatch = useDispatch()

   const onSignUp = () => {
      const data = {username, name, email, password}
      axios.post('/user', data)
         .then(res => console.log({res}))
         .catch(err => console.log({err}))
   }

   return (
      <Container>
        <Content>
           <Text style={styles.text} >Sign Up</Text>
            <Form>
            <Item stackedLabel>
               <Label>Username</Label>
               <Input value={username} onChangeText={(text) => setUsername(text)} />
            </Item>
            <Item stackedLabel>
               <Label>Name</Label>
               <Input value={name} onChangeText={(text) => setName(text)} />
            </Item>
            <Item stackedLabel>
               <Label>Email</Label>
               <Input value={email} onChangeText={(text) => setEmail(text)} />
            </Item>
            <Item stackedLabel last>
               <Label>Password</Label>
               <Input secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
            </Item>
            </Form>
            <Button block style={styles.signBtn}  onPress={onSignUp} >
               <Text>Sign Up</Text>
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')} >
               <Text style={styles.signUpText}>Already have an acoount ?</Text>
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


export default SignOut

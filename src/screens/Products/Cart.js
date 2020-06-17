import React, {useState, useCallback} from 'react'
import { useFocusEffect, NavigationHelpersContext } from '@react-navigation/native'
import { View, Alert } from 'react-native'
import { useSelector } from 'react-redux'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import axios from '../../config/api'

export default function Cart({navigation}) {

   const token = useSelector(state => state.auth.token)
   const [carts, setCarts] = useState([])

   useFocusEffect(
      useCallback(() => {
         const config = {headers: {Authorization: token}}
         axios.get('/carts', config)
            .then(res => setCarts(res.data))
            .catch(err => console.log({err}))
      }, [])
   )

   const onCheckout = () => {
      let total_amount = 0

      for(let cart of carts ){
         // t_a = 70
         total_amount += cart.total_amount
      }

      const config = {headers : {Authorization : token}}
      const data = {
         total_amount,
         carts // array dua dimensi
      }
      axios.post('/transaction', data, config)
            .then(res => console.log(res.data))
            .catch(err => console.log({err}))
   }

   return (
      <Container>
        <Content>
          <List>
            {
               carts.map(cart => (
                  <ListItem key={cart.id} thumbnail>
                     <Left>
                        <Thumbnail square source={{
                           uri : `http://localhost:2020/product/picture/${cart.picture}?unq=${new Date()}`
                        }} />
                     </Left>
                     <Body>
                        <Text> {cart.name} </Text>
                        <Text style={{fontWeight: "bold", color : "purple"}} >$ {cart.total_amount} </Text>
                     </Body>
                     <Right>
                        <Button style={{borderWidth: 1, borderRadius: 3, borderColor: "red", backgroundColor: "white"}}  onPress={() => Alert.alert("Delete") } transparent>
                           <Text style={{ color: "red" }} >Delete</Text>
                        </Button>
                     </Right>
                  </ListItem>
               ))
            }
          </List>
          <Button style={{width: "60%", height: 35, alignSelf: "center",  borderWidth: 1, borderRadius: 3, borderColor: "green", backgroundColor: "white"}}  onPress={ onCheckout } transparent>
            <Text style={{ color: "green", width: '100%', textAlign: "center" }} >Checkout</Text>
         </Button>
        </Content>
      </Container>
   )
}

import React, {useState, useCallback} from 'react'
import { View, Alert } from 'react-native'
import { useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import axios from '../../config/api'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base'

export default function TransactionSell() {

   const token = useSelector(state => state.auth.token)
   const [transactions, setTransactions] = useState([])

   useFocusEffect(
      useCallback(() => {
         const config = {headers:{Authorization: token}}
         axios.get('/transactions/sell', config)
            .then(res => setTransactions(res.data))
            .catch(res => console.log({err}))
      })
   )

   const renderTrx = () => {
      if(!transactions.length){
         return <Text style={{width: '100%', textAlign: 'center', fontWeight: "bold", marginTop: 20}} >No Transactions</Text>
      }

      return transactions.map(trx => (
         <ListItem key={trx.id} thumbnail>
            <Body>
               <Text> Total Amount :  {trx.total_amount} </Text>
            </Body>
            <Right>
               <Button onPress={() => Alert.alert("Belum ada halaman detail") } transparent>
                  <Text>Detail</Text>
               </Button>
            </Right>
         </ListItem>
      ))
   }

   return (
      <Container>
        <Content>
          <List>
            {
               renderTrx()
            }
          </List>
        </Content>
      </Container>
   )
}
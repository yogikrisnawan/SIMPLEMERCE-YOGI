import React, {useState, useCallback} from 'react'
import { useFocusEffect, NavigationHelpersContext } from '@react-navigation/native'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import axios from '../../config/api'

export default function ListProduct({navigation}) {

   const token = useSelector(state => state.auth.token)
   const [products, setProducts] = useState([])

   useFocusEffect(
      useCallback(() => {
         const config = {headers: {Authorization: token}}
         axios.get('/products/me', config)
            .then(res => setProducts(res.data))
            .catch(err => console.log({err}))
      }, [])
   )

   return (
      <Container>
        <Content>
          <List>
            {
               products.map(product => (
                  <ListItem key={product.id} thumbnail>
                     <Left>
                        <Thumbnail square source={{
                           uri : `http://localhost:2020/product/picture/${product.picture}?unq=${new Date()}`
                        }} />
                     </Left>
                     <Body>
                        <Text> {product.name} </Text>
                        <Text note numberOfLines={1}> {product.description} </Text>
                     </Body>
                     <Right>
                        <Button onPress={() => navigation.navigate("DetailProduct", {id: product.id}) } transparent>
                           <Text>View</Text>
                        </Button>
                     </Right>
                  </ListItem>
               ))
            }
          </List>
        </Content>
      </Container>
   )
}

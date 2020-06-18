import React, {useCallback, useState} from 'react'
import { useSelector }  from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import axios from '../../config/api'
import { View, FlatList, TouchableOpacity, Image, Alert } from 'react-native'
import { 
   Container, Header, Content, Card, CardItem, Thumbnail,
   Text, Button, Icon, Left, Body, Right
} from 'native-base';

const FeedProduct = ({item,navigation}) => (
   
         <Card >
            <CardItem>
            <Left>
               <Thumbnail source={{
                  uri: `http://localhost:2020/user/avatar/${item.usrAvatar}?unq=${new Date()}`}} />
               <Body>
                  <Text>{item.usrName} </Text>
                  <Text note>Jakarta</Text>
               </Body>
            </Left>
            </CardItem>
            <CardItem cardBody>
               <Image source={{
                  uri: `http://localhost:2020/product/picture/${item.picture}?unq=${new Date()}`}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
               <View>
                  <Text
                  style={{fontSize: 20, fontWeight: 'bold'}}
                  >{item.name} </Text>
                  <Text
                     style={{fontSize: 17, color: 'purple', fontWeight: 'bold'}}
                  >$ {item.price} </Text>
               </View>
            </CardItem>
         </Card>
   
)

const Feed = ({navigation}) => {

   const token = useSelector(state => state.auth.token)
   const [products, setproducts] = useState(null)

   useFocusEffect(
      useCallback(() => {
         const config = {headers: {Authorization : token}}
         axios.get('/products',  config)
            .then(res => setproducts(res.data))
            .catch(err => console.log({err}))
      }, [])
   )

   
   return (
      <View >
         <FlatList
            data={products}
            renderItem={({item}) => (
               <TouchableOpacity onPress={() => navigation.navigate("FeedDetail", {id : item.id})} >
                  <FeedProduct item={item} navigation={navigation} />
               </TouchableOpacity>
            )}
            keyExtractor={item =>  item.id.toString()}
         />
      </View>
   )
}

export default Feed

import React, {useState, useCallback} from 'react'
import { View, Image, Alert } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import {
   Button, Text, Container, Header, Content, ListItem,
   Card, CardItem, Thumbnail, Left, Body, Right
} from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from '../../config/api'
import { btn, bg } from '../../styles'

const Account = ({navigation}) => {

   const token = useSelector(state => state.auth.token)
   const dispatch = useDispatch()
   const [avatarlink, setAvatarlink] = useState(null)
   const [user, setUser] = useState({})

   useFocusEffect(
      useCallback(() => {
         const config = {headers : {Authorization : token}}
         axios.get('/user', config)
            .then(res => {
               // res.data = {user, avatarlink}
               setUser(res.data.user)
               setAvatarlink(`${res.data.avatarlink}?unq=${new Date()}`)
              //  http://localhost:2020/user/avatar/rochafi-avatar.png?unq=eRtyuop >> nord vpn
              //  http://localhost:2020/user/avatar/rochafi-avatar.png?unq=plOishqwf >> gambar kucing

            })
            .catch(err =>console.log({err}))
      }, [])
   )


   const onSignOut = () => {

      // hapus data async storage
      AsyncStorage.removeItem("user")
      .then(res => {
         // hapus data di redux state
         dispatch({type: 'LOGOUT'})
      })
      
   }

   return (
      <Container style={{backgroundColor: '#e0d7e2' }} >
        <Content>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: avatarlink}} />
                <Body>
                  <Text>{user.name}</Text>
                  <Text note>{user.email}</Text>
                </Body>
              </Left>
               <Icon size={25} name="dots-horizontal" onPress={() => navigation.openDrawer()} />
            </CardItem>
            <Button block style={[btn, bg.purplesoft, {height: 25}]} onPress={() => navigation.navigate('EditAccount')} >
               <Text>Edit Profile</Text>
            </Button>
          </Card>

          <Card style={{marginTop: 20}} >
          <ListItem icon onPress={() => navigation.navigate("ListProduct")}>
            <Left>
              <Button style={{ backgroundColor: "#7bb9fc" }}>
                <Icon size={23} name="view-list" />
              </Button>
            </Left>
            <Body>
              <Text>Products</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={() => navigation.navigate('TransactionsTabs')}>
            <Left>
              <Button style={{ backgroundColor: "#8af96b" }}>
                <Icon size={23} name="swap-horizontal" />
              </Button>
            </Left>
            <Body>
              <Text>Transaction</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={() => navigation.navigate("Cart")}>
            <Left>
              <Button style={{ backgroundColor: "#f3fc7b" }}>
                <Icon size={23} name="cart-outline" />
              </Button>
            </Left>
            <Body>
              <Text>Cart</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={onSignOut}>
            <Left>
              <Button style={{ backgroundColor: "#f96b6d" }}>
                <Icon size={23} name="logout" />
              </Button>
            </Left>
            <Body>
              <Text>Sign Out</Text>
            </Body>
          </ListItem>
          </Card>

        </Content>
      </Container>
   )
}

export default Account
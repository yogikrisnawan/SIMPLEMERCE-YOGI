import React, {useState, useCallback} from 'react'
import { View, Image } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import {Button, Text} from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import axios from '../../config/api'

const Account = ({navigation}) => {

   const token = useSelector(state => state.auth.token)
   const dispatch = useDispatch()
   const [avatarlink, setAvatarlink] = useState(null)
   const [user, setUser] = useState(null)

   useFocusEffect(
      useCallback(() => {
         const config = {headers : {Authorization : token}}
         axios.get('/user', config)
            .then(res => {
               // res.data = {user, avatarlink}
               setUser(res.data.user)
               setAvatarlink(res.data.avatarlink)

            })
            .catch(err =>console.log({err}))
      })
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
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}} >
         <Text style={{fontSize:30, fontWeight: 'bold'}} >Account Component</Text>
         <View >
            <Image style={{width: 300, height: 300}} source={{uri : avatarlink}} />
         </View>
         <Button block onPress={onSignOut} >
            <Text>Sign Out</Text>
         </Button>
      </View>
   )
}

export default Account
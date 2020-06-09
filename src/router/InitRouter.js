import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import { Spinner } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage';
import { login }  from '../redux/actions'

import AuthRouter from './AuthRouter'
import MainRouter from './MainRouter'

export default function index() {

   const [loading, setLoading] = useState(true)
   // pengambilan data ke redux, jika data berubah, maka akan re render
   const username = useSelector((state) => state.auth.username)
   const dispatch = useDispatch()

   useEffect(() => {
      // - Cek di asyncstorage, apakah ada data user login disana ?
      AsyncStorage.getItem("user")
         .then(res => {
            // data yang disimpan adalah string, ubah ke object dengan parse
            const data = JSON.parse(res)

            // jika terdapat data user yang login
            if(data) {
               // lakukan login ulang untuk data user tersebut, untuk disimpan ke redux dan storage
               dispatch(login(data))
            }

            setLoading(false)
         })
         .catch(err => console.log({err}))
   }, [])

   if(loading) {
      return (
         <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
            <Spinner color="purple" />
         </View>
      )
   }

   // jika sudah login akan membuka app utama (MainRouter)
   // jika belum akan membuka halaman signin (AuthRouter)
   return username ? <MainRouter/> : <AuthRouter/>
}


/*
   - Cek di asyncstorage, apakah ada data user login disana ?
      - jika ada, ambil username dan tokennya
      - simpan username dan token ke redux state

   - useEffect, useSelector, useDispatch

   - optional
      - Tampilkan efek loading spinner saat 
      - import { Spinner } from 'native-base'
*/

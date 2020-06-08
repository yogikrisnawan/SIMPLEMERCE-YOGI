import React from 'react'
import { View, Text } from 'react-native'
import {useSelector} from 'react-redux'

import AuthRouter from './AuthRouter'
import MainRouter from './MainRouter'

export default function index() {

   const username = useSelector((state) => state.auth.username)

   // apakah sudah login ?
   if(username){
      // jika sudah login
      return <MainRouter/>
   } else {
      // jika belum login
      return <AuthRouter/>
   }
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

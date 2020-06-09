import React, {useEffect, useCallback} from 'react'
import {useFocusEffect} from '@react-navigation/native'
import { View, Text } from 'react-native'

const UseFocusEffect = () => {

   // fun fact
   // kita bisa menggunakan react hooks tanpa harus import funciton hook terlebih dahulu
   // kita bisa memanggilnya dari object React.
   const [products, setproducts] = React.useState(null)

   // useFocusEffect akan selalu dijalankan ketika kita membuka screen ini
   // agar tidak terus menerus dijalankan, kita harus menggunakan useCallback
   // useCallback menerima function yang akan kita jalankan dan array kosong agar hanya sekali running

   // useEffect bekerja sedikit berbeda pada mobile ketimbang ketika digunakan di web
   useFocusEffect(
      useCallback(() => {
         console.log("UseFocusEffect COMPONENT")
         // axios ...
         // then
         setproducts([{film: "Daredevil"},{film: "Quite Place"},{film: "Doom"},])
      }, [])
   )

   
   return (
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}} >
         <Text style={{fontSize:30, fontWeight: 'bold'}} >UseFocusEffect Component</Text>
      </View>
   )
}

export default UseFocusEffect

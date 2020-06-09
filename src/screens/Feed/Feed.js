import React, {useState, useEffect, useCallback} from 'react'
import {useFocusEffect} from '@react-navigation/native'
import { View, Text } from 'react-native'

const Feed = () => {

   const [products, setproducts] = useState(null)

   useFocusEffect(
      useCallback(() => {
         console.log("FEED COMPONENT")
         // axios ...
         // then
         setproducts([{film: "Daredevil"},{film: "Quite Place"},{film: "Doom"},])
      }, [])
   )

   
   return (
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}} >
         <Text style={{fontSize:30, fontWeight: 'bold'}} >Feed Component</Text>
      </View>
   )
}

export default Feed

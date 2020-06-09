import React, {useState, useCallback, useEffect} from 'react'
import {useFocusEffect} from '@react-navigation/native'
import { View, Text } from 'react-native'

const Add = () => {
   
   return (
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}} >
         <Text style={{fontSize:30, fontWeight: 'bold'}} >Add Component</Text>
      </View>
   )
}

export default Add

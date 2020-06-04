import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

// Router
import MainRouter from './router/MainRouter';

const App = () => {
   return (
      // Semua navigasi harus di wrap oleh NavigationContainer
      <NavigationContainer>
         <MainRouter/>
      </NavigationContainer>
   )
}

export default App

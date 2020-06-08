import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

// Redux
import { Provider } from 'react-redux';
import store from './redux'

// Router
import InitRouter from './router/InitRouter'


const App = () => {
   return (
      <Provider store={store} >
         <NavigationContainer>
            <InitRouter/>
         </NavigationContainer>
      </Provider>
   )
}

export default App

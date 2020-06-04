import React from 'react'
import { View, Text } from 'react-native'

// tab navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const MainTab = createBottomTabNavigator()

// screens
import Feed from '../screens/Feed/Feed'
import Add from '../screens/Add/Add'
import Account from '../screens/Account/Account'

const MainRouter = () => {
   return (
      <MainTab.Navigator>
         <MainTab.Screen name="Feed" component={Feed} />
         <MainTab.Screen name="Add" component={Add} />
         <MainTab.Screen name="Account" component={Account} />
      </MainTab.Navigator>
   )
}

export default MainRouter

import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// tab navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const MainTab = createBottomTabNavigator()

// screens
import Feed from '../screens/Feed/Feed'
import Add from '../screens/Add/Add'
import AccountTab from '../screens/Account/AccountTab'

const MainRouter = () => {
   return (
      // container screen
      // show label false untuk menghilangkan tulisan pada tab, tersisa hanya icon saja.
      <MainTab.Navigator tabBarOptions={{showLabel: false}} initialRouteName="Feed" >
         {/* urutan penulisan mempengaruhi */}
         <MainTab.Screen name="Feed" component={Feed}
            // Dapat mengganti icon tab menggunakan propery options
            options={{
               // tanBarIcon menerima function yang harus me return sebuah component
               // dalam case ini adalah component Icon dari rect-vector-icons
               // untuk mengetahui secara pasti kode icon yang dapat digunakan dapat melihat ke salah satu file json yang ada di alamat berikut:
               // alamat ./node_modules/react-native-vector-icons/gylphmaps

               // focused akan bernilai true jika kita sedang membuka screen ini
               tabBarIcon: ({focused}) => {
                  // jika focused bernilai true, iconName = 'animation'
                  // jika focused bernilai false, iconName = 'animation-outline'
                  const iconName = focused ? 'animation' : 'animation-outline'
                  return <Icon name={iconName} size={27} />
               }
            }}
         />
         <MainTab.Screen name="Add" component={Add}
            options={{
               tabBarIcon: ({focused}) => {
                  const iconName = focused ? 'tooltip-plus' : 'tooltip-plus-outline'
                  return <Icon name={iconName} size={27} />
               }
            }}
         />
         <MainTab.Screen name="AccountTab" component={AccountTab}
            options={{
               tabBarIcon: ({focused}) => {
                  if(focused) {
                     return <Icon name="account-box" size={27} />
                  } else {
                     return <Icon name="account-box-outline" size={27} />
                  }
               }
            }}
         />
      </MainTab.Navigator>
   )
}

export default MainRouter

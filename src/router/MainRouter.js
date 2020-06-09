import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// tab navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const MainTab = createBottomTabNavigator()

// screens
import Feed from '../screens/Feed/Feed'
import Add from '../screens/Add/Add'
import Account from '../screens/Account/Account'

const MainRouter = () => {
   return (
      // container screen
      // show label false untuk menghilangkan tulisan pada tab, tersisa hanya icon saja.
      <MainTab.Navigator tabBarOptions={{showLabel: false}} >
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
                  const iconName = focused ? 'animation' : 'animation-outline'
                  return <Icon name={iconName} size={27} />
               }
            }}
         />
         <MainTab.Screen name="Add" component={Add}
            options={{
               tabBarIcon: ({focused}) => {
                  if(focused) {
                     return <Icon name="tooltip-plus" size={27} />
                  } else {
                     return <Icon name="tooltip-plus-outline" size={27} />
                  }
               }
            }}
         />
         <MainTab.Screen name="Account" component={Account}
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

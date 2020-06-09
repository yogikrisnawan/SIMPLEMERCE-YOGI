import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Account from './Account'
import About from './About'

export default function AccountTab() {
   return (
      <Drawer.Navigator drawerPosition="right" >
        <Drawer.Screen name="Account" component={Account} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    );
}

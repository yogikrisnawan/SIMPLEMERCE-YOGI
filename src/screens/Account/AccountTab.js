import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Account from './Account'
import About from './About'
import EditAccount from './EditAccount'

export default function AccountTab() {
   return (
      <Drawer.Navigator drawerPosition="right" >
        <Drawer.Screen name="Account" component={Account} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="EditAccount" component={EditAccount} />
      </Drawer.Navigator>
    );
}

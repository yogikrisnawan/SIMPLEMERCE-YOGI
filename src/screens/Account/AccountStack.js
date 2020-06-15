import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

import Account from './Account';
import EditAccount from './EditAccount';
import ListProduct from '../Products/ListProduct';


export default () => {
  return (
    <Stack.Navigator  >
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="EditAccount" component={EditAccount} />
      <Stack.Screen name="ListProduct" component={ListProduct} />
    </Stack.Navigator>
  );
}


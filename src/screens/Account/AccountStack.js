import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

import Account from './Account';
import EditAccount from './EditAccount';

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="EditAccount" component={EditAccount} />
    </Stack.Navigator>
  );
}


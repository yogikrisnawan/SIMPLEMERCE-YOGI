import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';

const AuthRouter = () => {
  return (
    <Stack.Navigator headerMode={null} >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default AuthRouter
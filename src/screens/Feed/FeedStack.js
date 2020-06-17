import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();



import Feed from './Feed';
import FeedDetail from './FeedDetail';


export default () => {
  return (
    <Stack.Navigator  >
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="FeedDetail" component={FeedDetail} />
    </Stack.Navigator>
  );
}


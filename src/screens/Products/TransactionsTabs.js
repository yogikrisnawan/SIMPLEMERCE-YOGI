import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import TransactionBuy from './TransactionBuy';
import TransactionSell from './TransactionSell';

export default function TransactionsTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TransactionBuy" component={TransactionBuy} options={{title: "Buy"}} />
      <Tab.Screen name="TransactionSell" component={TransactionSell} options={{title: "Sell"}} />
    </Tab.Navigator>
  );
}

// id : 5 , name : "Rochafi", BUY : 1 , SELL : 0
// id : 15, name : "Levi", BUY : 0 , SELL : 2 (White Cat, Divine Rapier)
// id : 16, name : "Nency", BUY : 0 , SELL : 1 (Chatime)    
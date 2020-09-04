import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SAAEweb from '../../pages/SAAEweb';

const WebStack = createStackNavigator();

export default function WebRoutes(){
  return (
    <WebStack.Navigator screenOptions={{headerStyle:{backgroundColor: '#F0F0F0'}, headerTintColor: '#004384', title: 'SAAE Digital'}}> 
      <WebStack.Screen name = "SAAEweb" component = {SAAEweb}/>
    </WebStack.Navigator>
)
}
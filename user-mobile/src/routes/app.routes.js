import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';

const AppTab = createBottomTabNavigator();

import Complaint from '../pages/Complaint';
import SAAEweb from '../pages/SAAEweb';

export default function AppRoutes(){
  return(
    <AppTab.Navigator>
      <AppTab.Screen 
        name = "Complaint" 
        component = {Complaint} 
        options={{title:"Reclamações"}}/>
      <AppTab.Screen 
        name = "SAAEweb" 
        component = {SAAEweb} 
        options={{title: "2ª Via"}}/>
    </AppTab.Navigator>
  )
}
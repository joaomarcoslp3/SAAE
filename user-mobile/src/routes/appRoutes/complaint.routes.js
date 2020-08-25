import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Complaint from '../../pages/Complaint';
import MapScreen from '../../pages/MapScreen';

const ComplaintStack = createStackNavigator();

export default function ComplaintRoutes(){
  return (
    <ComplaintStack.Navigator screenOptions={{headerStyle:{backgroundColor: '#F0F0F0'}, headerTintColor: '#004384', title: 'SAAE'}}> 
      <ComplaintStack.Screen name = "Complaints" component = {Complaint}/>
      <ComplaintStack.Screen name = "MapScreen" component = {MapScreen}/>
    </ComplaintStack.Navigator>
)
}
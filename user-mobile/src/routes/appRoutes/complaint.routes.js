import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Complaint from '../../pages/Complaint';
import MapScreen from '../../pages/MapScreen';

const ComplaintStack = createStackNavigator();

export default function ComplaintRoutes(){
  return (
    <ComplaintStack.Navigator screenOptions = {{headerShown: false}}> 
      <ComplaintStack.Screen name = "Complaint" component = {Complaint}/>
      <ComplaintStack.Screen name = "MapScreen" component = {MapScreen}/>
    </ComplaintStack.Navigator>
)
}
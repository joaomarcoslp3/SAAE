import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import ComplaintList from '../pages/ComplaintList';
import ComplaintInfo from '../pages/ComplaintInfo';

const AppStack = createStackNavigator();


export default function AppRoutes(){
  return (
      <AppStack.Navigator screenOptions = {{headerShown: false}}> 
        <AppStack.Screen name = "ComplaintList" component = {ComplaintList}/>
        <AppStack.Screen name = "ComplaintInfo" component = {ComplaintInfo}/>
      </AppStack.Navigator>
  )
}

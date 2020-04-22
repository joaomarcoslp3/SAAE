import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'


import Login from './pages/Login';
import Register from './pages/Register';
import RegisterInfo from './pages/RegisterInfo';
import Complaint from './pages/Complaint';

const AppStack = createStackNavigator();


export default function Routes(){
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name = "Login" component = {Login} options={{ headerShown: false}}/>
        <AppStack.Screen name = "Register" component = {Register} options={{ headerShown: false}}/>
        <AppStack.Screen name = "RegisterInfo" component = {RegisterInfo} options={{ headerShown: false}}/>
        <AppStack.Screen name = "Complaint" component = {Complaint}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

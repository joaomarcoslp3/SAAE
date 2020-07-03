import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../pages/Login';
import Register from '../pages/Register';
import RegisterInfo from '../pages/RegisterInfo';

const AuthStack = createStackNavigator();


export default function AuthRoutes(){
  return (
      <AuthStack.Navigator screenOptions = {{headerShown: false}}> 
        <AuthStack.Screen name = "Login" component = {Login}/>
        <AuthStack.Screen name = "Register" component = {Register}/>
        <AuthStack.Screen name = "RegisterInfo" component = {RegisterInfo}/>
      </AuthStack.Navigator>
  )
}

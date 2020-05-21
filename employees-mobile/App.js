import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/routes/';
import FlashMessage from 'react-native-flash-message'

import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider}  from './src/provider/AuthProvider'


export default function App() {
  return(
    <NavigationContainer>
      <AuthProvider>
          <StatusBar barStyle = {"light-content"} backgroundColor= {'#22262e'}/>
          <Routes/>
          <FlashMessage position="top"/> 
      </AuthProvider>
    </NavigationContainer>
  )
}
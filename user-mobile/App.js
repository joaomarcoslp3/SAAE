import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/routes/';
import FlashMessage from 'react-native-flash-message'

import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider}  from './src/provider/AuthProvider'
import {LocationProvider}  from './src/provider/LocationProvider'


export default function App() {
  return(
    <NavigationContainer>
      <AuthProvider>
        <LocationProvider>
          <StatusBar barStyle = {"dark-content"} backgroundColor= {'#F0F0F0'}/>
          <Routes/>
          <FlashMessage position="top"/> 
        </LocationProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/routes/'

import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider}  from './src/provider/AuthProvider'

export default function App() {
  return(
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle = {"light-content"} backgroundColor= {'#22262e'}/>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}
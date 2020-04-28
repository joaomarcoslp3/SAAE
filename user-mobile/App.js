import React, {useContext} from 'react';
import Routes from './src/routes/'

import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider}  from './src/provider/AuthProvider'

export default function App() {
  return(
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}
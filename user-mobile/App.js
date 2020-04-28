import React, {useContext} from 'react';
import SplashScreen from './src/routes/SplashScreen'
import Routes from './src/routes/'

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  

  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}
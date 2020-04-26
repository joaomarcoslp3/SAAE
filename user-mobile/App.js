import React from 'react';
import { AsyncStorage } from 'react-native'
import AuthRoutes from './src/routes/auth.routes';
import AppRoutes from './src/routes/app.routes';
import SplashScreen from './src/routes/SplashScreen'

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [logged, setLogged] = React.useState(false)

  React.useEffect(()=>{
    const token = AsyncStorage.getItem('@SAAEapi:token')
    if(token != null){
      setLogged(true)
    }
  }, [])

  return (
    <NavigationContainer>
       {logged === true ? <AppRoutes/> : <AuthRoutes/>}
    </NavigationContainer>
  );
}
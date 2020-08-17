import React, {useContext} from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import AuthContext from '../provider/AuthProvider'
import {View, ActivityIndicator} from 'react-native'
import { AppLoading } from 'expo';

export default function Routes(){
  const { signed, loading } = useContext(AuthContext);
  
  if(loading){
    return(
      <AppLoading/>
    )
  }

  return signed ? <AppRoutes/> : <AuthRoutes/>
  // return <AppRoutes/>
  
}
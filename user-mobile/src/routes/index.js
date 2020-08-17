import React, {useContext} from 'react';
import AuthRoutes from './authRoutes/auth.routes';
import AppRoutes from './appRoutes/app.routes';
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
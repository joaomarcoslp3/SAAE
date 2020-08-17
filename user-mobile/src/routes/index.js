import React, {useContext} from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import AuthContext from '../provider/AuthProvider'
import {View, ActivityIndicator} from 'react-native'

export default function Routes(){
  const { signed, loading } = useContext(AuthContext);
  
  if(loading){
    return(
      <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#004384'}}>
        <ActivityIndicator size='large' color="#FFF"/>
      </View>
    )
  }

  return signed ? <AppRoutes/> : <AuthRoutes/>
  // return <AppRoutes/>

}
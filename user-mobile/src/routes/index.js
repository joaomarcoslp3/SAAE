import React, {useContext} from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import AuthContext from '../provider/AuthProvider'

export default function Routes(){
  const { signed } = useContext(AuthContext);

  return signed ? <AppRoutes/> : <AuthRoutes/>
  
}
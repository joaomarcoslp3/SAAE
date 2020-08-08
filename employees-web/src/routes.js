import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {AuthContext} from './provider/AuthProvider'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import LandingPage from './pages/LandingPage/LandingPage';
import RegisterComplete from './pages/RegisterCompleted/RegisterCompleted';

function CustomRoute({isPrivate, login, ...rest}) {
  const {signed} = useContext(AuthContext);

  if(isPrivate && !signed){
    return <Redirect to="/"/>
  }else if(login && signed){
    return <Redirect to="/home"/>
  }

  return <Route {...rest}/>
}

export default function Routes() {
  return(
    <Switch>
      <CustomRoute login exact path = "/" component = {Login}/>
      <CustomRoute isPrivate exact path="/home" component={LandingPage} />
      <CustomRoute isPrivate exact path="/register" component={Register} />
      <CustomRoute isPrivate exact path="/register-complete" component={RegisterComplete} />
    </Switch>
  )
}


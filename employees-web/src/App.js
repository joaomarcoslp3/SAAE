import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './global.css'

import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import LandingPage from './pages/LandingPage/LandingPage';
import RegisterComplete from './pages/RegisterCompleted/RegisterCompleted';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path = "/" component = {Login}/>
        <div className="container">
        <Route exact path = "/home" component = {LandingPage}/>
        <Route exact path = "/register" component = {Register}/>
        <Route exact path = "/register-complete" component = {RegisterComplete}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
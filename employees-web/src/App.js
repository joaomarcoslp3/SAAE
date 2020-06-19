import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './global.css'

import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path = "/" component = {Login}/>
        <div className="container">
        <Route exact path = "/home" component = {LandingPage}/>
        <Route exact path = "/register" component = {Register}/>

        </div>
      </div>
    </Router>
  );
}

export default App;

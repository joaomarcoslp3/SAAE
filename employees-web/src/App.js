import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './global.css'

import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import LandingPage from './pages/LandingPage/LandingPage';


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
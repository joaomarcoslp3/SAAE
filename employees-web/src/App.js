import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path = "/" component = {LandingPage}/>
        <div className="container">
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/register" component = {Register}/>

        </div>
      </div>
    </Router>
  );
}

export default App;

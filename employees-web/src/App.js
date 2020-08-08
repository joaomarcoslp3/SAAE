import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './global.css'

import {AuthProvider} from './provider/AuthProvider'
import Navbar from './components/Navbar/Navbar';
import Routes from './routes';


function App() {
  return (  
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar/>
          <div className="container">
            <Routes/>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
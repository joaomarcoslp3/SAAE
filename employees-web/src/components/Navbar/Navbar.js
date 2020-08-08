import React,  {useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import icon from '../../assets/icon.png';
import {AuthContext} from '../../provider/AuthProvider';

export default function Navbar() {
  const {setSigned} = useContext(AuthContext); 
  const history = useHistory();

  function logOut(e){
    e.preventDefault();
    localStorage.removeItem('emptoken');
    history.push('/');
    setSigned(false);
  }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navBackground">
        <button className="navbar-toggler navBarToogleColor"
          type = "button"
          data-toggle="collapse"
          data-target = "#navbar1"
          aria-controls = "navbar1"
          aria-expanded = "false"
          aria-label = "Toggle Navigation"
        > 
           <span className="navbar-toggle-icon"></span> 
        </button>
        <img src={icon} alt ="icon"/>
        <div className="collapse navbar-collapse justify-content-md-center"
          id ="navbar1">
        {localStorage.emptoken ? (
          <>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="navName">
                Início
              </Link>
              </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to ="/register"className="navName">
                  Registrar Novo Funcionário
              </Link>
            </li>
            <li className="nav-item">
              <text onClick={logOut} className = "navName">
                Logout
              </text>
            </li>
          </ul>
          </>
        ) : (
          <ul className="navbar-nav">
          <li className="nav-item">
            <Link to ="/"className="navName">
              Login
            </Link>
          </li>
        </ul>
        ) }
        </div>
      </nav>
    )
}




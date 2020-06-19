import React,  {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'
import './styles.css';
import icon from '../../assets/icon.png'

class Navbar extends Component{
  logOut(e){
    e.preventDefault();
    localStorage.removeItem('emptoken');
    this.props.history.push('/');
  }
  render() { 
    const loginRegLink= (
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to ="/"className="navName">
              Login
            </Link>
          </li>
        </ul>
    )
    const empLink= (
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
          <a href="" onClick={this.logOut.bind(this)} className = "navName">
            Logout
          </a>
        </li>
      </ul>
      </>
    )

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
        {localStorage.emptoken ? empLink : loginRegLink }
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)

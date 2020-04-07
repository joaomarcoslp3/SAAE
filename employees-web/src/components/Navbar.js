import React,  {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'

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
          <Link to ="/login"className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    )
    const empLink= (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to ="/register"className="nav-link">
              Registrar Novo Funcionário
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className = "nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button className="navbar-toggler"
          type = "button"
          data-toggle="collapse"
          data-target = "#navbar1"
          aria-controls = "navbar1"
          aria-expanded = "false"
          aria-label = "Toggle Navigation"
        > 
           <span className="navbar-toggle-icon"></span> 
        </button>

        <div className="collapse navbar-collapse justify-content-md-center"
          id ="navbar1">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                    Início
                </Link>
              </li>
            </ul>
            {localStorage.emptoken ? empLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)

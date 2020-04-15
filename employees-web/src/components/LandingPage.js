import React,  {Component} from 'react';
import jwt_decode from 'jwt-decode'

class LandingPage extends Component {
  render(){
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <h1 className="text-center">
            Bem-vindo(a)
          </h1>
        </div>
      </div>
    )
  }
}

export default LandingPage;
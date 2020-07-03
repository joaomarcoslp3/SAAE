import React, {useState, useEffect}   from 'react';
import {useHistory} from 'react-router-dom';
import './styles.css';

export default function LandingPage() {
  const [name, setName] = useState(null);
  const history = useHistory();
  
  useEffect(()=> {
    if(localStorage.getItem('emptoken') === null){
      history.push('/')
    }
    const employeer = localStorage.getItem('user');
    const jsonEmployeer = JSON.parse(employeer);
    setName(jsonEmployeer.name);
  }, [history])

    return (
      <div className="container">
        <div className="jumbotron mt-5 welcome">
          <h1 className="text-center">
            Bem-vindo(a), {name}
          </h1>
        </div>
      </div>
    )
}

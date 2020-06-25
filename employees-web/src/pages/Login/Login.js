import React, { useState, useEffect } from 'react';
import { login } from '../../services/api';
import './styles.css';
import {useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

export default function Login() {
  const [codFunc, setCodFunc] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  useEffect(()=> {
    if(localStorage.getItem('emptoken') !== null){
      history.push('/home')
    }
  }, [history])

  function _login(e) {
    e.preventDefault();

    const employees = {
      codFunc: codFunc,
      password: password,
    }

    login(employees).then(res => {
      history.push(`/home`)
    }).catch((err)=> {
      alert('Código de funcionário ou senha incorretos.')
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={_login}>
            <h1 className="h3 mb-3 font weight-normal">
              Login
              </h1>
            <div className="form-group">
              <label htmlFor="codFunc">Código de Funcionário:</label>
              <br></br>
              <input type="text"
                className="from-control"
                name="codFunc"
                placeholder="Insira seu Código"
                value={codFunc}
                onChange={e => setCodFunc(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <br></br>
              <input type="password"
                className="from-control"
                name="password"
                placeholder="Insira sua Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="button"
            >
              <FiLogIn size={16} color='#FFF' className="icon" />
                  Login
                </button>
          </form>
        </div>
      </div>
    </div>
  )
}
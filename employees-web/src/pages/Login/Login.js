import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './styles.css';
import {useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';


export default function Login() {
  const [codFunc, setCodFunc] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [codErrorMsg, setCodErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');

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

    api.post('/employees/login',{
      codFunc: employees.codFunc,
      password: employees.password
    }).then(res =>{
      localStorage.setItem('emptoken', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.employees));
      history.push(`/home`)
    }).catch(err =>{
      if(err.response){
        if(err.response.status === 404){
          // alert('Id do Funcionário incorreto ou não existente.')
          setCodErrorMsg('Id do Funcionário incorreto ou não existente.')
          setPasswordErrorMsg('')
        }else{
          // alert('Senha incorreta.')
          setPasswordErrorMsg('Senha incorreta.')
          setCodErrorMsg('')
        }
      }
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
                className={"from-control", codErrorMsg ? "error" : null}
                name="codFunc"
                placeholder="Insira seu Código"
                value={codFunc}
                onChange={e => setCodFunc(e.target.value)}
              />
              <span>{codErrorMsg}</span>
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <br></br>
              <input type="password"
                className={"from-control", passwordErrorMsg ? "error" : null}
                name="password"
                placeholder="Insira sua Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span>{passwordErrorMsg}</span>
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
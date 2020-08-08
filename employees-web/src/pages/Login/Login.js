import React, { useState, useContext } from 'react';
import api from '../../services/api';
import './styles.css';
import {useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import {AuthContext} from '../../provider/AuthProvider';


export default function Login() {
  const {signed, setSigned} = useContext(AuthContext);
  const [codFunc, setCodFunc] = useState('');
  const [password, setPassword] = useState('');
  const [codErrorMsg, setCodErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const history = useHistory();


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
      setSigned(true);
      history.push('/home');
    }).catch(err =>{
      if(err.response){
        if(err.response.status === 404){
          setCodErrorMsg('Id do Funcionário incorreto ou não existente.')
          setPasswordErrorMsg('')
        }else{
          setPasswordErrorMsg('Senha incorreta.')
          setCodErrorMsg('')
        }
      }
    })

    console.log(signed);
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
                // eslint-disable-next-line no-sequences
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
                // eslint-disable-next-line no-sequences
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
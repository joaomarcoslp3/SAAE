import React,  {useState, useEffect} from 'react';
import api from '../../services/api'; 
import {useHistory} from 'react-router-dom';
import './styles.css'

export default function Register(){
  const [name, setName] = useState('')
  const [codFunc, setCodFunc] = useState('')
  const [password, setPassword] = useState('');
  const [codErrorMsg, setCodErrorMsg] = useState('');
  const history = useHistory();

  useEffect(() => {
    if(localStorage.getItem('emptoken') === null){
      history.push('/')
    }
  }, [history])

  function _register(e){
    e.preventDefault();

    setTimeout(() => {
      history.push('/register-complete')
    }, 500);

      // api.post('/employees/create', {
      //   name,
      //   codFunc,
      //   password
      // }).then(res =>{
      //   setTimeout(() => {
      //     history.push('/register-complete')
      //   }, 100);
      // }).catch(err => {
      //   if(err.response){
      //     if(err.response.status === 406){
      //       setCodErrorMsg('Código de Funcionário já utilizado.')
      //     }
      //   }
      // })
  }
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={_register}>
              <h1 className="h3 mb-3 font weight-normal">
                Cadastre um novo funcionário
              </h1>
              <div className="form-group">
                  <label htmlFor="name">Nome do Funcionário:</label>
                  <br/>
                  <input
                    name = "name"
                    placeholder="Insira o nome do Funcionário"
                    value={name}
                    onChange = {e => setName(e.target.value)}
                   />
                </div>
                <div className="form-group">
                  <label htmlFor="codFunc">Código de Funcionário:</label>
                  <br/>
                   <input type="text"
                    name = "codFunc"
                    placeholder="Insira o Código do Funcionário"
                    value={codFunc}
                    className={codErrorMsg ? "error" : null}
                    onChange = {e => setCodFunc(e.target.value)}
                   />
                   <span>{codErrorMsg}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Senha:</label>
                  <br/>
                   <input type="password"
                    name = "password"
                    placeholder="Insira sua Senha"
                    value={password}
                    onChange = {e => setPassword(e.target.value)}
                   />
                </div>
                <button 
                type = "submit"
                className="button">
                  Cadastre
                </button>
            </form>
          </div>
        </div>
      </div>
    )
}
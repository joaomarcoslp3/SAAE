import React,  {Component} from 'react';
import { register } from './UserFunctions'; 

class Register extends Component{
  constructor(){
    super()
    this.state = {
      name: '',
      codFunc: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this) 
    this.onSubmit = this.onSubmit.bind(this) 

  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onSumit(e){
    e.preventDefault();
    
    const employees = {
      name: this.state.name,
      codFunc: this.state.codFunc,
      password: this.state.password,
    }

    register(employees).then(res => {
      if(res)
      this.props.history.push(`\login`)
    })
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font weight-normal">
                Cadastre um novo funcionário
              </h1>
              <div className="form-group">
                  <label htmlFor="name">Nome do Funcionário:</label>
                   <input type="text"
                    className ="from-control"
                    name = "name"
                    placeholder="Insira o nome do Funcionário"
                    value={this.state.name}
                    onChange = {this.onChange}
                   />
                </div>
                <div className="form-group">
                  <label htmlFor="codFunc">Código de Funcionário:</label>
                   <input type="text"
                    className ="from-control"
                    name = "codFunc"
                    placeholder="Insira o Código do Funcionário"
                    value={this.state.codFunc}
                    onChange = {this.onChange}
                   />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Senha:</label>
                   <input type="password"
                    className ="from-control"
                    name = "password"
                    placeholder="Insira sua Senha"
                    value={this.state.password}
                    onChange = {this.onChange}
                   />
                </div>
                <button 
                type = "submit"
                className="btn btn-lg btn-primary btn-block">
                  Login
                </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
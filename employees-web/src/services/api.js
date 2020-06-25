import axios from 'axios';

export const register = newEmployees =>{
  return axios.post('/employees/create', {
      name: newEmployees.name,
      codFunc: newEmployees.codFunc,
      password: newEmployees.password
    }).then(res =>{
      alert('Cadastro realizado com sucesso')
    })
}

export const login = employees =>{
  return axios.post('/employees/login',{
    codFunc: employees.codFunc,
    password: employees.password
  }).then(res =>{
    localStorage.setItem('emptoken', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.employees));
    return res.data
  }).catch(err =>{
    if(err.response){
      if(err.response.status === 404){
        alert('Id do Funcionário incorreto ou não existente.')
      }else{
        alert('Senha incorreta.')
      }
    }
  })
} 
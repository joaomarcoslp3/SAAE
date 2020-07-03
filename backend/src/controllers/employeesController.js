const Employees = require('../models/Employees');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require ('dotenv').config()

module.exports = {
  async index(req, res){
    const employees = await Employees.findAll();

    return res.json(employees);
  },

  async store(req, res){ 
    const employeesData = {
      name: req.body.name,
      codFunc: req.body.codFunc,
      password: req.body.password,
    };

      Employees.findOne({
        where: {
          codFunc: req.body.codFunc
        }
        }).then(employees => {
          if(!employees){
            const hash = bcrypt.hashSync(employeesData.password, 10);
            employeesData.password = hash;
            Employees.create(employeesData)
            .then(employees => {
              res.status(200).json(employees)
            })
          }else{
            res.status(406).json({ error: 'Employeer already exists' })
          }
        })
          .catch(err => {
            res.status(400).send('error:' + err)
          })
      },
  async remove(req, res){ 
    await Employees.destroy({where:{
        codFunc: req.params.codFunc
    }});
    return res.json({state: 'Succeful'})
  },
  async auth(req, res){
    const employeer = Employees.findOne({
      where:{
        codFunc: req.body.codFunc
      }
    }).then(employees =>{
      if(bcrypt.compareSync(req.body.password, employees.password)){
        let token = jwt.sign(employees.dataValues, process.env.SECRET_KEY, {
          expiresIn: 42075360
        });
        res.status(200).json({ token: token, employees: employees })
      }else{
        res.status(400).json('Wrong password')
      }
    }).catch(err =>{
      if(!employeer.dataValues){
        res.status(404).json('Employeer not foud')
      }else{
        res.status(400).send('error:' +err)
      }
    })
  }
  
}
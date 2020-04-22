const Employees = require('../models/Employees');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
            .then(employees =>{
              let token = jwt.sign(employees.dataValues, process.env.SECRET_KEY, {
                expiresIn: 1440
              });
              res.json({token: token})
            })
            .catch(err => {
              res.status(400).send('error:' + err)
            })
          }else{
            res.status(400).json({ error: 'Employees already exists' })
          }
        })
          .catch(err => {
            res.status(400).send('error:' + err)
          })
      },
  async remove(req, res){ 
    const employees = await Employees.destroy({where:{
        codFunc: req.params.codFunc
    }});
    return res.json(employees)
  },
  async auth(req, res){
    const employees = Employees.findOne({
      where:{
        codFunc: req.body.codFunc
      }
    }).then(employees =>{
      if(bcrypt.compareSync(req.body.password, employees.password)){
        let token = jwt.sign(employees.dataValues, process.env.SECRET_KEY, {
          expiresIn: 86400
        });
        res.status(200).json({ token: token, employees: employees })
      }else{
        res.status(400).send('Wrong password')
      }
    }).catch(err =>{
      res.status(400).send('error:'+ err)
    })
  }
  
}
const Employees = require('../models/Employees')

module.exports = {
  async index(req, res){
    const employees = await Employees.findAll();

    return res.json(employees);
  },

  async store(req, res){ 
    const {name, codFunc, password} = req.body;
    
    const employees = await Employees.create({ name, codFunc, password });

    return res.json(employees);
  } ,
  async remove(req, res){ 
    const employees = await Employees.destroy({where:{
        codFunc: req.params.codFunc
    }});
    return res.json(employees)
  }
}
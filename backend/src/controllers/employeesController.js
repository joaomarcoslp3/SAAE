const Employees = require('../models/Employees')

module.exports = {
  async index(req, res){
    const employees = await Employees.findAll();

    return res.json(employees);
  },

  async store(req, res){ 
    try{
    const {name, codFunc, password} = req.body;

    if(await Employees.findOne( { codFunc } )){
    res.status(400).send({ error:'codFunc already exists' })
    }
    

    const employees = await Employees.create({ name, codFunc, password });

    return res.json(employees);
    }catch(err){
      res.status(400).send({ error:'Registration failed' })
    }
  },
  async remove(req, res){ 
    const employees = await Employees.destroy({where:{
        codFunc: req.params.codFunc
    }});
    return res.json(employees)
  }
  
}
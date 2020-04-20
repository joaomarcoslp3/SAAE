const Users = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

process.env.SECRET_KEY = 'secret';


module.exports = {
  async index(req, res){
    const users = await Users.findAll();

    return res.json(users);
  },
  
  async findOne(req, res){
    const users = await Users.findAll({where:{
      idElet: req.params.idElet
    }});

    return res.json(users);
  },

  async store(req, res){ 
    const userData = {
      name: req.body.name,
      idElet: req.body.idElet,
      password: req.body.password,
      email: req.body.email,
    };

      Users.findOne({
        where: {
          idElet: req.body.idElet
        }
        }).then(user => {
          if(!user){
            const hash = bcrypt.hashSync(userData.password, 10);
            userData.password = hash;
            Users.create(userData)
            .then(user =>{
              let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 42075360
              });
              res.status(200).json({token: token})
            })
            .catch(err => {
              res.status(400).send('error:' + err)
            })
          }else{
            res.status(400).json({ error: 'User already exists' })
          }
        })
          .catch(err => {
            res.status(400).send('error:' + err)
          })
      },

  async remove(req, res){ 
    const users = await Users.destroy({where:{
        idElet: req.params.idElet
    }});
    return res.json(users)
  },
  async auth(req, res){
   Users.findOne({
     where: {
       idElet: req.body.idElet
     }
   }) 
   .then(user =>{
    if(bcrypt.compareSync(req.body.password, user.password)){
      let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
        expiresIn: 42075360
      });
      res.status(200).json({ token: token})
    }else{
      res.status(400).send('Wrong password')
    }
   })
   .catch(err => {
     res.status(400).send('error:' +err)
   })
  }
}
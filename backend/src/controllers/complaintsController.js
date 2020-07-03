const User = require('../models/Users');
const Complaints = require('../models/Complaints');

module.exports ={

  async index(req, res){
    const complaint = await Complaints.findAll();

    return res.json(complaint);
  },
  async findUnsolved(req, res){
    const complaint = await Complaints.findAll({where: {
      complaint_state: false
    }})

    return res.status(200).json(complaint)
  },
  async store(req, res) {
    
    const { user_id } = req.params;
    const { complaint_text, complaint_picture, complaint_latitude, complaint_longitude, complaint_state } = req.body;

    const user = await User.findByPk(user_id);

    if (!user){
      return res.status(400).json( { error: 'User not Found' } )
    }

    const complaint = await Complaints.create({
      complaint_text,
      complaint_picture,
      complaint_latitude,
      complaint_longitude,
      complaint_state,
      user_id
    });

    return res.json(complaint);
  },

  async findOne(req, res){

    const { user_id } = req.params;
    const user = await User.findByPk(user_id, {
      include: { association: 'complaints' }
    });

    return res.json(user)
    //para achar apenas as reclamações use o código abaixo
    //return res.json(user.complaints)
    
    },
    async remove(req, res){ 
      const complaint = await Complaints.destroy({where:{
          id: req.params.id
      }});
      return res.status(200).json(complaint)
    },
    async setSolved(req, res){
      const {id} = req.params;
      const { complaint_state } = req.body;
      Complaints.update(req.body, {
        where: {
          id
        }
      }).then(num => {
        if(num == 1){
          res.status(200).json({update: "succes"})
        }else{
          res.status(400).json({update: "fail"})
        }
      })
    }
 }




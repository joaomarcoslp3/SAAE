const { Model, DataTypes } = require('sequelize');

class ComplaintState extends Model {
  static init(sequelize) {
    super.init({
      complaint_state_title: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models){
    this.hasMany(models.Complaint, { foreignKey: 'complaint_state_id', as: 'complaints' })
  }
}


module.exports = ComplaintState
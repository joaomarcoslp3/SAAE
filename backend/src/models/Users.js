const { Model, DataTypes } = require('sequelize');

class Users extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      idElet: DataTypes.INTEGER,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models){
    this.hasMany(models.Complaint, { foreignKey: 'user_id', as: 'complaints' })
  }
}


module.exports = Users
const { Model, DataTypes } = require('sequelize');

class Complaint extends Model {
  static init(sequelize) {
    super.init({
      complaint_text: DataTypes.TEXT,
      complaint_picture: DataTypes.CHAR,
      complaint_location: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.Users, { foreignKey: 'user_id', as: 'autor' })
  }
}

module.exports = Complaint;
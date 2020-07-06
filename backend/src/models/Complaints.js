const { Model, DataTypes } = require('sequelize');

class Complaint extends Model {
  static init(sequelize) {
    super.init({
      complaint_text: DataTypes.TEXT,
      complaint_picture: DataTypes.CHAR,
      complaint_latitude: DataTypes.STRING,
      complaint_longitude: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.ComplaintState, { foreignKey: 'complaint_state_id', as: 'complaint_state'})
  }
}

module.exports = Complaint;
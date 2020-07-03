const { Model, DataTypes } = require('sequelize');

class Employees extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      codFunc: DataTypes.INTEGER,
      password: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}


module.exports = Employees
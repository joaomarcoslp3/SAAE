const { Model, DataTypes } = require('sequelize');

class Employees extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      codFunc: DataTypes.INTEGER,
      password: DataTypes.STRING,
      typeOf: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }
}


module.exports = Employees
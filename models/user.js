'use strict';
const bcryptjs = require('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task)
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    organization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks : {
      beforeCreate(user) {

        user.organization = "Hacktiv8"

        var salt = bcryptjs.genSaltSync(10);
        var hash = bcryptjs.hashSync(user.password, salt);
        user.password = hash
      }
    }
  });
  return User;
};
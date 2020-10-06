'use strict';
const bcryptjs = require ('bcryptjs')
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
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    organization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate (value){
        const salt = bcryptjs.genSaltSync(10)
        const hash = bcryptjs.hashSync(value.password, salt)
        value.password = hash

        value.organization = `hacktiv8`
      },
    }
  });
  return User;
};
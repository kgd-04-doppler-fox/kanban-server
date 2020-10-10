'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Email cannot be empty'
        },
        notEmpty: {
          args: true,
          msg: 'Email cannot be empty'
        },
        isEmail: {
          args: true,
          msg: 'Email must be type of email.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Password cannot be empty'
        },
        notEmpty: {
          args: true,
          msg: 'Password cannot be empty'
        }
      }
    },
    organization: {
      type: DataTypes.STRING,
      defaultValue: 'Hacktiv8'
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(user => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash
  })
  return User;
};
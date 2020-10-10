'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User)
    }
  };
  Task.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Task cannot be empty'
        }
      }
    },
    description: DataTypes.STRING,
    organization: {
      type: DataTypes.STRING,
      defaultValue: 'Hacktiv8'
    },
    UserId: DataTypes.INTEGER,
    category: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Category cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
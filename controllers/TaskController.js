const { Task } = require('../models')

class TaskController {
  static getTasksByUserId(req, res, next) {
    Task.findAll({ where: { UserId: req.decodedUser.id } })
      .then(task => {
        res.status(200).json({
          task
        })
      })
      .catch(err => {
        next(err)
      })
  }

  static addTasksByUserId(req, res, next) {
    const { title, description, category } = req.body
    Task.create({ title, description, category, UserId: req.decodedUser.id })
      .then(task => {
        res.status(201).json({
          task: {
            id: task.id,
            title: task.title,
            description: task.description,
            category: task.category,
            createdDate: task.createdAt
          }
        })
      })
      .catch(err => {
        next(err)
      })
  }

  static findTaskById(req, res, next) {
    Task.findByPk(+req.params.id)
      .then(task => {
        if (!task) {
          throw {
            msg: 'task not found'
          }
        }
        res.status(200).json({ task })
      })
      .catch(err => {
        next(err)
      })
  }

  static async editTasksByUserId(req, res, next) {
    try {
      const { title, description, category } = req.body
      const task = await Task.update({ title, description, category },
        { where: { id: +req.params.id }, returning: true })
      if (task[0] === 0) {
        throw {
          msg: 'task not found'
        }
      } else {
        res.status(201).json({ task: task[1][0] })
      }
    } catch (error) {
      next(error)
    }
  }

  static async deleteTasksByUserId(req, res, next) {
    try {
      const task = await Task.destroy({ where: { id: +req.params.id }, returning: true })
      if (task[0] === 0) {
        throw {
          msg: 'task not found'
        }
      } else {
        res.status(200).json({ msg: 'Task has been deleted.' })
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = TaskController
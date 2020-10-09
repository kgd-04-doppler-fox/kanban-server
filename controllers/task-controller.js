const { Task } = require('../models')

class TaskController {
  static showAll(req, res, next) {
    Task.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static postTask(req, res, next) {
    const { title, description, category } = req.body
    Task.create({
      title,
      description,
      category,
      UserId: req.decodedUser.id
    })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static findById(req, res, next) {
    const id = req.params.id
    Task.findOne({
      where: {
        id: id
      }
    })
      .then(data => {
        if (!data) {
          throw {
            name: "not found"
          }
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static editTask(req, res, next) {
    const { category } = req.body
    Task.update({
      category
    }, {
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static deleteById(req, res, next) {
    const id = req.params.id
    Task.destroy({
      where: {
        id: id
      }
    })
      .then(() => {
        res.status(200).json({ msg: "delete succeed" })
      })
  }
}

module.exports = TaskController
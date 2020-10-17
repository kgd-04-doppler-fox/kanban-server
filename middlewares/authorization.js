const { Task } = require('../models')

function authorization(req, res, next) {
  Task.findByPk(+req.params.id)
    .then(task => {
      if (!task) {
        throw {
          msg: 'task not found'
        }
      } else if (task.UserId === req.decodedUser.id) {
        next()
      } else {
        throw {
          msg: 'unauthorized'
        }
      }
    })
    .catch(err => {
      next(err)
    })
}

module.exports = authorization
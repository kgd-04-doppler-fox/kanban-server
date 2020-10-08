const { Task } = require('../models')

function authorization(req, res, next) {
  const id = req.params.id
  Task.findByPk(id)
    .then(task => {
      if (task == null) {
        throw {
          name: "not found"
        }
      } else {
        if (task.UserId === req.decodedUser.id) {
          next()
        }
        else {
          throw {
            name: "cannot access"
          }
        }
      }
    })
    .catch(err => {
      next(err)
    })

}

module.exports = authorization  
const { Task } = require ('../models')
const jwt = require ('jsonwebtoken')

function authorization (req,res,next) {
    Task.findByPk(+req.params.id)
    .then (task => {
        if (task === null) {
            throw {
                name : 'error not found'
            }
        } else {
            if (task.userId === req.decodedUser.id) {
                next ()
            } else {
                throw {
                    name : 'unauthorized access'
                }
            }
        }
    })
    .catch (err => {
        next(err)
    })
}

module.exports = authorization
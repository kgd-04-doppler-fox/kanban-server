const { Task } = require('../models')

function authorization (req, res, next) {
    const id = +req.params.id
    Task.findOne({
        where : {
            id
        }
    }).then (task => {
        if (task === null) {
             throw {
                name : `ERROR 404 Not Found`
            }
        } else {
            if (task.UserId === req.decodedUser.id) {
                next()
            } else {
                throw {
                    name : `Unauthorized User`
                }
            }
        }
    }).catch (err => {
        next(err)
    })
}

module.exports = authorization
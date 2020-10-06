const {Task} = require ('../models')

function authorization (req, res, next){
    const id = req.params.id
    Task.findByPk(id)
    .then(task => {
        if (!task){
            throw {
                name : `Task not found`
            }
        }
        else {
            if (task.UserId === req.decodedUser.id){

                next()
            }
            else {
                throw {
                    name : `unauthorized access`
                }
            }
        }
    })
    .catch (err => {
        next (err)
    })

}

module.exports = authorization
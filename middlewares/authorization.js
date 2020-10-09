const {Task} = require('../models')

function authorization(req, res, next){
    const id = req.params.id
    Task.findByPk(id)
    .then(task => {
        if (task == null){
            throw {
                name: "not found"
            }
        }else{
            if (task.UserId === req.verified.id){
                next()
            }
            else{
                throw{
                    name: "invalid access"
                }
            }
        }
    })
    .catch(err => {
        next(err)
    })

}

module.exports = authorization
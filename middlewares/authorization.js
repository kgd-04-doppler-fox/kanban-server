const {Task} = require('../models')

function authorization (req, res, next) {
    let id = +req.params.id
    Task.findOne({
        where : {
            id : id
        }
    })
    .then(data => {
        if(!data){
            throw {
                name : "not found"
            }
        } else {
            if(data.UserId === req.decodedUser.id){
                next()
            } else {
                throw {
                    name : "unauthorized access"
                }
            }
        }
    })
    .catch(err => {
        res.status(500).json({
            name : "unauthorized access"
        })
    })
}

module.exports = authorization
const { Task } = require(`../models`)

function authorization(req, res, next) {
    console.log(req.params)
    Task.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(task => {
            if (task === null) {
                throw { name: `Error not found` }
            } else {
                if (task.UserId === req.decodedUser.id) {
                    next()
                }
                else {
                    throw { name: `Unauthorized` }
                }
            }
        })
        .catch(err => {
            console.table(err)
            next(err)
        })

}

module.exports = authorization
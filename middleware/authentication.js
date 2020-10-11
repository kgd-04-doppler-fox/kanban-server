const jwt = require ('jsonwebtoken')
const {User} = require ('../models')

function authentication (req, res, next){
    const token = req.headers.access_token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const id = decoded.id
    
    User.findByPk(id)
    .then(user => {
        if (user){
            req.decodedUser = decoded
            next()
        }
        else {
            throw {
                name : `email/password is wrong`
            }
        }
    })
    .catch(err => {
        next (err)
    })
}

module.exports = authentication
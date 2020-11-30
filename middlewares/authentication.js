const jwt = require('jsonwebtoken')
const {User} = require('../models')

function authentication (req, res, next) {

   const decoded = jwt.verify(req.headers.access_token, process.env.SECRET)

   if(decoded){
       User.findByPk(decoded.id)
       .then(user => {
           if(user){
               req.decodedUser = decoded
               next()
           } else {
               res.status(500).json({
                   name : "unauthorized access"
               })
           }
       })
       .catch(err => {
            res.status(500).json({
                name : "unauthorized access"
            })
       })
    } else {
        res.status(500).json({
            name : "unauthorized access"
        })
    }
}

module.exports = authentication
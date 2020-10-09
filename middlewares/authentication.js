const jwt = require('jsonwebtoken')
const {User} = require('../models')

function authentication(req, res, next){
    const verified = jwt.verify(req.headers.token, process.env.JWT_SECRET)
    
    if (verified){
        User.findByPk(verified.id)
        .then(user => {
            if (user){
                req.verified = verified
                next()
            }
            else{
                throw{
                    name: 'invalid access'
                }
            }
        })
        .catch(err =>{
            next(err)
        })
    }else{
        next({name: 'invalid access'})
    }
}


module.exports = authentication
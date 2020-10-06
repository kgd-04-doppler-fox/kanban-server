const jwt = require ('jsonwebtoken')

function authentication (req, res, next){
    const token = req.headers.access_token
}

module.exports = authentication
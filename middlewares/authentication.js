const jwt = require('jsonwebtoken')
const { User } = require('../models')

function authentication(req, res, next) {
  let access_token = req.headers.access_token
  const decoded = jwt.verify(access_token, process.env.JWT_SECRET)
  if (decoded) {
    User.findByPk(decoded.id)
      .then(user => {
        if (user) {
          req.decodedUser = decoded
          next()
        } else {
          next({
            msg: 'unauthorized'
          })
        }
      })
  } else {
    next({
      msg: 'unauthorized'
    })
  }
}

module.exports = authentication
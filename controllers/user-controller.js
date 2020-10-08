const { User } = require('../models')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body
      const user = await User.create({
        email, password
      })
      res.status(201).json({ user })
    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body
    try {
      const user = await User.findOne({
        where: {
          email
        }
      })
      if (user == null) {
        throw {
          name: "wrong email or password"
        }
      } else {
        const validPassword = bcryptjs.compareSync(password, user.password)
        if (validPassword) {
          const access_token = jwt.sign({
            email: user.email,
            id: user.id
          }, process.env.JWT_SECRET)

          res.status(200).json({
            access_token
          })
        } else {
          throw {
            name: "wrong email or password"
          }
        }
      }
    }
    catch (err) {
      next(err)
    }
  }
}

module.exports = UserController
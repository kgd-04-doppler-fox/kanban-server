const { User } = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body
      const user = await User.create({ email, password })
      res.status(201).json({ user })
    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ where: { email } })
      if (!user) {
        throw {
          msg: 'Wrong email or password'
        }
      }
      const validate = bcrypt.compareSync(password, user.password)
      if (validate) {
        const access_token = jwt.sign({
          id: user.id,
          email: user.email
        }, process.env.JWT_SECRET)
        res.status(200).json({ access_token, email })
      } else {
        throw {
          msg: 'Wrong email or password'
        }
      }
    } catch (error) {
      next(error)
    }
  }

  static googleSignIn(req, res, next) {
    let email
    client.verifyIdToken({
      idToken: req.body.access_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
      .then(ticket => {
        const payload = ticket.getPayload();
        email = payload.email
        return User.findOne({ where: { email } })
      })
      .then(user => {
        if (user) {
          return user
        } else {
          return User.create({ email, password: process.env.CLIENT_SECRET })
        }
      })
      .then(user => {
        const access_token = jwt.sign({
          id: user.id,
          email: user.email
        }, process.env.JWT_SECRET)
        res.status(200).json({ access_token })
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = UserController
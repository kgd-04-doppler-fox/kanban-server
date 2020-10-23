const { User } = require('../models')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID)

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password, username } = req.body
      const user = await User.create({
        email, password, username
      })
      res.status(201).json({ id: user.id, username: user.username })
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

  static googleSignIn(req, res, next) {
    let email
    client.verifyIdToken({
      idToken: req.body.access_token,
      audience: process.env.CLIENT_ID,
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
          return User.create({username:email, email, password: process.env.SECRET_PASSWORD })
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
        console.log(err)
        next(err)
      })
  }
}

module.exports = UserController
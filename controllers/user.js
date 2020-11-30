const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { OAuth2Client } = require('google-auth-library');

const { User } = require ('../models')

class UserController {
    static registerUser (req, res, next) {
        const {email, password} = req.body 
        User.create({
            email,
            password
        }).then(user => {
            res.status(201).json({
                id: user.id,
                email: user.email
            })
        }).catch(err => {
            next(err)
        })
    }

    static loginUser (req, res, next) {
        const {email, password} = req.body
        User.findOne ({
            where : {
                email
            }
        }).then (user => {
            if (!user) {   
                throw {
                    name: `Wrong Email / Password`
                }
            }
            const validPassword = bcryptjs.compareSync(password, user.password)
            if (validPassword) {
                const access_token = jwt.sign({
                    email : user.email,
                    id : user.id,
                }, process.env.JWT_SECRET)
                res.status(200).json({
                    access_token
                })
            } else {
                throw {
                    name : `Wrong Email / Password`
                }
            }
        }).catch (err => {
            next(err)
        })
    }

    static googleSign (req, res, next) {
        let email
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        .then(ticket => {
            let payload = ticket.getPayload()
            email = payload.email

            return User.findOne({
                where: {
                    email
                }
            })
        })
        .then(user => {
            if (user) return user
            else {
                return User.create({
                    email: email,
                    password: process.env.PASSWORD_GOOGLE
                })
            }
        })
        .then(user => {
            const access_token = jwt.sign({
                email : user.email,
                id : user.id,
            }, process.env.JWT_SECRET)
            res.status(200).json({ access_token })
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController
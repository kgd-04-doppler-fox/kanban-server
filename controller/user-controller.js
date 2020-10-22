const { User } = require ('../models');
const bcryptjs = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const client = new OAuth2Client(CLIENT_ID);

class UserController {
    static register (req,res,next) {
        const { email,password } = req.body
        User.create ({
            email,
            password
        })
        .then (user => {
            res.status(201).json({
                id : user.id,
                email : user.email
            })
        })
        .catch (err => {
            next(err)
        })
    }

    static login (req,res,next) {
        const { email,password } = req.body
        User.findOne ({
            where: {
                email
            }
        })
        .then (user => {
            console.log(user)
            if (user === null){
                throw {
                    message: 'Wrong email/password'
                }
            }
            const validPassword = bcryptjs.compareSync(password, user.password)
            if (validPassword) {
                const access_token = jwt.sign({
                    email : user.email,
                    id : user.id,
                    organization: user.organization
                }, process.env.JWT_SECRET)
                res.status (200).json({
                    access_token
                })
            } else {
                throw {
                    message: 'Wrong email/password'
                }
            }
        })
        .catch (err => {
            next(err)
        })
    }

    static googleSignIn (req,res,next) {
        const id_token = req.headers.id_token
        let email;
        client.verifyIdToken({
            idToken: id_token,
            audience: CLIENT_ID
        })
        .then (ticket => {
            const payload = ticket.getPayload()
            email = payload.email
            return User.findOne({
                where: {
                    email 
                }
            })
        })
        .then (user => {
            if(!user){
                console.log('error user')
                return User.create({
                    email,
                    password : process.env.SECRET_PSWD
                })
            } else {
                return user
            }
        })
        .then (user => {
            const payload = { id: user.id,email: user.email }
            const jwtToken = jwt.sign(payload, process.env.JWT_SECRET)
            return res.status(200).json({
                token : jwtToken
            })
        })
        .catch (err => {
            console.log(err)
            next(err)
        })
    }
}

module.exports = UserController
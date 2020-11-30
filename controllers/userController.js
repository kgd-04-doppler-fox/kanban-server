const {User} = require('../models')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class UserController {

    static register (req, res) {
        const {email, password} = req.body
        // console.log(req.body);
        User.create({
            email,
            password
        })
        .then(user => {
            res.status(200).json({
                id : user.id,
                email : user.email 
            })
        })
        .catch(err => {
            res.status(500).json({
                name : "error register process"
            })
        })
    }

    static login (req, res) {
        const {email, password} = req.body
        User.findOne({
            where : {
                email
            }
        })
        .then(user => {
            if(!user){
                throw {
                    name : "wrong email / password"
                }
            }

            const validPassword = bcryptjs.compareSync(password, user.password)

            if(validPassword){
                const access_token = jwt.sign({
                    email : user.email,
                    id : user.id
                }, process.env.SECRET)
                res.status(200).json({
                    access_token
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                name : "wrong email / password"
            })
        })
    }

    static googleSignIn (req, res, next) {
        let email = null
        console.log(req.body.access_token, "<---- dari controller");
        client.verifyIdToken({
            idToken: req.body.access_token,
            audience: process.env.GOOGLE_CLIENT_ID, 
        })
        .then(ticket => {
            let payload = ticket.getPayload()
            // console.log(payload, 'payload verified');
            email = payload.email
            
            return User.findOne({
                where : {
                    email
                }
            }) // kenapa direturn? karena biar gak promise hell, jadi harus di return dan dioper ke 
                // then berikutnya setelah then yang inih
        })
        .then(user => {
            if(user){
                return user // kalau didatabase udah ada usernya , yaudah yang direturn yang ada didatabase
            } else {
                return User.create({ // kalau belom ada, yaudah didaftarin dulu, tapi make password yang buat sendiri
                    // 
                    email,
                    password: process.env.DEFAULT_PASSWORD
                })
            }
        })
        .then(user => {
            const access_token = jwt.sign({
                email : user.email,
                id : user.id
            }, process.env.JWT_SECRET)
            res.status(200).json({access_token})
        })
        .catch(err => {
            next(err);
        })
    }
}

module.exports = UserController

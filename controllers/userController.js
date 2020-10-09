const {User} = require('../models')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
}

module.exports = UserController

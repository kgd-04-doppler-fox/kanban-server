const { User } = require ('../models');
const bcryptjs = require ('bcryptjs');
const jwt = require ('jsonwebtoken');

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
                    id : user.id
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
}

module.exports = UserController
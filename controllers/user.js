const { User } = require ('../models')
const bcryptjs = require ('bcryptjs')
const jwt = require ('jsonwebtoken')

class UserController {
    static async register (req, res, next){
        try {
            const {name, email, password} = req.body
            const user = await User.create({
                name,
                email,
                password
            })
            res.status(201).json({
                id: user.id,
                name: user.name,
                email: user.email
            })
        } catch (error) {
            next (error)
        }
    }

    static async login (req, res, next){
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where : {
                    email
                }
            })
            if (!user) {
                throw {
                    name : `email/password is wrong`
                }
            }
            
            const correctPassword = bcryptjs.compareSync(password, user.password)
            if (correctPassword){
                const access_token = jwt.sign({
                    id: user.id,
                    email: user.email
                }, process.env.JWT_SECRET)
                res.status(200).json({
                    access_token
                })
            }
            else {
                throw {
                    name : `email/password is wrong`
                }
            }
        } catch (error) {
            next (error)
        }
    }

}

module.exports = UserController
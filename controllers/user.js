const { User } = require ('../models')
const bcryptjs = require ('bcryptjs')
const jwt = require ('jsonwebtoken')

class UserController {
    static async register (req, res, next){
        try {
            const {name, email, password} = req.body
            const user = await new User.create({
                name,
                email,
                password
            })
            res.status(201).json({user})
        } catch (error) {
            next (error)
        }
    }

    static async login (req, res, next){
        try {
            const {email, password} = req.body
            const user = await new User.findOne({
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
                })
                res.status(200).json(access_token)
            }
            else {
                throw {
                    name : `email/password is wrong`
                }
            }
        } catch (error) {
            nxet (error)
        }
    }

}

module.exports = UserController
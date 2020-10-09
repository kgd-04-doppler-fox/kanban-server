const {User} = require("../models")
const jwt = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

class UserController{
    static register(req, res, next){
        const {email, password} = req.body
        User.create({
            email, password
        })
        .then(user => {
            res.status(201).json({user})
        })
        .catch(err => {
            next(err)
        })
    }

    static login(req, res, next){
        const {email, password} = req.body

        User.findOne({
            where: {
                email
            }
        })
        .then(user => {
            if (!user){
                throw{
                    name: "invalid email / password"
                }
            }
            else{
                const validPassword = bcryptjs.compareSync(password, user.password)

                if (!validPassword){
                    throw{
                        name: "invalid email / password"
                    }
                }
                const token = jwt.sign({
                    id: user.id,
                    email: user.email,
                    organization: user.organization
                }, process.env.JWT_SECRET)

                res.status(200).json({
                    id: user.id,
                    email: user.email,
                    organization: user.organization,
                    token
                })
            }
        })
        .catch(err =>{
            next(err)
        })
    }


    static async googleSignIn(req, res, next){
        const idToken = req.headers.id_token

        try {
            const ticket = await client.verifyIdToken({
                idToken,
                audience: process.env.CLIENT_ID,
            });
            const payload = ticket.getPayload();
            const email = payload.email
            
            const user = await User.findOne({
                where: {
                    email
                }
            })
            if (!user){
                const newUser = await User.create({
                    email,
                    password: process.env.NEW_USER_PASSWORD+(Math.floor(Math.random()*process.env.SPECIAL_NUMBER))
                })
    
                const token = jwt.sign({
                    id: newUser.id,
                    email: newUser.email,
                    organization: newUser.organization
                }, process.env.JWT_SECRET)

                res.status(200).json({
                    id: newUser.id,
                    email: newUser.email,
                    organization: newUser.organization,
                    token
                })
            }
            else{
                
                const token = jwt.sign({
                    id: user.id,
                    email: user.email,
                    organization: user.organization
                }, process.env.JWT_SECRET)

                res.status(200).json({
                    id: user.id,
                    email: user.email,
                    organization: user.organization,
                    token
                })
            }
        } catch (error) {
            next(error)
        }        
    }

}


module.exports = UserController
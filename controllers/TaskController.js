const {Task, User} = require("../models")

class TaskController{
    static create(req, res, next){
       
        const {title, description} = req.body
        Task.create({
            title, description, 
            UserId: req.verified.id,
            organization: req.verified.organization
        })
        .then(task => {
            res.status(201).json({task})
        })
        .catch(err => {
            next(err)
        })
    }

    static findAll(req, res, next){
        Task.findAll({
            where:{
                organization: req.verified.organization
            },
            include: User
        })
        .then(tasks => {
            if (tasks.length < 0){
                throw{
                    name: "not found"
                }
            }
            res.status(200).json({tasks})
        })
        .catch(err => {
            next(err)
        })
    }

    static findByPk(req, res, next){
        const id = Number(req.params.id)
        
        Task.findByPk(id)
        .then(task => {
            if (task == null){
                throw {
                    name: 'not found'
                }
            }
            res.status(200).json({task})
        })
        .catch(err => {
            next(err)
        })
    }

    static update(req, res, next){
        const id = req.params.id
        const{title, description} = req.body
        Task.update({
            title, description
        },
        {
            where: {
                id
            },
            returning: true
        }

        )
        .then(task => {
            if(task[0] == 0){
                throw {
                    name: 'not found'
                }
            }
            res.status(200).json({task})
        })
        .catch(err => {
            next(err)
        })
    }

    static updateCategory(req, res, next){
        const id = Number(req.params.id)
        const {category} = req.body
        
        Task.update({category}, {
            where: {
                id
            },
            returning: true
        })
        .then(task => {
            if (task[0] == 0){
                throw{
                    name: 'not found'
                }
            }
            res.status(200).json({task})
        })
        .catch(err => {
            next(err)
        })
    }

    static delete(req, res, next){
        const id = req.params.id

        Task.destroy({
            where: {
                id
            }
        })
        .then(task =>{
            if (task === 1){
                res.status(200).json({
                    message: "Success to deleted"
                })
            }
            else{
                throw{
                    name: 'not found'
                }
            }
            
        })
        .catch(err => {
            next(err)
        })
    }
    
}

module.exports = TaskController
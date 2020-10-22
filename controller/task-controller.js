const { Task,User } = require ('../models');

class TaskController {
    static findAll (req,res,next) {
        Task.findAll ({
            where : {
                organization : req.decodedUser.organization,
            },
            order: ['id']
        })
        .then (task => {
            res.status(200).json(task)
        })
        .catch (err => {
            console.log(err)
            next(err)
        })
    }

    static createTask (req,res,next) {
        const { title,category } = req.body
        Task.create ({
            title,
            category: 'backlog',
            userId : req.decodedUser.id,
            organization : req.decodedUser.organization,
        })
        .then (task => {
            res.status(201).json(task)
        })
        .catch (err => {
            next(err)
        })
    }

    static updateTaskPut (req,res,next) {
        const { title,category } = req.body
        Task.update ({
            title,
            category
        },{
            where : {
            id : +req.params.id,
            userId : req.decodedUser.id
            },
            returning : true
        })
        .then (task => {
            if (task[0] === 0){
                throw {notFound : 'error not found'}
            } else {
                res.status(200).json(task[1][0])
            }
        })
        .catch (err => {
            next(err)
        })
    }

    static updateTaskPatch (req,res,next) {
        Task.update (req.body,{
            where : {
            id : +req.params.id,
            userId : req.decodedUser.id
            },
            returning : true
        })
        .then (task => {
            if (task[0] === 0){
                throw {notFound : 'error not found'}
            } else {
                res.status(200).json(task[1][0])
            }
        })
        .catch (err => {
            next(err)
        })
    }

    static deleteTask (req,res,next) {
        Task.destroy ({
            where : {
                id : +req.params.id,
                userId : req.decodedUser.id
            }
        })
        .then (task => {
            if (task === 0){
                throw {notFound : 'error not found'}
            } else {
                res.status(200).json({message : 'todo succes to delete'})
            }
        })
        .catch (err => {
            next(err)
        })
    }
}

module.exports = TaskController
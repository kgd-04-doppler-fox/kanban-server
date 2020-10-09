const { Task } = require('../models')

class TaskController {
    static createTask (req, res, next) {
        const { title, category } = req.body
        Task.create({
            title,
            category,
            UserId: req.decodedUser.id
        })
        .then(task => {
            res.status(201).json({ task })
        })
        .catch(err => {
            next(err)
        })
    }

    static showAllTask (req, res) {
        Task.findAll({
            where: {
                UserId: req.decodedUser.id
            }
        })
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static findTask (req, res, next) {
        const id = req.params.id
        Task.findByPk(id)
        .then(task => {
            if (!task) {
                res.status(404).json({ error : `Error 404 Data Not Found` })
            }
            res.status(200).json({ task })
        })
        .catch(err => {
            next(err)
        })
    }

    static editTask (req, res, next) {
        const { title, category } = req.body
        const optionId = req.params.id

        Task.update({
            title,
            category
        }, {
            where: { id : optionId},
            returning : true
        })
        .then(task => {
            if (task[0] === 0) {
                res.status(404).json({ error : `Error 404 Data Not Found` })
            }
            res.status(200).json(task[1][0])
        })
        .catch(err => {
            next(err)
        })
    }

    static changeStatusTask (req, res) {
        const { category } =  req.body
        const idParams =  req.params.id

        Task.update({
            category : category
        }, {
            where : {id : idParams},
            returning : true
        })
        .then(task => {
            if (!task) {
                res.status(404).json({ error : `Error 404 Data Not Found` })
            }
            res.status(task[1][0])
        })
        .catch(err => {
            res.send(err)
        })
    }

    static deleteTask (req, res) {
        const optionId = req.params.id
        Task.destroy({
            where : {id : optionId}
        })
        .then(task => {
            if (!task) {
                res.status(404).json({ error : `Error 404 Data Not Found` })
            }
            res.status(200).json({ "message" : `Task Successfully Deleted` })
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = TaskController
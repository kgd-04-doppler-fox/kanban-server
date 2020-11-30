const {Task} = require('../models')

class TaskController {

    static showAllTask (req, res) {
        Task.findAll()
        .then(data => {
            // console.log(data);
            res.status(200).json({
                tasks : data
            })
        })
        .catch(err => {
            res.status(500).json({
                name : "failed showing all tasks"
            })
        })
    }

    static addTask (req, res) {
        const {title, category} = req.body
        console.log(req.body);
        Task.create({
            title,
            category,
            UserId : req.decodedUser.id
        })
        .then(user => {
            res.status(201).json({
                name : "created successfully"
            })
        })
        .catch(err => {
            res.status(500).json({
                name : "failed adding new task"
            })
        })
    }
    static updateTask (req,res) {
        const patchTasks = {
            title: req.body.title,
            category: req.body.category
        }
        Task.update(patchTasks, {
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            res.status(200).json({
                name: 'Task Category Success to Update'
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
    }

    static deleteTask (req, res) {
        console.log(req.params.id);
        Task.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            if(data === 1){
                res.status(200).json({
                    message: 'Task Deleted'
                })
            } else {
                res.status(404).json({
                    message: 'Invalid Task'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
    }
}

module.exports = TaskController
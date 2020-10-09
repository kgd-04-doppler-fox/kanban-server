const {Task} = require('../models')

class TaskController {

    static showAllTask (req, res) {
        Task.findAll({
            where : {
                UserId : req.decodedUser.id
            }
        })
        .then(data => {
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

    
}

module.exports = TaskController
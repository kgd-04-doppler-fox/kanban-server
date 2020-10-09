const {Task} = require ('../models')

class TaskController {
    static async getAllTask (req, res, next){
        try {
            const tasks = await Task.findAll()
            res.status(200).json(tasks)
        } catch (error) {
            next (error)
        }
    }

    static async createTask (req, res, next){
        try {
            const {title, category} = req.body
            const task = await Task.create ({
                title,
                category : 'backlog',
                UserId: req.decodedUser.id
            })
            res.status(201).json({task : {
                id: task.id,
                title: task.title,
                category: task.category,
                UserId: task.UserId
            }})
        } catch (error) {
            next (error)
        }
    }

    static async getTaskById (req, res, next){
        try {
            const id = req.params.id
            const task = await Task.findByPk(id)
            res.status(200).json({task:{
                id: task.id,
                title: task.title,
                category: task.category,
                UserId: task.UserId
            }})
        } catch (error) {
            next(error)
        }
    }

    static async changeStatus (req, res, next){
        console.log(`disini`)
        try {
            const id = req.params.id
            const task = await Task.update({
                category : req.body.category
            }, {
                where : {id},
                returning : true
            })
            console.log(task)
            res.status(201).json(task[1][0])
        } catch (error) {
            next(error)
        }
    }

    static async deleteTask (req, res, next){
        try {
            const id = req.params.id
            const task = await Task.destroy({
                where : {id}
            })
            res.status(200).json({msg: `success delete`})
        } catch (error) {
            next (error)
        }
    }

}

module.exports = TaskController
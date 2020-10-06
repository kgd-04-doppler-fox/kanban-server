const {Task} = require ('../models')

class TaskController {
    static async getAllTask (req, res, next){
        try {
            const tasks = await new Task.findAll()
            res.status(200).json(tasks)
        } catch (error) {
            next (error)
        }
    }

    static async getTaskById (req, res, next){
        try {
            const id = req.params.id
            const task = await new Task.findByPk(id)
            res.status(200).json(task)
        } catch (error) {
            next(error)
        }
    }

    static async changeStatus (req, res, next){
        try {
            const task = await new Task.update({
                category : req.body.category

            }, {where : {id}})
            res.status(201).json({task})
        } catch (error) {
            next(error)
        }
    }

    static async deleteTask (req, res, next){
        try {
            const task = await new Task.destroy(id)
            res.status(200).json(task)
        } catch (error) {
            next (error)
        }
    }

}

module.exports = TaskController
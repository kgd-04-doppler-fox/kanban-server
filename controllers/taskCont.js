const {Task} = require(`../models/index`)

class TaskController {
    
    static async allTask(req, res, next) {
        console.log('masuk alltask')
        try {
            const task = await Task.findAll({
                where: { UserId: +req.decodedUser.id },
                order: [[`id`, `ASC`]]
            })
            res.status(200).json({ task })
        }
        catch (err) {
            next(err)
        }

    }

    static async addTask(req, res, next) {
        const { title, description, category, status, due_date} = req.body

        try {
            const task = await Task.create(
                {
                    title,
                    description,
                    category,
                    status,
                    due_date, 
                    UserId: +req.decodedUser.id
                }
            )
            res.status(201).json({ task })
        }
        catch (err) {
            next(err)
        }

    }

    static async getByStatus(req, res, next) {
       const { status } = req.params
         
        try {
            const task = await Task.findOne(
                {
                    where: {
                        UserId: +req.decodedUser.id,
                        status: status
                    }
                }
            )
            if (task === null) {
                throw { name: `Error not found` } //handle to errorhandle
            }
            res.status(200).json({ task })
        }
        catch (err) {
            next(err)
        }

    }

    static async putTasks(req, res, next) {
        const { title, description, category, status, due_date } = req.body
        const { id } = req.params
        try {
            const task = await Task.update(
                {
                    title,
                    description,
                    category,
                    status,
                    due_date
                },
                {
                    where: {
                        UserId: +req.decodedUser.id,
                        id: id
                    },
                    returning: true
                }
            )
            if (task[0] === 0) {
                throw { name: `Error not found` }
            } else {
                res.status(200).json(task[1][0])
            }
        }
        catch (err) {
            next(err)
        }

    }

    static async patchTasks(req, res, next) { //maybe an error on status not being number
        const { status } = req.body
        const { id } = req.params
        try {
            const task = await Task.update(
                {
                    status
                },
                {
                    where: {
                        UserId: +req.decodedUser.id,
                        id: id
                    },
                    returning: true
                }
            )

            if (task[0] === 0) {
                throw { name: `Error not found` }
            } else {
                res.status(200).json(task[1][0])
            }
        }
        catch (err) {
            next(err)
        }

    }

    static async deleteTasks(req, res, next) {
        const { id } = req.params
        try {
            const task = await Task.destroy(
                {
                    where: {
                        UserId: +req.decodedUser.id,
                        id: id
                    }
                }
            )
            if (task === 0) {
                throw { name: `Error not found` }
            } else {
                res.status(200).json({ msg: 'task succes to delete' })
            }
        }
        catch (err) {
            next(err)
        }

    }


    
}

module.exports = TaskController
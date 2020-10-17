const router = require('express').Router()

const TaskController = require('../controllers/TaskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/', authentication, TaskController.getTasksByUserId)
router.post('/', authentication, TaskController.addTasksByUserId)
router.get('/:id', authentication, authorization, TaskController.findTaskById)
router.put('/:id', authentication, authorization, TaskController.editTasksByUserId)
router.patch('/:id', authentication, authorization, TaskController.changeTaskCategory)
router.delete('/:id', authentication, authorization, TaskController.deleteTasksByUserId)

module.exports = router
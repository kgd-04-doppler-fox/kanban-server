const router = require ('express').Router()
const TaskController = require ('../controllers/task')

const authentication =  require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/', authentication, TaskController.createTask)
router.get('/', authentication, TaskController.showAllTask)
router.get('/:id', authentication, TaskController.findTask)
router.put('/:id', authentication, authorization, TaskController.editTask)
router.patch('/:id', authentication, authorization, TaskController.changeStatusTask)
router.delete('/:id', authentication, authorization, TaskController.deleteTask)

module.exports = router
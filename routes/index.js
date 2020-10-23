const router = require('express').Router()
const UserController = require('../controllers/user-controller')
const TaskController = require('../controllers/task-controller')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.post('/googleSignIn', UserController.googleSignIn)
router.get('/tasks', authentication, TaskController.showAll)
router.post('/tasks',authentication, TaskController.postTask)
router.get('/tasks/:id', authentication, authorization, TaskController.findById)
router.patch('/tasks/:id', authentication, authorization, TaskController.editTask)
router.delete('/tasks/:id', authentication, authorization, TaskController.deleteById)

module.exports = router
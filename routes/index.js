const router = require ('express').Router()
const authentication = require ('../middleware/authentication')
const authorization = require ('../middleware/authorization')
const UserController = require ('../controllers/user')
const TaskController = require ('../controllers/task')

router.post     ('/register', UserController.register)
router.post     ('/login', UserController.login)
router.post     ('/googleSignIn', UserController.googleSignIn)   
router.get      ('/tasks', authentication, TaskController.getAllTask)
router.post     ('/tasks', authentication, TaskController.createTask)
router.get      ('/tasks/:id', authentication, authorization, TaskController.getTaskById)
router.patch    ('/tasks/:id', authentication, authorization, TaskController.changeStatus)
router.delete   ('/tasks/:id', authentication, authorization, TaskController.deleteTask)


module.exports = router
const router = require ('express').Router();
const UserController = require ('../controller/user-controller.js');
const TaskController = require ('../controller/task-controller');
const authentication = require ('../middlewawre/authentication.js');
const authorization = require ('../middlewawre/authorization.js');

router.post ('/register',UserController.register);
router.post ('/login',UserController.login);
router.use (authentication)
router.get ('/tasks',TaskController.findAll);
router.post ('/tasks',TaskController.createTask);
router.put ('/tasks/:id',authorization,TaskController.updateTaskPut);
router.patch ('/tasks/:id',authorization,TaskController.updateTaskPatch);
router.delete ('/tasks/:id',authorization,TaskController.deleteTask);

module.exports = router
const router = require(`express`).Router()
const TaskController = require(`../controllers/taskCont`)
const authentication = require(`../middlewares/authentication`)
const authorization = require(`../middlewares/authorization`)

router.use(authentication)
router.get(`/`, TaskController.allTask)
router.post(`/`, TaskController.addTask)

router.use(`/:id`,authorization)
router.get(`/:id/:status`, TaskController.getByStatus)
router.patch(`/:id`,TaskController.patchTasks)
router.put(`/:id`, TaskController.putTasks)
router.delete(`/:id`, TaskController.deleteTasks)



module.exports = router
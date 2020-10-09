const router = require('express').Router()
const UserController = require("../controllers/UserController")
const TaskController = require("../controllers/TaskController")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

router.post("/register", UserController.register)
router.post("/login", UserController.login)
router.post('/googleSignIn', UserController.googleSignIn)

router.use(authentication)
router.post("/tasks", TaskController.create)
router.get("/tasks", TaskController.findAll)
router.get("/tasks/:id", authorization, TaskController.findByPk)
router.put("/tasks/:id", authorization, TaskController.update)
router.patch("/tasks/:id", authorization, TaskController.updateCategory)
router.delete("/tasks/:id", authorization, TaskController.delete)

module.exports = router
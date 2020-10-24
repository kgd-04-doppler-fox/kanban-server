const router = require(`express`).Router()
const user = require(`./userRouter`)
const task = require(`./taskRouter`)

const Controller = require (`../controllers/controller`)

router.get(`/`, Controller.home)
router.use(`/tasks`, task)
router.use(`/users`, user)



module.exports = router
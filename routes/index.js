const router = require ('express').Router()


router.post     ('/register')
router.post     ('/login')   
router.get      ('/tasks')
router.post     ('/tasks')
router.put      ('/tasks')
router.delete   ('/tasks/:id')


module.exports = router
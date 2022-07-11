const router = require('express').Router()
const userController = require('../../controller/registerController')

router.post('/register', userController )

module.exports = router
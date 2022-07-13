const router = require('express').Router()
const cartController = require('../../controller/userController/cartController')

router.patch('/add', cartController )

module.exports = router
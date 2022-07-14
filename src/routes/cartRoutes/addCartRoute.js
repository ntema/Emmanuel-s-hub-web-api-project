const router = require('express').Router()
const cartController = require('../../controller/userController/cartController')
const verifyToken = require('../../middleware/authMiddleware/verifyToken')
const verifyAdminAndUserToken = require('../../middleware/authMiddleware/verifyUserAndAdmin')

router.patch('/add/:id',verifyToken,verifyAdminAndUserToken, cartController )

module.exports = router
const router = require('express').Router()
const createInventory = require('../../controller/inventoryController/createInventory')
const verifyToken = require('../../middleware/authMiddleware/verifyToken')
const verifyAdminAndUserToken = require('../../middleware/authMiddleware/verifyUserAndAdmin')

router.post('/create',verifyToken,verifyAdminAndUserToken, createInventory )

module.exports = router
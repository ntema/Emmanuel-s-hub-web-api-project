const router = require('express').Router()
const getAllInventories = require('../../controller/inventoryController/getAllInventories')
const verifyToken = require('../../middleware/authMiddleware/verifyToken')
const verifyAdminToken = require('../../middleware/authMiddleware/verifyAdmin')
const verifyAdminAndUserToken = require('../../middleware/authMiddleware/verifyUserAndAdmin')

router.get('/all',verifyToken,verifyAdminToken, getAllInventories )

module.exports = router
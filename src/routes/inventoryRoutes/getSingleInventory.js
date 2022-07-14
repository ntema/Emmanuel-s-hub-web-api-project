const router = require('express').Router()
const getSingleInventory = require('../../controller/inventoryController/getSingleInventory')
const verifyToken = require('../../middleware/authMiddleware/verifyToken')
const verifyAdminToken = require('../../middleware/authMiddleware/verifyAdmin')
const verifyAdminAndUserToken = require('../../middleware/authMiddleware/verifyUserAndAdmin')

router.get('/:id',verifyToken,verifyAdminAndUserToken, getSingleInventory )

module.exports = router
const router = require('express').Router()
const updateInventory = require('../../controller/inventoryController/updateInventory')
const verifyToken = require('../../middleware/authMiddleware/verifyToken')
const verifyAdminAndUserToken = require('../../middleware/authMiddleware/verifyUserAndAdmin')

router.put('/:id',verifyToken, verifyAdminAndUserToken, updateInventory )

module.exports = router
const router = require('express').Router()
const deleteInventory = require('../../controller/inventoryController/deleteInventory')
const verifyToken = require('../../middleware/authMiddleware/verifyToken')
const verifyAdminToken = require('../../middleware/authMiddleware/verifyAdmin')
const verifyAdminAndUserToken = require('../../middleware/authMiddleware/verifyUserAndAdmin')

router.delete('/:id', verifyToken,verifyAdminAndUserToken, deleteInventory )

module.exports = router
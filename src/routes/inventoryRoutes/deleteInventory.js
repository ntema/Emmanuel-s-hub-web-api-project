const router = require('express').Router()
const deleteInventory = require('../../controller/inventoryController/deleteInventory')

router.delete('/:id', deleteInventory )

module.exports = router
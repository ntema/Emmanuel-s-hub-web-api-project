const router = require('express').Router()
const updateInventory = require('../../controller/inventoryController/updateInventory')

router.put('/:id', updateInventory )

module.exports = router
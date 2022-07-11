const router = require('express').Router()
const getSingleInventory = require('../../controller/inventoryController/getSingleInventory')

router.get('/:id', getSingleInventory )

module.exports = router
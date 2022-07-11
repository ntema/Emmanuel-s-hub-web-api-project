const router = require('express').Router()
const createInventory = require('../../controller/inventoryController/createInventory')

router.post('/create', createInventory )

module.exports = router
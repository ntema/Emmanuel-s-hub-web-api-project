const router = require('express').Router()
const getAllInventories = require('../../controller/inventoryController/getAllInventories')

router.get('/all', getAllInventories )

module.exports = router
const Inventory = require('../../models/inventorySchema')

const getSingleInventory = async(req, res) => {    
        try {
            const inventory = await Inventory.findById(req.params.id)
        if(inventory){
           return res.status(200).json(inventory)
        }else{
            return res.status(400).json('inventory not found')
        }
        } catch (error) {
            console.log(error.message)
            return res.status(500).json(error)
        } 
}
module.exports = getSingleInventory
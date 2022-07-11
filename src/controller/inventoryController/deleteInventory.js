const Inventory = require('../../models/inventorySchema')
const deleteInventory = async(req,res) => { 
    try {
            const inventoryFound = await Inventory.findById(req.params.id)
             if(inventoryFound){
             await Inventory.findByIdAndDelete(req.params.id)
             return res.status(200).json('Inventory deleted')
      }else{
        res.status(401).json('Inventory not found')
     }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json(error)
    }
}

module.exports = deleteInventory
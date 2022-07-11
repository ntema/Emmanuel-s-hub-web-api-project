
const Inventory = require('../../models/inventorySchema')


const getAllInventories = async(req,res) => { 
    try {
        const getInventories = await Inventory.find()
        if(getInventories){
            return res.status(200).json(getInventories)
    }else{
        return res.status(400).json('no inventory found')
    }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json(error)
    }
}



module.exports = getAllInventories
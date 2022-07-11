const validateInventorySchema = require('../../utils/validateInventorySchema')
const Inventory = require('../../models/inventorySchema')

const createInventory = async(req, res) => {
try {
    let {body} = req
    console.log(body)
    const {error, value} = validateInventorySchema(body)
    if(error){
         return res.status(400).json({error:{message: error.details[0].message}})
    }
    const inventoryExist = await Inventory.findOne({name:body.name})
    if(inventoryExist){
        return res.status(400).json({error:{message:`Hey!! inventory with name ${body.name} already exist`}})
    }
    const newInventory =await Inventory.create(body)
        return  res.status(200).json({message:'inventory created successfully', newInventory})
    
} catch (error) {
     res.status(500).json(error)
}
}
module.exports = createInventory
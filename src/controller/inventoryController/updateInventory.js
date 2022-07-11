const Inventory = require('../../models/inventorySchema')
const updateInventory=  async(req,res) => { 
    try {
        let {body} = req
        const update = await Inventory.findByIdAndUpdate(req.params.id,
                  {
                    $set: body
                },
                { new:true})
        
          return res.status(200).json(update)
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json(error)
    }
}

module.exports = updateInventory
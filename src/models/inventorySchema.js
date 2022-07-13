const mongoose= require('mongoose')

const inventorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3
    },
    price:{
        type: Number,
        required:true,
        default:0
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    },
    addedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
},{
    timestamps:true
})

const populateUser = function (next){
    this.populate('addedBy', '_id firstname email')
    next()
}
inventorySchema.pre('find', populateUser).pre('findOne', populateUser).pre('findOneAndUpdate', populateUser)
module.exports = mongoose.model('Inventory', inventorySchema)
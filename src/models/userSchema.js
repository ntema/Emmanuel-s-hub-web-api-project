const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    cart:{
        type: [{product: {type: mongoose.Schema.Types.ObjectId, ref:'Inventory'},
        quantity:{
            type:Number,
            default: 1
        }}],
       
       
    }
},{
    timestamps:true
})

module.exports = mongoose.model('User', userSchema)
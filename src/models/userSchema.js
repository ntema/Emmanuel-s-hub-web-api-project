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
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
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

const populateUserCart = function (next){
    this.populate('cart')
    next()
}
userSchema.pre("find", populateUserCart)
  .pre("findOne", populateUserCart)
  .pre("findOneAndUpdate", populateUserCart);

module.exports = mongoose.model('User', userSchema)
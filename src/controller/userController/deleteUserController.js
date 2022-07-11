const User = require('../../models/userSchema')
const deleteUserController = async(req,res) => { 
    try {
            const userFound = await User.findById(req.params.id)
             if(userFound){
             await User.findByIdAndDelete(req.params.id)
             return res.status(200).json(`user deleted`)
      }else{
        res.status(401).json('user not found')
     }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json(error)
    }
}

module.exports = deleteUserController 
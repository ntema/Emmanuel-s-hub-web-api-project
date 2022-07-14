const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const port = process.env.PORT
const dbURI = process.env.MONGO_URI
const app = express()


//MongoDB connection
const conn = mongoose.connect(dbURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('MongoDB Connected')
})
.catch((err)=>{
    console.log(err)
})

//Middleware setup
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//routes
app.use('/api/auth', require('./routes/auth/register'))
app.use('/api/auth', require('./routes/auth/login'))
app.use('/api/inventory', require('./routes/inventoryRoutes/createInventory'))
app.use('/api/inventory', require('./routes/inventoryRoutes/getAllInventories'))
app.use('/api/inventory', require('./routes/inventoryRoutes/getSingleInventory'))
app.use('/api/inventory', require('./routes/inventoryRoutes/updateInventory'))
app.use('/api/inventory', require('./routes/inventoryRoutes/deleteInventory'))
app.use('/api/user', require('./routes/userRoutes/getAllUser'))
app.use('/api/user', require('./routes/userRoutes/getSingleUser'))
app.use('/api/user', require('./routes/userRoutes/updateUser'))
app.use('/api/user', require('./routes/userRoutes/deleteUser'))
app.use('/api/cart', require('./routes/cartRoutes/addCartRoute'))

app.use("*", (req, res) => {
    return res.status(404).json({ error: { messgage: "Route Not Found" } });
  });

app.listen(port,console.log(`server running on ${port}`))
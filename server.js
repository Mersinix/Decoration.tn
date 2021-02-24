// require express
const express = require('express')
const cors = require('cors')
// init express
const app = express()

// Create Port
const port = process.env.PORT || 5000
// Lanch the server
app.listen(port, (error) =>
  error ? console.log(error) : console.log(`app run in port ${port}`),
)

// require conncetDB
const connectDB = require('./config/connectDB.js')
// connectDB
connectDB()
app.use(cors())

// Middleware
app.use(express.json())
// require user Router
const authRouter = require('./routes/auth')
// Use routes
app.use('/api/auth', authRouter)
// require product Router
const productRouter=require('./routes/productRouter')
// Product routes
app.use('/api/products', productRouter)
// require category Router
const categoryRouter=require('./routes/categoryRouter')
// Product routes
app.use('/api/categorys', categoryRouter)
// require Store Router
const StoreRouter=require('./routes/StoreRouter')
// Store routes
app.use('/api/Stores', StoreRouter)
// require Shop Router
const ShopCardRouter=require('./routes/ShopCardRouter.js')
// Store routes
app.use('/api/ShopCard', ShopCardRouter)
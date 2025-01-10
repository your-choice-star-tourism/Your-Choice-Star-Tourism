import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/db.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// App configuration
const app = express()
const port = process.env.PORT || 4000

// Set up middleware first
app.use(express.json());
app.use(cors({
  origin: ['https://yourchoicestar.com', 'https://admin.yourchoicestar.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 600
}
))
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Connect to databases
connectDB()
connectCloudinary()

// API endpoints
app.get('/', (req,res)=>{
    res.send('API successfully connected!')
})

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// Start server
app.listen(port, ()=>{
    console.log('Server is runing on PORT: ' + port)
})

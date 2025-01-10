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
// In server.js, update your CORS configuration:
app.use(cors({
    origin: ['https://yourchoicestar.com', 'https://api.yourchoicestar.com', 'https://admin.yourchoicestar.com'],  // More permissive for testing
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    credentials: true
}));

// Increase payload limit for file uploads
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Connect to databases
connectDB()
connectCloudinary()

// API endpoints
app.get('/', (req,res)=>{
    res.send('API successfully connected!')
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://admin.yourchoicestar.com'); // Specify the allowed origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed methods
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token'); //Crucially, add 'token' here
  next();
});
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// Start server
app.listen(port, ()=>{
    console.log('Server is runing on PORT: ' + port)
})

import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App configuration
const app = express();
const port = process.env.PORT || 4000;

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// CORS setup for specific origins
app.use(cors());

// Handle preflight requests (OPTIONS)
app.options('*', cors()); // Allow all preflight OPTIONS requests

// Connect to databases
connectDB();
connectCloudinary();

// API endpoints
app.get('/', (req, res) => {
  res.send('API successfully connected!');
});

// Use the routers for each endpoint
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Start server
app.listen(port, () => {
  console.log('Server is running on PORT: ' + port);
});

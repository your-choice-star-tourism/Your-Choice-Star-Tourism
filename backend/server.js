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

// CORS setup for specific origins (using '*' for testing all origins)
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://yourchoicestar.com", "https://admin.yourchoicestar.com", "https://api.yourchoicestar.com");
  next();
});

// Handle preflight requests (OPTIONS)
app.options('*', cors()); // Allow all preflight OPTIONS requests

// Increase payload limit for file uploads
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

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

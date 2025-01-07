import express from "express"
import { 
  createProduct, 
  deleteProduct, 
  getAllProduct, 
  getProductbyId, 
  updateProductPrice,
  updateAddonPrice,  // New import
  deleteAddon        // New import
} from "../controllers/productController.js"
import upload from "../middleware/multer.js"
import adminAuth from "../middleware/adminAuth.js"

const productRouter = express.Router()

productRouter.post('/create', adminAuth, upload.any(), createProduct)
productRouter.post('/delete', adminAuth, deleteProduct)
productRouter.post('/single', getProductbyId)
productRouter.get('/list', getAllProduct)
productRouter.post('/update', updateProductPrice)
productRouter.post('/update-addon', updateAddonPrice)    // New route
productRouter.post('/delete-addon', deleteAddon)         // New route

export default productRouter
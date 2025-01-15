import express from "express"
import { 
  createProduct, 
  deleteProduct, 
  getAllProduct, 
  getProductbyId, 
  updateProduct,     // Changed from updateProductPrice
  updateAddon,       // Changed from updateAddonPrice
  deleteAddon,
  updateProductDetails
} from "../controllers/productController.js"
import upload from "../middleware/multer.js"
import adminAuth from "../middleware/adminAuth.js"

const productRouter = express.Router()

productRouter.post('/create', adminAuth, upload.any(), createProduct)
productRouter.post('/delete', adminAuth, deleteProduct)
productRouter.post('/single', getProductbyId)
productRouter.get('/list', getAllProduct)
productRouter.post('/update', updateProduct)          // This will now handle both name and price updates
productRouter.post('/update-addon', updateAddon)      // This will now handle both name and price updates
productRouter.post('/delete-addon', deleteAddon)
productRouter.post("/update-details", updateProductDetails);

export default productRouter
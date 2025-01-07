import express from 'express'
import   adminAuth   from '../middleware/adminAuth.js'
import  authUser  from '../middleware/auth.js'
import { allOrders, placeOrderStripe, UpdateStatus, userOrders, verifyStripe } from '../controllers/orderController.js'

const orderRouter = express.Router()

// for admin
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, UpdateStatus)

// for payement 
orderRouter.post('/place', authUser, placeOrderStripe)
orderRouter.post('/stripe', authUser, placeOrderStripe)

// verify payement
orderRouter.post('/verifystripe', authUser, verifyStripe)

// for user
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter
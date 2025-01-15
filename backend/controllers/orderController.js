import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';
import Stripe from 'stripe';

const currency = 'AED';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers;

        // Create the order
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'stripe',
            payment: false,
            date: Date.now(),
        };
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Create line items for Stripe
        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.isAddon ? `${item.name} (Add-on)` : item.name
                },
                unit_amount: Math.round(item.price * 100),
            },
            quantity: item.quantity
        }));

        const session = await stripe.checkout.sessions.create({
            line_items,
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            mode: 'payment',
        });

        if (session) {
            res.json({
                success: true,
                session_url: session.url,
                orderId: newOrder._id
            });
        } else {
            await orderModel.findByIdAndDelete(newOrder._id);
            res.json({
                success: false,
                message: 'Failed to create payment session'
            });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const verifyStripe = async (req, res) => {
    const { orderId, success } = req.body;
    
    try {
        const order = await orderModel.findById(orderId);
        
        if (!order) {
            return res.json({
                success: false,
                message: 'Order not found'
            });
        }

        const isSuccessful = success === 'true' || success === true;

        if (isSuccessful) {
            const updatedOrder = await orderModel.findByIdAndUpdate(
                orderId,
                {
                    payment: true,
                    status: 'Order Placed'
                },
                { new: true }
            );

            await userModel.findByIdAndUpdate(
                order.userId,
                { cartData: {} }
            );
            
            return res.json({ success: true });
        } else {
            await orderModel.findByIdAndDelete(orderId);
            return res.json({
                success: false,
                message: 'Payment was not completed'
            });
        }
    } catch (error) {
        console.error('Verification error:', error);
        return res.json({
            success: false,
            message: error.message
        });
    }
};

const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({
            userId,
            payment: true
        });
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const UpdateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: 'Status Updated' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { placeOrderStripe, verifyStripe, allOrders, userOrders, UpdateStatus };
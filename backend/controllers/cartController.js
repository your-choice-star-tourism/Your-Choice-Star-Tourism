import userModel from "../models/userModel.js";

const cleanCart = (cart) => {
    return Object.fromEntries(
        Object.entries(cart || {}).filter(([_, quantity]) => quantity > 0)
    );
};

const addToCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;

        const userData = await userModel.findById(userId);
        
        if (!userData.cartData) {
            userData.cartData = {};
        }

        if (userData.cartData[itemId]) {
            userData.cartData[itemId] += 1;
        } else {
            userData.cartData[itemId] = 1;
        }

        userData.cartData = cleanCart(userData.cartData);

        await userModel.findByIdAndUpdate(userId, { cartData: userData.cartData });
        res.json({ success: true, message: 'Added to cart' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const updateCart = async (req, res) => {
    try {
        const { userId, itemId, quantity } = req.body;

        const userData = await userModel.findById(userId);
        
        if (!userData.cartData) {
            userData.cartData = {};
        }

        if (quantity > 0) {
            userData.cartData[itemId] = quantity;
        } else {
            delete userData.cartData[itemId];
        }

        userData.cartData = cleanCart(userData.cartData);

        await userModel.findByIdAndUpdate(userId, { cartData: userData.cartData });
        res.json({ success: true, message: 'Your Cart has been updated' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;

        const userData = await userModel.findById(userId);
        const cartData = cleanCart(userData.cartData || {});
        
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addToCart, updateCart, getUserCart };
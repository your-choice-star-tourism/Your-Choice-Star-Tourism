import userModel from "../models/userModel.js"

const cleanCart = (cart) => {
    return Object.fromEntries(
        Object.entries(cart || {}).filter(([_, quantity]) => quantity > 0)
    );
}

const addToCart = async (req, res) => {
    try {
        const {userId, itemId, isChild = false} = req.body

        const userData = await userModel.findById(userId)
        const cartType = isChild ? 'child' : 'adult'
        
        if (!userData.cartData[cartType]) {
            userData.cartData[cartType] = {}
        }

        if (userData.cartData[cartType][itemId]) {
            userData.cartData[cartType][itemId] += 1
        } else {
            userData.cartData[cartType][itemId] = 1
        }

        // Clean the cart before saving
        userData.cartData[cartType] = cleanCart(userData.cartData[cartType])

        await userModel.findByIdAndUpdate(userId, {cartData: userData.cartData})
        res.json({success: true, message: 'Added to cart'})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const updateCart = async (req, res) => {
    try {
        const {userId, itemId, quantity, isChild = false} = req.body

        const userData = await userModel.findById(userId)
        const cartType = isChild ? 'child' : 'adult'

        if (!userData.cartData[cartType]) {
            userData.cartData[cartType] = {}
        }

        if (quantity > 0) {
            userData.cartData[cartType][itemId] = quantity
        } else {
            // Remove item if quantity is 0
            delete userData.cartData[cartType][itemId]
        }

        // Clean the cart before saving
        userData.cartData[cartType] = cleanCart(userData.cartData[cartType])

        await userModel.findByIdAndUpdate(userId, {cartData: userData.cartData})
        res.json({success: true, message: 'Your Cart has been updated'})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const getUserCart = async (req, res) => {
    try {
        const {userId} = req.body

        const userData = await userModel.findById(userId)
        const cartData = {
            adult: cleanCart(userData.cartData.adult),
            child: cleanCart(userData.cartData.child)
        }
        
        res.json({success: true, cartData})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export { addToCart, updateCart, getUserCart };
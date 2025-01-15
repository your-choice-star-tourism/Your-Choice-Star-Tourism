import React, { useContext } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import { CurrencyContext } from '../context/CurrencyContext';

const CartTotal = () => {
    const { 
        cartItems,
        books,
    } = useContext(ShopContext);

    const { 
        selectedCurrency, 
        convertPrice 
    } = useContext(CurrencyContext);

    const calculateMainItemsTotal = () => {
        let total = 0;
        for (const [itemId, quantity] of Object.entries(cartItems)) {
            if (!itemId.includes('_addon_')) {
                const item = books.find(p => p._id === itemId);
                if (item) {
                    total += item.price * quantity;
                }
            }
        }
        return convertPrice(total);
    };

    const calculateAddonsTotal = () => {
        let total = 0;
        for (const [itemId, quantity] of Object.entries(cartItems)) {
            if (itemId.includes('_addon_')) {
                const [mainItemId, , addonId] = itemId.split('_');
                const mainItem = books.find(p => p._id === mainItemId);
                if (mainItem && mainItem.addons) {
                    const addon = mainItem.addons.find(a => a._id === addonId);
                    if (addon) {
                        total += addon.price * quantity;
                    }
                }
            }
        }
        return convertPrice(total);
    };

    const calculateGrandTotal = () => {
        const mainTotal = calculateMainItemsTotal();
        const addonsTotal = calculateAddonsTotal();
        return (parseFloat(mainTotal) + parseFloat(addonsTotal)).toFixed(2);
    };

    return (
        <div className="w-full">
            {/* Main Title */}
            <Title title1={'Order '} title2={'Summary'} titleStyles={'h3'} />
            
            {/* Main Items Section */}
            <div className='mt-4'>
                <div className='flexBetween'>
                    <p className='text-gray-600'>Services Total:</p>
                    <p>{calculateMainItemsTotal()} {selectedCurrency}</p>
                </div>
                <hr className='mx-auto h-[2px] w-full bg-gray-900/10 my-4' />
                <div className='flexBetween mt-1'>
                    <p className='text-gray-600'>Addons Total:</p>
                    <p>{calculateAddonsTotal()} {selectedCurrency}</p>
                </div>
            </div>
            <hr className='mx-auto h-[2px] w-full bg-gray-900/10 my-4' />
            {/* Grand Total */}
            <div className='flexBetween pt-2'>
                <h3 className='text-xl font-bold'>Total Amount:</h3>
                <p className='text-xl font-bold'>
                    {calculateGrandTotal()} {selectedCurrency}
                </p>
            </div>
        </div>
    );
};

export default CartTotal;
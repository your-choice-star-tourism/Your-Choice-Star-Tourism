import React, { useContext } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
    const { 
        currency, 
        getCartAmount,
        getMainItemsTotal,
        getAddonsTotal,
        getAdultItemsTotal,
        getChildItemsTotal
    } = useContext(ShopContext);

    return (
        <div className="w-full">
            {/* Main Title */}
            <Title title1={'Order '} title2={'Summary'} titleStyles={'h3'} />
            
            {/* Main Items Section */}
            <div className='mt-4'>
                <div className='flexBetween'>
                    <p className='text-gray-600'>Adult Total:</p>
                    <p>{getAdultItemsTotal()} {currency}</p>
                </div>
                <hr className='mx-auto h-[2px] w-full bg-gray-900/10 my-4' />
                <div className='flexBetween mt-1'>
                    <p className='text-gray-600'>Child Total:</p>
                    <p>{getChildItemsTotal()} {currency}</p>
                </div>
            </div>
            <hr className='mx-auto h-[2px] w-full bg-gray-900/10 my-4' />
            {/* Grand Total */}
            <div className='flexBetween pt-2'>
                <h3 className='text-xl font-bold'>Total Amount:</h3>
                <p className='text-xl font-bold'>
                    {getCartAmount() === 0 ? "0" : getCartAmount()} {currency}
                </p>
            </div>
        </div>
    );
};

export default CartTotal;
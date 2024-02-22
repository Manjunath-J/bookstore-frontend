import React from 'react';
import "../styles/Cart.scss"

const Cart = () => {
    return (
        <div className='cart-div'>
            <div className='my-cart'></div>
            <div className='temp-div'>
                <span className='temp-text'>Address Details</span>
            </div>
            <div className='temp-div'>
            <span className='temp-text'>Order Summary</span>
            </div>
        </div>
    );
}

export default Cart;

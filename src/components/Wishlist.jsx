import React from 'react';
import "../styles/Wishlist.scss"
import WishCard from './WishCard';


const Wishlist = () => {
    return (
        <div className='w-cnt'>
            <div className='my-w'>
                <span className='w-text'>My Wishlist (02)</span>
            </div>
            <div className='w-card'>
                <WishCard />
            </div>
        </div>
    );
}

export default Wishlist;
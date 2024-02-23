import React from 'react';
import "../styles/Order.scss"
import { useNavigate } from 'react-router-dom';

const Order = () => {

    const navigate = useNavigate();

    const handleNavigate = ()=>{
        navigate("/home")
    }

    return (
        <div>
            <div className='order-page'>
                <span className='o-success'>Order Placed Successfully ......</span>
                <button className='continue-shop' onClick={handleNavigate}>CONTINUE SHOPPING</button>
            </div>
        </div>
    );
}

export default Order;

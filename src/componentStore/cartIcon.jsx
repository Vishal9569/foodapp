import React, { useState } from 'react';
import { IoCart } from 'react-icons/io5';


const CartIcon = ({ cartItems, handleOpenSidebar }) => {
    const hasItemsInCart = cartItems.some(item => item.qty > 0);

    return (
        <IoCart
            className={`Itemcart ${hasItemsInCart ? 'bounce' : ''}`}
            id='closebtn'
            onClick={handleOpenSidebar}
        />
    );
};

export default CartIcon;

import React, { useState } from 'react';
import { MdClose } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { decrementQty, incrementQty, removeFromCart } from '../redux/slices';
import CartIcon from './cartIcon';
import { useNavigate } from 'react-router';


const AddCart = () => {

    const [isopen, setIsOpen] = useState(false);

    const cartItems = useSelector((state) => state.cart.cart);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleOpenSidebar = () => {
        setIsOpen(true);


    };

    const handleCloseSidebar = () => {
        setIsOpen(false);

    };



    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleIncrementQuantity = (id) => {
        dispatch(incrementQty({ id, change: +1 }));
    };

    const handleDecrementQuantity = (id, qty) => {
        if (qty > 1) {
            dispatch(decrementQty({ id, change: -1 }));
        }
    };


    const handleCheckout = () => {
        if (cartItems.length > 0)
            navigate("/success");

        else {
            navigate("/");
        }
    };

    return (
        <>
            <div className={`AddCart ${isopen ? 'open' : ''}`}  >
                <div className="orderItem">
                    <span>My Order</span>
                    <MdClose className="closeIcon" onClick={handleCloseSidebar} />
                </div>
                <div className="orderList">
                    {cartItems.map((item, index) => (
                        <div key={index} className="orderCard">
                            <img src={item.img} alt={item.name} />
                            <div className="itemInfo">
                                <h4>{item.name}</h4>
                                <span>₹{item.price}</span>
                            </div>
                            <div className="quantityControl">
                                <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
                                <span>{item.qty}</span>
                                <button onClick={() => handleDecrementQuantity(item.id, item.qty)}>-</button>
                            </div>
                            <FaTrashAlt className="deleteIcon" onClick={() => handleRemoveItem(item.id)} />
                        </div>
                    ))}
                </div>
                <div className="itemDetail">
                    <h4>Items: {cartItems.length}</h4>
                    <h4>Total Amount: ₹{cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)}</h4>
                    <button className="AddtoCartbtn"
                        onClick={handleCheckout}
                    >Checkout</button>
                </div>
            </div>
            <CartIcon cartItems={cartItems} handleOpenSidebar={handleOpenSidebar} />


        </>
    );
};


export default AddCart;

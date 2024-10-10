import React, { useState } from 'react';
import { FaStar, FaTruck } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices';

const FoodCard = ({ name, id, img, rating, desc, price, handleToast }) => {
    const dispatch = useDispatch();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleAddToCart = () => {
        dispatch(addToCart({ id, name, img, rating, desc, price }));
        handleToast(name);
        setIsSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div>
            <div className="card">
                <img src={img} alt={name} />
                <div className='card-detail'>
                    <h2>{name.slice(0, 20)}</h2>
                    <span>{price}</span>
                </div>
                <p>{desc.slice(0, 40)}</p>
                <div className='card-detail-2'>
                    <span><FaStar className='ratinglogo' />{rating}</span>
                    <button onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>

        </div>
    );
};

export default FoodCard;

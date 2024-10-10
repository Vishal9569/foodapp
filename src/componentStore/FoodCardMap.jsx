import React from 'react';
import FoodData from './Foodlist';
import FoodCard from './FoodCard';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodCardMap = ({ searchTerm }) => {
    const category = useSelector((state) => state.category.category);
    const handleToast = (name) => toast.success(`Added ${name} to cart`);


    const filteredFoodData = FoodData.filter((food) => {

        if (category !== "All" && category !== food.category) {
            return false;
        }

        if (food.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
        }
        return false;
    });

    return (
        <div className='foodCardmap'>

            <Toaster className="toaster" />

            {filteredFoodData.length > 0 ? (
                filteredFoodData.map((food) => (
                    <FoodCard
                        key={food.id}
                        id={food.id}
                        name={food.name}
                        price={food.price}
                        desc={food.desc}
                        rating={food.rating}
                        img={food.img}
                        handleToast={handleToast}
                    />
                ))
            ) : (
                <p>No matching food items found.</p>
            )}
        </div>
    );
}

export default FoodCardMap;

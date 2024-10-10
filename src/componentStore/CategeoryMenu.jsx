import { useEffect, useState } from "react";
import FoodData from "./Foodlist";
import { setCategory } from "../redux/CategorySlice";
import { useDispatch, useSelector } from "react-redux";
const Categorybtn = () => {

    const [category, setCategoryState] = useState([]);

    const listUniqueCategory = () => {
        const uniqueCategory = [... new Set(FoodData.map((food) => food.category))];
        setCategoryState(uniqueCategory);
        console.log("Unique Categories: ", uniqueCategory);
    };

    useEffect(() => {
        listUniqueCategory();

    }, []);

    const dispatch = useDispatch();
    const seleteCategory = useSelector((state) => state.category.category);




    return <div className="menu">
        <h2> Find best food</h2>
        <div className="buttonDiv">
            <button onClick={() => dispatch(setCategory("All"))}>All</button>
            {category.map((category, index) => {
                return (
                    <button onClick={() => dispatch(setCategory(category))}
                        key={index}>
                        {category}
                    </button>
                )
            })}

        </div>
    </div>
}

export default Categorybtn;
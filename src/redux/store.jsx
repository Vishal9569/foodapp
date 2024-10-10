import { configureStore } from "@reduxjs/toolkit"
import Slices from "./slices";

import CategorySlice from "./CategorySlice"; // Importing the correct CategorySlice

const Store = configureStore({
    reducer: {
        cart: Slices,
        category: CategorySlice,
    }
});
export default Store;
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item);

            } else {
                state.cart.push({ ...action.payload, qty: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        incrementQty: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item) item.qty += action.payload.change;
        },
        decrementQty: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item && item.qty > 1) item.qty += action.payload.change;

        },
    },

});

export const { addToCart, removeFromCart, incrementQty, decrementQty } = CartSlice.actions;
export default CartSlice.reducer;

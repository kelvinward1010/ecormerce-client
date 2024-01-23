import { createSlice } from '@reduxjs/toolkit';

interface itemState {
    carts: any;
}

const initialState: itemState = {
    carts: [],
};

export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        additem: (state, action) => {
            const item_add = action.payload;
            const checkInCarts = state.carts.find((item: any) => item?.id == item_add?.id);
            if (checkInCarts){
                checkInCarts.quantity += item_add.quantity
            }else{
                state.carts.push(item_add);
            }
        },
    },
});

export const {
    additem,
} = cartSlice.actions;

export default cartSlice.reducer;

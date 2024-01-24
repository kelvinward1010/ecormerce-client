import { createSlice } from '@reduxjs/toolkit';

interface itemState {
    items_order: any;
}

const initialState: itemState = {
    items_order: null,
};

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        additem: (state, action) => {
            state.items_order = action.payload;
        },
        removeitem: (state, action) => {
            const item_add = action.payload;
            state.items_order.filter((item: any) => item?.id !== item_add?.id);
        },
    },
});

export const {
    additem,
} = orderSlice.actions;

export default orderSlice.reducer;

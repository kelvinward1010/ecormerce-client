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
        items_update: (state, action) => {
            state.items_order = action.payload;
        },
    },
});

export const {
    items_update,
} = orderSlice.actions;

export default orderSlice.reducer;

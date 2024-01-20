import { createSlice } from '@reduxjs/toolkit';


interface itemState {
    items: any;
    item_detail: any;
}

const initialState: itemState = {
    items: null,
    item_detail: null,
};

export const itemSlice = createSlice({
    name: 'searchitems',
    initialState,
    reducers: {
        searchitems: (state, action) => {
            state.items = action.payload;
        },
        getallitems: (state, action) => {
            state.items = action.payload;
        },
        detailitems: (state, action) => {
            state.item_detail = action.payload.data;
        },
    },
});

export const {
    searchitems,
    getallitems,
    detailitems,
} = itemSlice.actions;

export default itemSlice.reducer;

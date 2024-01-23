import { createSlice } from '@reduxjs/toolkit';


interface itemState {
    items: any;
}

const initialState: itemState = {
    items: null,
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
    },
});

export const {
    searchitems,
    getallitems,
} = itemSlice.actions;

export default itemSlice.reducer;

import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
}

const openSearchbarSlice = createSlice({
    name: 'openSearchbar',
    initialState,
    reducers: {
        toggleSearchbar: (state) => {
            state.isOpen = !state.isOpen;
        },
        closeSearchbar: (state) => {
            state.isOpen = false;
        },
    },
});

export const { toggleSearchbar, closeSearchbar } = openSearchbarSlice.actions;
export default openSearchbarSlice.reducer;
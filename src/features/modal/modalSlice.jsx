import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // 여닫는 상태
    isOpen: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        // 1. 모달 여는 action 
        openModal: (state, action) => {
            state.isOpen = true;
        },

        // 2. 모달 닫는 action
        closeModal: (state, action) => {
            state.isOpen = false;
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
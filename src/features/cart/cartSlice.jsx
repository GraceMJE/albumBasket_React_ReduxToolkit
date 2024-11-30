import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../constants/cartItems";

// 장바구니 초기상태!
const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // ** 액션 정의! **
    reducers: {
        // 1. 구매앨범 수량 증가
        increase: (state, { payload }) => {
            // console.log(state, action.payload)
            
            // 1) 내가 클릭한 음반의 id를 가져옴
            const itemId = payload;
            // 2) 가져온 id를 통해서 전체음반 중에 내가 클릭한 id와 같은 음반 찾기
            const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
            
            // console.log(item);

            // 3) 내가 클릭한 아이템의 수량 증가
            item.amount += 1;
        },

        // 2. 구매앨범 수량 감소
        decrease: (state, { payload }) => {
            // 1) 내가 클릭한 음반의 id를 가져옴
            const itemId = payload;
            // 2) 가져온 id를 통해서 전체음반 중에 내가 클릭한 id와 같은 음반 찾기
            const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
            // 3) 내가 클릭한 아이템의 수량 감소
            item.amount -= 1;
        },

        // 3. 아이템 제거(수량: 0)
        removeItem: (state, { payload }) => {
            // 내가 클릭한 음반의 id를 가져옴
            const itemId = payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);

        },

        // 4. 카트 초기화
        clearCart: (state) => {
            state.cartItems = [];
        },

        // 5. 총계 값 계산 SUM(각각의 아이템 * 수량)
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            })

            state.amount = amount;
            state.total = total;
        }
    }
})

export const { increase, decrease, removeItem, clearCart, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer
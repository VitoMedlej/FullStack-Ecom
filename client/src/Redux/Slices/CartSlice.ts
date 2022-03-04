import {createSlice} from '@reduxjs/toolkit'

export interface CartState {
    isCartOpen : boolean
}

const initialState : CartState = {
    isCartOpen: false
}

export const CartSlice = createSlice({
    name: 'isCartOpen',
    initialState,
    reducers: {

        toggleCartState: (state, action) => {

            state.isCartOpen = action.payload 
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    toggleCartState
} = CartSlice.actions

export default CartSlice.reducer
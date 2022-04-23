import {createSlice} from '@reduxjs/toolkit'
import { ICart } from '../../Helpers/Hooks/CartHandlingHooks/HandleAddToCartHook'
import { IformData } from '../../Helpers/Hooks/CreateProductHook'

const LocalCart : ICart = {

    items : [],
    userId : null,
    bill : 0
}
const initialState  = {

    LocalCart
}

export const LocalCartSlice = createSlice({
    name: 'LocalCart',
    initialState,
    reducers: {
        saveLocalCart : (state,action) => {
            state.LocalCart = action.payload
      
        },
 
     
       
    }
})

export const {
    saveLocalCart,
    
} = LocalCartSlice.actions

export default LocalCartSlice.reducer
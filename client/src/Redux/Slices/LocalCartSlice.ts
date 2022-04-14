import {createSlice} from '@reduxjs/toolkit'
import { ICart } from '../../Helpers/Hooks/CartHandlingHooks/HandleAddToCartHook'
import { IformData } from '../../Helpers/Hooks/CreateProductHook'


const initialState  = {
    LocalCart : {

        items : [],
        userId : null,
        bill : 0
    }
    
}

export const LocalCartSlice = createSlice({
    name: 'LocalCart',
    initialState,
    reducers: {
        saveLocalCart : (state,action) => {
            state.LocalCart = action.payload
            console.log('state: ', state);
            console.log(' action.payload: ',  action.payload);
        }
     
       
    }
})

export const {
    saveLocalCart
} = LocalCartSlice.actions

export default LocalCartSlice.reducer
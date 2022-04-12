import {createSlice} from '@reduxjs/toolkit'
import { IformData } from '../../Helpers/Hooks/CreateProductHook'

const defaultProductValues = {
    title: "",
    sizes: [],
    colors: [''],
    price: 0,
    images: [''],
    inStock: false,
    weight: '',
    style: '',
    country: '',
    description: "",
    category: '',
    id:'',
    _id:'',
    specifications: [''],
    Manufacturer: "",
    reviews: [],
    quantity: 1,
}

// interface IdefaultProductValues  {
//     productStateArray : {
//         title: string;
//         sizes: never[];
//         colors: string[];
//         price: string;
//         images: string[];
//         inStock: boolean;
//         weight: string;
//         style: string;
//         country: string;
//         description: string;
//         category: string;
//         id: string;
//         specifications: string[];
//         Manufacturer: string;
//         reviews: never[];
//     }
   
// }

const initialState  = {
    productStateArray : [defaultProductValues]
}

export const ProductsSlice = createSlice({
    name: 'productStateArray',
    initialState,
    reducers: {

        saveProductsArray: (state,action) => {
            state.productStateArray = [...action.payload]
        }
       
    }
})

// Action creators are generated for each case reducer function
export const {
    saveProductsArray
} = ProductsSlice.actions

export default ProductsSlice.reducer
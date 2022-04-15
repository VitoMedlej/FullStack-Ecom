import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveLocalCart } from "../../../Redux/Slices/LocalCartSlice";
import { RootState } from "../../../Redux/Store";
import { IformData } from "../CreateProductHook";

const HandleCartStateHook = () => {
    const dispatch = useDispatch()
    const [productsArray,setProductsArray] = useState<IformData[] | null>(null)
    
    const ReduxLocalCart = useSelector((state : RootState) => state.LocalCart.LocalCart)

    useEffect(() => {
        const localStorageCart = localStorage.getItem('Cart')
        if (  ReduxLocalCart.items.length < 1 && localStorageCart) {

            dispatch(saveLocalCart(JSON.parse(localStorageCart))); 
        }
        },[])

    useEffect(() => {
       
       if (ReduxLocalCart) setProductsArray(ReduxLocalCart.items)
    },[ReduxLocalCart])
    
    return {productsArray}
}

export default HandleCartStateHook
import { useDispatch } from "react-redux";
import { saveLocalCart } from "../../../Redux/Slices/LocalCartSlice";
import { IformData } from "../CreateProductHook";
import { billCalculator } from "./HandleAddToCartHook";

const HandLeItemRemoveHook = () => {
    const dispatch = useDispatch()

    const HandleRemoveItem = (id : string | undefined) => {
        let localStorageCart = localStorage.getItem('Cart')
  
        if (id && localStorageCart) {
            let productsArray = JSON.parse(localStorageCart)
           
  
            let filteredProductsArray = productsArray
                .items
                .filter((item : IformData) => item._id !== id)
  
            const filteredCart = {
                ...productsArray,
                bill: billCalculator(filteredProductsArray),
                items: filteredProductsArray
            }
            localStorage.setItem('Cart', JSON.stringify(filteredCart))
            dispatch(saveLocalCart(filteredCart))
  
        }
    }
    return {HandleRemoveItem}
}

export default HandLeItemRemoveHook
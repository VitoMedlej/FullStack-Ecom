import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleBackDropState } from "../../../Redux/Slices/BackDropSlice"
import { toggleCartState } from "../../../Redux/Slices/CartSlice"
import { saveLocalCart } from "../../../Redux/Slices/LocalCartSlice"
import { RootState } from "../../../Redux/Store"
import {IformData} from "../CreateProductHook"

export interface ICart {
    items : IformData[],
    userId : string | null,
    bill : number
}


const HandleAddToCartHook = () => {
    const dispatch = useDispatch()
  
    const [userID,setUserID] = useState<null | string>(null)
    useEffect(() => {
    let LoggedInUser = localStorage.getItem('user')
       if (LoggedInUser) {
           let userid = JSON.parse(LoggedInUser).id
           setUserID(userid)
       }
       else setUserID(null)
    },[])

    const billCalculator = (array : ICart["items"]) => {
        let bill = 0
        for (let i = 0; i < array.length; i++) {
            bill += array[i].price * array[i].quantity
        }
        return bill
    }
    const HandleProductAdd = async(SelectedSize : string, section : string | undefined, id : string | undefined, GetProductById : (category : string, id : string) => Promise < any >) => {
        try {

        if (section && id) {

            const response = await GetProductById(section, id)
            if (!response[0].inStock) {
                throw new Error('Out of stock')
                
            }
            response[0].quantity = 1
            let sizesArray = response[0].sizes;
            let LocalCart = localStorage.getItem('Cart')

            if (!LocalCart && response) {

                let size = sizesArray.find((item : string) => item == SelectedSize)
                response[0].sizes = `${size}`
                const Cart : ICart = {
                    items: [...response],
                    bill: 0,
                    userId: `${userID}`
                }

                Cart.bill = billCalculator(Cart.items)
                localStorage.setItem('Cart', JSON.stringify(Cart))
                dispatch(saveLocalCart(Cart))
                dispatch(toggleCartState(true));
                dispatch(toggleBackDropState(true))
                return
            }

            if (LocalCart) {

                let parsedLocalCart = JSON.parse(LocalCart)
                const CartItems = parsedLocalCart.items
                for (let i = 0; i < CartItems.length; i++) {

                    if (response[0]._id === CartItems[i]._id) {
                        CartItems[i].quantity += 1
                        parsedLocalCart.bill = billCalculator(CartItems)
                        localStorage.setItem('Cart', JSON.stringify(parsedLocalCart))
                        dispatch(saveLocalCart(parsedLocalCart))
                        return
                    }

                }
                let size = sizesArray.find((item : string) => item == SelectedSize)
                response[0].sizes = `${size}`

                parsedLocalCart
                    .items
                    .push(...response)

                parsedLocalCart.bill = billCalculator(CartItems)
                localStorage.setItem('Cart', JSON.stringify(parsedLocalCart))
                dispatch(saveLocalCart(parsedLocalCart))
                dispatch(toggleCartState(true));
                dispatch(toggleBackDropState(true))
            }
        }
    }

    catch(err) {
        console.log('err: ', err);
        throw err
    }
    }
    return {HandleProductAdd}
}

export default HandleAddToCartHook
import {IformData} from "../CreateProductHook"

interface ICart {
    items : IformData[],
    userId : string,
    bill : number
}

const HandleAddToCartHook = () => {
    const billCalculator = (array : ICart["items"]) => {
        let bill = 0
        for (let i = 0; i < array.length; i++) {
            bill += array[i].price * array[i].quantity
        }
        return bill

    }
    const HandleProductAdd = async(section : string | undefined,
         id : string | undefined, 
         GetProductById : (category : string, id : string) => Promise < any >) => {

        if (section && id ) {

        const response = await GetProductById(section, id)
        response[0].quantity = 1
        let LocalCart = localStorage.getItem('Cart')

        if (!LocalCart && response) {

            const Cart : ICart = {
                items: [...response],
                bill: 0,
                userId: `${id}`
            }

            Cart.bill = billCalculator(Cart.items)
            localStorage.setItem('Cart', JSON.stringify(Cart))
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
                    return
                }

            }

            parsedLocalCart
                .items
                .push(...response)
            console.log('parsedLocalCart.items: ', parsedLocalCart.items);

            parsedLocalCart.bill = billCalculator(CartItems)
            localStorage.setItem('Cart', JSON.stringify(parsedLocalCart))
        }
        }

    }
    return { HandleProductAdd}
}

export default HandleAddToCartHook
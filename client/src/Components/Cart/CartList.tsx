import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import HandleCartStateHook from "../../Helpers/Hooks/CartHandlingHooks/HandleCartStateHook"
import CTypo from "../CustomMui/CTypo"
import CartProduct from "./CartProduct/CartProduct"

const CartList = () => {
    const {productsArray} = HandleCartStateHook()
    return (
        <Grid
            item
            xs={12}
            lg={8}
            sx={{
            mb: {
                xs: '3em'
            }
        }}>

            <CTypo
                sx={{
                mt: '0'
            }}
                fontSize={{
                xs: '1.4em'
            }}
                text='Your Bag'/>

            <Box
                sx={{
                width: {
                    xs: '100%',
                    md: '95%'
                },
                mt: '2em'
            }}>

                
            {
                productsArray && productsArray.length > 0 ?
                productsArray.map(product => {

                  return  <CartProduct
                    price={product.price}
                    id={product._id}
                    category={product.category}
                    img={product.images[0] || product.images[1]}
                    title={product.title}
                    qty={product.quantity}
                    
                    description={product.description}
                  
                  key={product._id}/> 
                })
                : 
                <CTypo fontWeight='300' text={` you haven't added any products yet!`}></CTypo>
            }
          
            </Box>

        </Grid>
    )
}

export default CartList
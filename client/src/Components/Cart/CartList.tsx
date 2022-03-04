import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import CTypo from "../CustomMui/CTypo"
import CartProduct from "./CartProduct/CartProduct"

const CartList = () => {
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

                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
            </Box>

        </Grid>
    )
}

export default CartList
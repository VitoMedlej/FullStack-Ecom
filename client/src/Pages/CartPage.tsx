import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import CBox from "../Components/CustomMui/CBox"
import CartSummary from "../Components/Cart/CartSummary";
import CartList from "../Components/Cart/CartList";


const CartPage = () => {
  

    return (
        <Box>
            <CBox className='limit'>
                <Grid container sx={{
                    mt: '2em'
                }}>
                    
                   <CartList/>
                  <CartSummary/>
                </Grid>
            </CBox>
        </Box>
    )
}

export default CartPage
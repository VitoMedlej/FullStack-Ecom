import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import CButton from "../CustomMui/CButton"
import CTypo from "../CustomMui/CTypo"

const CartSummary = () => {

    let deliveryCost = 5
    let itemsCost = 120
    let totalCost = itemsCost + deliveryCost
    totalCost = totalCost / 11 + totalCost
    let endCost = totalCost.toFixed(2)

    return (
        <Grid item xs={12} md={4} lg={3}>
            <CTypo
                sx={{
                mt: '0'
            }}
                fontSize={{
                xs: '1.4em'
            }}
                text='Summary'/>

            <Box
                className='flexed'
                sx={{
                justifyContent: 'space-between',
                mt: '.5em'
            }}>
                <CTypo color='#4f4f4f' text='Subtotal '/>
                <CTypo color='#4f4f4f' text='120$'/>
            </Box>
            <Box
                className='flexed'
                sx={{
                justifyContent: 'space-between',
                mt: '.5em'
            }}>
                <CTypo color='#4f4f4f' text='Delivery '/>
                <CTypo color='#4f4f4f' text='5$'/>
            </Box>
            <Box
                className='flexed'
                sx={{
                justifyContent: 'space-between',
                mt: '.5em'
            }}>
                <CTypo color='#4f4f4f' text='Taxes '/>
                <CTypo color='#4f4f4f' text='11%'/>
            </Box>

            <Box
                className='flexed'
                sx={{
                justifyContent: 'space-between',
                borderBottom: '1px solid #4f4f4f52',
                borderTop: '1px solid #4f4f4f52',
                mt: '1em'
            }}>
                <CTypo
                    sx={{
                    my: '.5em'
                }}
                    fontWeight='500'
                    text='Total '/>
                <CTypo
                    sx={{
                    my: '.5em'
                }}
                    fontWeight='500'
                    text={`$${endCost}`}/>
            </Box>
            <Box>
                <CButton
                    margin='3em'
                    hover={{
                    color: 'black',
                    background: 'transparent',
                    border: '1px solid black'
                }}
                    color='white'
                    background='black'
                    text='Checkout'
                    sx={{
                    width: '100%'
                }}></CButton>

                <CButton
                    margin='1em'
                    color='black'
                    hover={{
                    background: 'black',
                    color: 'white',
                    border: '1px solid black'
                }}
                    text='Clear Cart'
                    sx={{
                    border: '1px solid',
                    background: 'transparent',
                    width: '100%'
                }}></CButton>
            </Box>
        </Grid>
    )
}

export default CartSummary
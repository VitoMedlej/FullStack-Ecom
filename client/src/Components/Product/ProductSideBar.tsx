import CButton from "../CustomMui/CButton"
import CTypo from "../CustomMui/CTypo"
import SizeSelect from "./SizeSelect"
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const ProductSideBar = () => {
    return (
        <Grid
            item
            xs={12}
            md={4}
            sx={{
            pt: {
                xs: '1em',
                md: '0px'
            },
            pl: {
                md: '20px'
            }
        }}>
            <CTypo
                sx={{
                mt: '0px'
            }}
                fontWeight="400"
                fontSize={{
                xs: '1.4em',
                sm: '1.6em',
                md: '1.8em'
            }}
                text='ULTRABOOST 22 SHOES'/>
            <CTypo
                sx={{
                mt: '0px'
            }}
                color='green'
                fontWeight='500'
                text='$120'/>
            <CTypo
                sx={{
                pb: '1em'
            }}
                fontWeight='300'
                color='gray'
                text='Sign up to get up to 15% off!'/>

            <Box>
                <CTypo
                    color='gray'
                    sx={{
                    mt: '2em'
                }}
                    fontWeight='300'
                    text='Select Size'/>
                <SizeSelect/>
            </Box>
            <Box
                sx={{
                mt: '2em',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <CButton
                    hover={{
                    color: 'black',
                    background: 'white',
                    border: '1px solid black'
                }}
                    margin={'0'}
                    color='white'
                    background='black'
                    borderRadius={'0px'}
                    sx={{
                    width: '100%'
                }}
                    text={'ADD TO CART'}/>
                <IconButton
                    sx={{
                    color: '#3d3d3d',
                    m: '4px'
                }}
                    type='button'>
                    <FavoriteBorderOutlinedIcon/>
                </IconButton>

            </Box>

        </Grid>
    )
}

export default ProductSideBar
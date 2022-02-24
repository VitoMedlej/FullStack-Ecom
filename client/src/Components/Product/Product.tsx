import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CBox from '../CustomMui/CBox';
import CTypo from '../CustomMui/CTypo';
import SizeSelect from './SizeSelect';
import CButton from '../CustomMui/CButton';
import {Link, useParams} from 'react-router-dom';
import BreadCrumbsLink from './BreadCrumbsLink';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ProductImageSlider from './ProductImageSlider';
import IconButton from '@mui/material/IconButton';
import ProductDetails from './ProductDetails';
import ProductSpec from './ProductSpec';
import ProductDesc from './ProductDesc';
import {Scrollbar} from 'swiper';
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const img = require('../../Helpers/Images/shoes.jfif')

const Product = () => {
    const {section} = useParams()
    SwiperCore.use([Autoplay]);

    return (
        <Box>

            <CBox className='limit'>
                <BreadCrumbsLink section={`${section}`}/>
                <Grid container>

                    <ProductImageSlider/>

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
                    <Box>

                        <ProductDesc/>
                        <ProductSpec/>
                        <Grid md={8} item xs={12}>
                            <CTypo
                                fontWeight='500'
                                fontSize={{
                                xs: '1.2em',
                                sm: '1.4em',
                                md: '1.5em'
                            }}
                                sx={{
                                mt: {
                                    xs: '3.5em',
                                    md: '2em'
                                }
                            }}
                                text='Product Details'/>

                            <ProductDetails/>
                        </Grid>
                        <Grid md={8} xs={12} item>
                            <CTypo
                                fontWeight='500'
                                fontSize={{
                                xs: '1.2em',
                                sm: '1.4em',
                                md: '1.5em'
                            }}
                                sx={{
                                mt: {
                                    xs: '3.5em',
                                    md: '2em'
                                }
                            }}
                                text='Ratings and reviews '/>

                            <Box
                                sx={{
                                width: '100%',
                                display: 'flex',
                                mt: '1em'
                            }}>
                                <Box
                                    sx={{
                                    width: '30%'
                                }}>
                                    <CTypo text={'Reviews (0)'}/>
                                    <Box
                                        sx={{
                                     
                                      
                                        padding:'5px 15px 15px 0',
                                        mt:'5px'
                                    }}className='flexed'>
                                        <StarOutlinedIcon sx={{color:'#FDCC0D'}}/>
                                        <StarOutlinedIcon/>
                                        <StarOutlinedIcon/>
                                        <StarOutlinedIcon/>
                                        <StarOutlinedIcon/>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                    width: '70%'
                                }}>gas125125gf</Box>
                            </Box>

                        </Grid>

                    </Box>
                </Grid>
            </CBox>
        </Box>
    )
}

export default Product
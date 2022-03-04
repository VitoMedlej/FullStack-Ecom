import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CBox from '../CustomMui/CBox';
import CTypo from '../CustomMui/CTypo';
import {Link, useParams} from 'react-router-dom';
import BreadCrumbsLink from './BreadCrumbsLink';
import ProductImageSlider from './ProductImageSlider';
import ProductDetails from './ProductDetails';
import ProductSpec from './ProductSpec';
import ProductDesc from './ProductDesc';
import SwiperCore, {Autoplay} from 'swiper'
import ProductReview from './ProductReview';
import ProductSideBar from './ProductSideBar';

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

                <ProductSideBar/>
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

                            <ProductReview/>

                        </Grid>

                    </Box>
                </Grid>
            </CBox>
        </Box>
    )
}

export default Product
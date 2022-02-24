import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
const img = require('../../Helpers/Images/shoes.jfif')

const ProductImageSlider = () => {
    return (
        <Grid md={8} item xs={12}>

            <Swiper
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <Box sx={{
                        height: '500px'
                    }}>
                        <img className='img' src={img} alt=""/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{
                        height: '500px'
                    }}>
                        <img className='img' src={img} alt=""/>
                    </Box>
                </SwiperSlide>

            </Swiper>

        </Grid>
    )
}

export default ProductImageSlider
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
import {Skeleton} from '@mui/material';
const img = require('../../Helpers/Images/shoes.jfif')

interface IProductImageSlider {
    isLoading : boolean
}
const ProductImageSlider = ({isLoading} : IProductImageSlider) => {
    return (
        <Grid md={8} item xs={12}>

            {!isLoading
                ? <Swiper
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper">
                        <SwiperSlide>
                            <Box
                                sx={{
                                height: '500px'
                            }}>
                                <img className='img' src={img} alt=""/>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box
                                sx={{
                                height: '500px'
                            }}>
                                <img className='img' src={img} alt=""/>
                            </Box>
                        </SwiperSlide>

                    </Swiper>
                : <Skeleton
                    sx={{
                    transform: 'scaleY(1)',
                    width: {
                        xs: '100%',
                        md: '100%'
                    },
                    height: '500px'
                }}/>
}
        </Grid>
    )
}

export default ProductImageSlider
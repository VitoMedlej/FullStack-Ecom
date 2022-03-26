import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
import {Skeleton} from '@mui/material';
import CTypo from '../CustomMui/CTypo';
import CButton from '../CustomMui/CButton';
import { useState } from 'react';
// const img = require('../../Helpers/Images/shoes.jfif')

interface IProductImageSlider {
    isLoading : boolean
    imagesArray : string[] | undefined
}
const ProductImageSlider = ({isLoading, imagesArray} : IProductImageSlider) => {
    const [className,setClassName] = useState('img')
    return (
        <Grid md={8} item xs={12}>
            {!isLoading
                ? <Swiper
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper">

                        {imagesArray && imagesArray.map((img : string) => {

                            if (img) 
                                return <SwiperSlide key={`${img}`}>
                                    <Box
                                        sx={{
                                        height: {
                                            xs: '500px',
                                            md: '530px'
                                        }
                                    }}>
                                        <img className={`${className}`} src={`${img && img}`} alt=""/>
                                    </Box>
                                </SwiperSlide>
                        })}

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
            <CButton
            onClick={()=>setClassName(className=== 'img'? 'img2' : 'img')}
            hover={{background:'none',boxShadow:'none'}}
            borderRadius='0'
            sx={{
                border:'1px solid #8080804f',
                boxShadow: 'none'
            }}
                margin='0'
                text='Switch view'></CButton>

        </Grid>
    )
}

export default ProductImageSlider
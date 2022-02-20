import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CBox from '../CustomMui/CBox';
import CTypo from '../CustomMui/CTypo';
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from 'react';

import {Pagination, Navigation} from "swiper";
import SizeSelect from './SizeSelect';
const img = require('../../Helpers/Images/shoes.jfif')
const Product = () => {

    return (
        <Box>

            <CBox className='limit'>
                <CTypo text='Home / Shoes '/>
                <Grid container>

                    <Grid md={8} item xs={12}>

                        <Swiper
                            pagination={{
                            type: "progressbar"
                        }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper">
                            <SwiperSlide>
                                <Box
                                    sx={{
                                    border: '1px solid',
                                    height: '500px'
                                }}>
                                    <img className='img' src={img} alt=""/>
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box
                                    sx={{
                                    border: '1px solid',
                                    height: '500px'
                                }}>
                                    <img className='img' src={img} alt=""/>
                                </Box>
                            </SwiperSlide>

                        </Swiper>

                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                        height: '100vh',
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
                            xs: '1.2em',
                            sm: '1.4em',
                            md: '1.7em'
                        }}
                            text='ULTRABOOST 22 SHOES'/>
                        <CTypo sx={{mt:'0px'}} color='green' fontWeight='500' text='$120'/>
                        <Box>
                        <CTypo color='gray' sx={{mt:'2em'}} fontWeight='300' text='Select Size'/>
                        <SizeSelect/>
                        </Box>
                    </Grid>
                </Grid>
            </CBox>
        </Box>
    )
}

export default Product
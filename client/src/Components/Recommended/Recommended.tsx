import Box from '@mui/material/Box';
import CBox from '../CustomMui/CBox';
import CTypo from '../CustomMui/CTypo';
import RecoCard from './RecoCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper'

import {Scrollbar} from "swiper";
import '../../Styles/Swiper.css'

const Recommended = () => {
    SwiperCore.use([Autoplay]);

    return (
        <Box>
            <CBox className='limit'>
                <CTypo
                    fontWeight='500'
                    sx={{
                    pt: '5em'
                }}
                    fontSize={{
                    xs: '1.2em',
                    sm: '1.4em',
                    md: '1.5em'
                }}
                    text='Popular Right Now'></CTypo>

                <Box
                    sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>

                    <Swiper
                        scrollbar={{
                        hide: true
                    }}
                        modules={[Scrollbar]}
                        slidesPerView="auto"
                        breakpoints={{
                        900: {
                            slidesPerView: 3
                        },
                        700: {
                            slidesPerView: 2
                        },
                        500: {
                            slidesPerView: 2
                        },
                        100: {
                            slidesPerView: 1
                        }
                    }}
                        autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": true
                    }}>
                        <SwiperSlide>

                            <RecoCard link='/'/>
                        </SwiperSlide>
                        <SwiperSlide>

                            <RecoCard link='/'/>
                        </SwiperSlide>
                        <SwiperSlide>

                            <RecoCard link='/'/>
                        </SwiperSlide>
                        <SwiperSlide>

                            <RecoCard link='/'/>
                        </SwiperSlide>
                    </Swiper>

                </Box>
            </CBox>

        </Box>
    )
}

export default Recommended
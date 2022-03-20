import Box from '@mui/material/Box';
import CBox from '../CustomMui/CBox';
import CTypo from '../CustomMui/CTypo';
import RecoCard from './RecoCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper'
import {Scrollbar} from "swiper";
import '../../Styles/Swiper.css'
import GetFeaturedHook from '../../Helpers/Hooks/GetFeaturedHook';
import {useEffect} from 'react';
import {IformData} from '../../Helpers/Hooks/CreateProductHook';

const Recommended = () => {
    const {FeaturedArray, isLoading, GetFeaturedProducts} = GetFeaturedHook();

    useEffect(() => {
        GetFeaturedProducts()
        
    }, [])
 
    
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
                    {!isLoading && !FeaturedArray && <CTypo color='#ff0000c2' text='Failed to load products ,Please try again.'></CTypo> }
                    {isLoading && !FeaturedArray && <CTypo text='Loading Data...'></CTypo>}

                    {!isLoading && FeaturedArray && <Swiper
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
                        600: {
                            slidesPerView: 2
                        },
                        100: {
                            slidesPerView: 1
                        }
                    }}
                        autoplay={{
                        "delay": 2000,
                        "disableOnInteraction": true
                    }}>
                     
                        {FeaturedArray && FeaturedArray.map((item : IformData) => {

                            return <SwiperSlide key={item._id || item.id}>

                                <RecoCard
                                    description={item.description}
                                    img={item.images[0]}
                                    title={item.title}
                                    id={`${item._id}`}
                                    category={item.category}/>
                            </SwiperSlide>
                        })}

                    </Swiper>}

                </Box>
            </CBox>

        </Box>
    )
}

export default Recommended
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import {useEffect} from 'react';
import GetCategoryDataHook from '../../Helpers/Hooks/GetCategoryDataHook';
import CBox from '../CustomMui/CBox';
import CTypo from '../CustomMui/CTypo';
import CateCard from './CateCard'
const shoes = require('../../Helpers/Images/shoes.jfif')
const accessories = require('../../Helpers/Images/accessories.jfif')
const suits = require('../../Helpers/Images/suits.jfif')

const CateArray = [
    {
        link: 'shoes',
        id: 1,
        title: 'shoes',
        desc: 'Only High Quality Shoes',
        img: shoes
    }, {
        link: 'Suits',
        id: 2,
        title: 'Suits',
        desc: 'Only High Quality Suits',
        img: suits
    }, {
        link: 'accessories',
        id: 3,
        title: 'accessories',
        desc: 'Only High Quality accessories',
        img: accessories
    }
]

const Categories = () => {
    const {GetCategories, categories, isLoading} = GetCategoryDataHook()

    useEffect(() => {
        GetCategories()
    }, [])

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
                    text='Categories'></CTypo>
                <Box
                    sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>

                    {categories && categories.map(item => {
                        return <CateCard
                            key={item.id}
                            link={item.link}
                            title={item.title}
                            desc={item.desc}
                            img={item.img}/>

                    })}
                    {isLoading && [1, 2, 3].map((number) => {

                        return <Skeleton
                        key={number - 1}
                            variant='rectangular'
                            sx={{
                            my: '5px',
                            height: {
                                xs: '200px',
                                md: '300px',
                                lg: '350px'
                            },
                            width: {
                                xs: '100%',
                                sm: '48%',
                                md: '32%'
                            }
                        }}></Skeleton>
                    })
}
                    {
                    !isLoading && 
                    categories.length === 0 ?
                    <CTypo color='#ff0000c2' text='There was an error while fetching data.'/> : ''
}

                </Box>
            </CBox>
        </Box>
    )
}

export default Categories
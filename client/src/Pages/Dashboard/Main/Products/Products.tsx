import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import TextField from "@mui/material/TextField"
import CBox from "../../../../Components/CustomMui/CBox"
import CTypo from "../../../../Components/CustomMui/CTypo"
import SearchIcon from '@mui/icons-material/Search';
import {useEffect, useState} from 'react';
import {IformData} from '../../../../Helpers/Hooks/CreateProductHook'
import CButton from "../../../../Components/CustomMui/CButton"

import Productcard from './Cards/Productcard';
import Skeleton from "@mui/material/Skeleton"
const img = require('../../../../Helpers/Images/accessories.jfif')
const Products = () => {
    const [products,
        setProducts] = useState < IformData[] > ([])
    const GetDatafromDB = async() => {

        const request = await fetch('http://localhost:9000/dashboard/products')
        const results = await request.json()
        setProducts(results)

    }
    useEffect(() => {
        let isdone = false
        if (!isdone) {

            GetDatafromDB()
        }
        return () => {
            isdone = true
        }
    }, [])

    return (
        <CBox sx={{
            pt: '2em'
        }}>
            <CTypo
                text='Product List'
                fontSize={{
                xs: '1.2em',
                sm: '1.4em'
            }}
                fontWeight='500'
                sx={{
                mt: 0
            }}/>

            <Box
                sx={{
                background: 'white',
                width: '100%',
                mt: '2em',
                pt: '1em',
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
            }}>

                <CBox>
                    <Box
                        sx={{
                        display: 'flex',
                        width: 'max-content'
                    }}
                        className='searchForm2'
                        component='form'>
                        <Box
                            sx={{
                            background: 'white'
                        }}>

                            <input placeholder='Search' className='searchInput' type="search"/>
                        </Box>
                        <IconButton
                            sx={{
                            color: '#3d3d3d'
                        }}
                            type='submit'>
                            <SearchIcon/>
                        </IconButton>
                    </Box>
                </CBox>

                <CBox
                    sx={{
                    mt: '1em',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    py: '2em',
                    borderTop: '1px solid #8080803b'
                }}>

                    {console.log(products)
}

                    {products
                        ? products.map((product : IformData) => <Productcard
                            key={product.id}
                            title={product.title}
                            img={product.images[0] || 'https://www.groupestate.gr/images/joomlart/demo/default.jpg'}
                            price={product.price}/>)

                        : <CTypo
                            fontSize={{
                            xs: '1.3em',
                            sm: '1.5'
                        }}
                            text='Loading content ,please wait...'></CTypo>
}

                </CBox>
            </Box>
        </CBox>
    )
}

export default Products
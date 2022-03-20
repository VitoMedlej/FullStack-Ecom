import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import TextField from "@mui/material/TextField"
import CBox from "../../../../Components/CustomMui/CBox"
import CTypo from "../../../../Components/CustomMui/CTypo"
import SearchIcon from '@mui/icons-material/Search';
import {useEffect, useState} from 'react';
import {IformData} from '../../../../Helpers/Hooks/CreateProductHook'
import Productcard from './Cards/Productcard';
import Skeleton from "@mui/material/Skeleton"
import GetProductsHook from "../../../../Helpers/Hooks/GetProductsHook"
import DeleteProductHook from "../../../../Helpers/Hooks/DeleteProductHook"

const img = require('../../../../Helpers/Images/accessories.jfif')

const Products = () => {

    const {
        products,
        setProducts,
        error,
        isLoading,
        GetDatafromDB,
        setLoading
    } = GetProductsHook()

    const {DeleteProductById, isReqLoading, results} = DeleteProductHook()

    useEffect(() => {
        let isdone = false
        if (!isdone) {
            setLoading(true)
            GetDatafromDB('/dashboard/products')

        }
        return () => {
            isdone = true
            setLoading(false)

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

                    {products.length > 0 && products.map((product : IformData) => <Productcard
                        id={product.id}
                        GetDatafromDB={GetDatafromDB}
                        DeleteProductById={DeleteProductById}
                        key={`${product._id}`}
                        title={product.title}
                        img={product.images[0] || product.images[1] || 'https://www.groupestate.gr/images/joomlart/demo/default.jpg'}
                        price={product.price}/>)
}
                    {isLoading && products.length === 0 && [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ].map((number) => {
                        return <Skeleton
                            key={number - 1}
                            sx={{
                            width: {
                                xs: '99%',
                                md: '49%',
                                lg: '32%'
                            },
                            height: {
                                xs: '200px',
                                md: '300px'
                            }
                        }}></Skeleton>
                    })}
                    {!error && !isLoading && products.length === 0 && <CTypo
                        sx={{
                        cursor: 'pointer'
                    }}
                        fontSize={{
                        xs: '1.1em'
                    }}
                        text='No products were found!'></CTypo>
}
                    {error && !isLoading && products.length == 0 && <Box
                        sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <CTypo
                            fontSize={{
                            xs: '1.1em'
                        }}
                            sx={{
                            mr: '4px'
                        }}
                            text='Failed to load data ,'></CTypo>
                        <CTypo
                            onClick={() => {
                            setLoading(true);
                            GetDatafromDB('/dashboard/products')
                        }}
                            color='red'
                            sx={{
                            cursor: 'pointer'
                        }}
                            fontSize={{
                            xs: '1.1em'
                        }}
                            text='retry?'></CTypo>
                    </Box>}

                    {/* <Skeleton
                        sx={{
                        width: {
                            xs: '99%',
                            md: '49%',
                            lg: '32%'
                        },
                        height: {
                            xs: '200px',
                            md: '300px'
                        }
                    }}></Skeleton> */}

                </CBox>
            </Box>
        </CBox>
    )
}

export default Products
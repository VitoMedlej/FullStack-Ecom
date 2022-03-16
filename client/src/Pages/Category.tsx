import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CBox from '../Components/CustomMui/CBox';
import CTypo from '../Components/CustomMui/CTypo';
import Product from '../Components/ProductPage/ProductCard';
import BreadCrumbsLink from '../Components/ProductPage/BreadCrumbsLink';
import {useParams} from 'react-router-dom';
import GetProductsHook from '../Helpers/Hooks/GetProductsHook';
import {useEffect} from 'react';
import Skeleton from '@mui/material/Skeleton';
const pic = require('../Helpers/Images/nike.jfif')

const Category = () => {
    const {section} = useParams()

    const {GetDatafromDB, isLoading, products} = GetProductsHook()

    useEffect(() => {
        GetDatafromDB(`/category/${section}`)

    }, [])

    return (

        <Box component='section'>
            <CBox
                sx={{
                borderBottom: '1px solid #8080802e',
                paddingBottom: '15px'
            }}
                className='limit'>

                <BreadCrumbsLink section={`${section}`}/>
                <Box>
                    <CTypo
                        fontSize={{
                        xs: '2em'
                    }}
                        text='MEN SHOES (300)'></CTypo>
                </Box>
            </CBox>
            <CBox className='limit'>
                <Grid
                    sx={{
                    width: '100%',
                    mt: '2em'
                }}
                    container>

                    <Grid item xs={12} md={3} lg={2}>
                        fasfasf
                    </Grid>

                    <Grid
                        sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'start'
                    }}
                        item
                        xs={12}
                        md={9}
                        lg={10}>

                        {!isLoading && products.length > 0 && products.map((product) => {
                            return <Product
                                key={product.id}
                                title={`${product.title}`}
                                price={product.price}
                                id={product.id}
                                Manufacturer={product.Manufacturer}
                                category={`${product.category}`}
                                img={product.images[0]}/>
                        })
}
                        {isLoading && products.length === 0 && <h1>fasf</h1>
                        }


                    </Grid>
                </Grid>
            </CBox>
        </Box>
    )
}

export default Category

function GetDataFromDB() {
    throw new Error('Function not implemented.');
}

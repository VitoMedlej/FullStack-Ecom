import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CBox from '../Components/CustomMui/CBox';
import CTypo from '../Components/CustomMui/CTypo';
import ProductCard from '../Components/ProductPage/ProductCard';
import BreadCrumbsLink from '../Components/ProductPage/BreadCrumbsLink';
import {useParams} from 'react-router-dom';
import GetProductsHook from '../Helpers/Hooks/GetProductsHook';
import {useEffect} from 'react';
import Skeleton from '@mui/material/Skeleton';
import {useSelector, useDispatch} from 'react-redux'
import {saveProductsArray} from '../Redux/Slices/ProductsSlice';
import {RootState} from '../Redux/Store';

const Category = () => {
    const {section} = useParams()
    const dispatch = useDispatch()

    const {GetDatafromDB, isLoading, products} = GetProductsHook()

    useEffect(() => {
        GetDatafromDB(`/category/${section}`)
    }, [])

    useEffect(() => {
        dispatch(saveProductsArray(products))
    }, [products])

    return (

        <Box sx={{
            minHeight: '100vh'
        }} component='section'>
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
                        justifyContent: {
                            xs: 'center',
                            sm: 'space-between'
                        }
                    }}
                        item
                        xs={12}
                        md={9}
                        lg={10}>

                        {!isLoading && products.length > 0 && products.map((product) => {
                            return <ProductCard
                                key={product._id}
                                title={`${product.title}`}
                                price={product.price}
                                id={product._id}
                                Manufacturer={product.Manufacturer}
                                category={`${product.category}`}
                                img={product.images[0]
                                     || product.images[1] 
                                     || product.images[2]
                                     || 'https://www.groupestate.gr/images/joomlart/demo/default.jpg'}/>
                        })
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
                                key={number}
                                sx={{
                                height: '400px',
                                mx: '5px',
                                width: {
                                    xs: '46%',
                                    md: '32%'
                                }
                            }}></Skeleton>
                        })
}
                        {!isLoading && products.length === 0 && <CTypo
                            color='red'
                            text='Error loading data ,please check your internet and try again'/>}

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

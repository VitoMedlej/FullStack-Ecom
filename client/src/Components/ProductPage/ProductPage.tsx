import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CBox from '../CustomMui/CBox';
import CTypo from '../CustomMui/CTypo';
import {Link, useParams} from 'react-router-dom';
import BreadCrumbsLink from './BreadCrumbsLink';
import ProductImageSlider from './ProductImageSlider';
import ProductDetails from './ProductDetails';
import ProductSpec from './ProductSpec';
import ProductDesc from './ProductDesc';
import ProductReview from './ProductReview';
import ProductSideBar from './ProductSideBar';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/Store';
import {IformData} from '../../Helpers/Hooks/CreateProductHook';
import {useState, useEffect} from 'react';
import GetSingleProductHook from '../../Helpers/Hooks/GetSingleProductHook';

const img = require('../../Helpers/Images/shoes.jfif')

const Product = () => {
    const {GetProductById, data, isLoading} = GetSingleProductHook()
    const {section, id} = useParams()
    const [product,
        setProduct] = useState < IformData > ()
    const ProductsArray = useSelector((state : RootState) => state.ProductsArray.productStateArray)

    useEffect(() => {

        // if (ProductsArray.length > 1) {     const currentProduct =
        // ProductsArray.find(prod => prod.id === `${id}`)     if (currentProduct) {
        //     setProduct(currentProduct)     } } if (ProductsArray.length <= 1 &&
        // section && id) {     GetProductById(section, id)    if (data)
        // setProduct(data) }
    }, [])
    useEffect(() => {
        if (section && id && !product) {

            GetProductById(section, id)

        }
    }, [])
    useEffect(() => {
        if (data) 
            setProduct(data[0]);

        }
    , [data])

    return (
        <Box>
            <CBox className='limit'>
                {/* <BreadCrumbsLink section={`${ID}`}/> */}

                <Grid container>

                    <ProductImageSlider isLoading={isLoading}/>

                    <ProductSideBar isLoading={isLoading}
                     title={`${product && product.title}`}/>
                    <Box>

                        <ProductDesc isLoading={isLoading}/>
                        <ProductSpec/>
                        <Grid md={8} item xs={12}>
                            <CTypo
                                fontWeight='500'
                                fontSize={{
                                xs: '1.2em',
                                sm: '1.4em',
                                md: '1.5em'
                            }}
                                sx={{
                                mt: {
                                    xs: '3.5em',
                                    md: '2em'
                                }
                            }}
                                text='Product Details'/>

                            <ProductDetails/>

                            <ProductReview/>

                        </Grid>

                    </Box>

                </Grid>
            </CBox>
        </Box>
    )
}

export default Product
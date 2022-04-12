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
import Skeleton from '@mui/material/Skeleton';


const Product = () => {
    const {GetProductById, error, data, isLoading} = GetSingleProductHook()
    const {section, id} = useParams()
    const [product,
        setProduct] = useState < IformData > ()
    const ProductsArray = useSelector((state : RootState) => state.ProductsArray.productStateArray)

    useEffect(() => {

        // some conditions had to be done ,trying to reduce api requests as much as I
        // could.

        let isMounted = true
        if (isMounted) {

      
        if (section && id && !product && !ProductsArray[0].title) {

            GetProductById(section, id)
            return;
        }
   


             
              const currentProduct =   ProductsArray.find(x => x._id === `${id}`);
             
            if (currentProduct) setProduct(currentProduct)
            return;
        }
        return () => {
            isMounted = false
        }

    }, [])
    
    useEffect(() => {
        let isMounted = true
        
        if (data && isMounted) {
            setProduct(data[0])
        }
        

        return () => {
            isMounted = false
        }
    }
    , [data])

    return (
        <Box>
            <CBox className='limit'>
                <BreadCrumbsLink section={`${section}`}/> {!error
                    ? <Grid container>

                            <ProductImageSlider
                                imagesArray={product && product.images}
                                isLoading={isLoading}/>

                            <ProductSideBar
                                sizes={product && product.sizes}
                                inStock={product && product.inStock}
                                isLoading={isLoading}
                                price={product && product.price}
                                title={`${product && product.title}`}/>
                            <Box
                                sx={{
                                width: '100%'
                            }}>

                                <ProductDesc
                                    description={product && product.description}
                                    isLoading={isLoading}/>
                                <ProductSpec
                                    specifications={product && product.specifications}
                                    isLoading={isLoading}/>
                                <Grid md={8} item xs={12}>

                                    <ProductDetails
                                    style={product && product.style}
                                    weight={product && product.weight}
                                      colors={product && product.colors[0]}
                                        isLoading={isLoading}/> {!isLoading
                                        ? <ProductReview/>
                                        : <Skeleton
                                            sx={{
                                            mt: '4em',
                                            padding: '2.5em'
                                        }}
                                            variant='rectangular'/>
}

                                </Grid>

                            </Box>

                        </Grid>
                    : <CTypo color='red' text='Failed to load item! ,Please try again...'></CTypo>}
            </CBox>
        </Box>
    )
}

export default Product
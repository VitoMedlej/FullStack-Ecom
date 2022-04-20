import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CBox from '../Components/CustomMui/CBox';
import CTypo from '../Components/CustomMui/CTypo';
import ProductCard from '../Components/ProductPage/ProductCard';
import BreadCrumbsLink from '../Components/ProductPage/BreadCrumbsLink';
import {useParams} from 'react-router-dom';
import GetProductsHook from '../Helpers/Hooks/GetProductsHook';
import {useEffect, useState} from 'react';
import Skeleton from '@mui/material/Skeleton';
import {useSelector, useDispatch} from 'react-redux'
import {saveProductsArray} from '../Redux/Slices/ProductsSlice';
import {RootState} from '../Redux/Store';
import Pagination from '@mui/material/Pagination';
import GetTotalPagesHook from '../Helpers/Hooks/GetTotalPagesHook';
import {useNavigate} from 'react-router-dom';
import FilterSection from '../Components/Filter/FilterSection';

const Category = () => {
    const {section} = useParams()
    const dispatch = useDispatch()
    const [currentPage,
        setCurrentPage] = useState(0)
    const navigate = useNavigate();
    const {GetDatafromDB, pages, isLoading, products} = GetProductsHook()

    
    const handlePageChange = (e : React.MouseEvent < HTMLElement, MouseEvent >) => {

        const value = e.target as HTMLElement;
        if (value.textContent) {
            const page : number = parseInt(value.textContent)
            setCurrentPage(page - 1)
            navigate(`/category/shoes?limit=9&?page=${page}`);
        }

    }
   

    useEffect(() => {
        let isMounted = true

        if (isMounted) 
            GetDatafromDB(`https://elvito.herokuapp.com/category/${section}?limit=9&page=${currentPage || 0}`)
        return () => {
            isMounted = false
        }



    }, [])

    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            GetDatafromDB(`https://elvito.herokuapp.com/category/${section}?limit=9&page=${currentPage || 0}`)

            window.scrollTo(0, 0)
        }

        return () => {
            isMounted = false
        }

    }, [currentPage])
   
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
                        xs: '1.5em'
                    }}
                        text={` ${section?.toLocaleUpperCase()} (${products.length})`}></CTypo>
                </Box>
            </CBox>
            <CBox className='limit'>
                <Grid
                    sx={{
                    width: '100%',
                    mt: '2em'
                }}
                    container>

                    <Grid item xs={12} md={3} lg={3}>
                       <FilterSection condition={!isLoading && products.length > 0 }/>
                    </Grid>

                    <Grid
                        sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: {
                            xs: 'center',
                            sm: 'space-evenly',
                        }
                    }}
                        item
                        xs={12}
                        md={9}
                        lg={9}>

                        {!isLoading && products.length > 0 && products.map((product) => {
                            return <ProductCard
                                key={product._id}
                                title={`${product.title}`}
                                price={product.price}
                                id={product._id}
                                Manufacturer={product.Manufacturer}
                                category={`${product.category}`}
                                img={product.images[0] || product.images[1] || product.images[2] || 'https://www.groupestate.gr/images/joomlart/demo/default.jpg'}/>
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
                                className='skeletonMargin'
                                key={number}
                                sx={{
                                height: '400px',
                             
                                width: {
                                    xs: '99%',
                                    sm : '48%',
                                    md: '31%'
                                }
                            }}></Skeleton>
                        })
}
                        {!isLoading && products.length === 0 && <CTypo
                            color='red'
                            text='Error loading data ,please check your internet and try again'/>}
                        <Pagination
                            onClick={(e) => handlePageChange(e)}
                            sx={{
                            mt: '2em',
                            width: '100%'
                        }}
                            count={pages || 0}/>

                    </Grid>

                </Grid>
            </CBox>
        </Box>
    )
}

export default Category

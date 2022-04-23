import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import CBox from "../../../../Components/CustomMui/CBox"
import CTypo from "../../../../Components/CustomMui/CTypo"
import SearchIcon from '@mui/icons-material/Search';
import {useEffect, useState} from 'react';
import {IformData} from '../../../../Helpers/Hooks/CreateProductHook'
import Productcard from './Cards/Productcard';
import Skeleton from "@mui/material/Skeleton"
import GetProductsHook from "../../../../Helpers/Hooks/GetProductsHook"
import DeleteProductHook from "../../../../Helpers/Hooks/DeleteProductHook"
import {useNavigate} from 'react-router-dom';
import Pagination from "@mui/material/Pagination"
import {Snackbar, Alert} from "@mui/material"

const Products = () => {
    const navigate = useNavigate();
    const [currentPage,
        setCurrentPage] = useState(0)
    const [isOpen,
        setOpen] = useState(false)
    const [snackText,
        setSnackText] = useState('Error! ,something went wrong')

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setOpen(false)
            }, 3000);
        }
    }, [isOpen])
    const {
        products,
        pages,
        error,
        isLoading,
        GetDatafromDB,
        setProducts,
        setLoading
    } = GetProductsHook()

    const {DeleteProductById, isReqLoading, results} = DeleteProductHook()

    const handlePageChange = (e : React.MouseEvent < HTMLElement, MouseEvent >) => {

        const value = e.target as HTMLElement;
        if (value.textContent) {
            const page : number = parseInt(value.textContent)

            setCurrentPage(page - 1)
            navigate(`/dashboard/products?limit=9&?page=${page}`);
        }

    }
    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            GetDatafromDB(`https://el-vito.herokuapp.com/category/?limit=9&page=${currentPage || 0}`)

            window.scrollTo(0, 0)
        }
        return () => {
            isMounted = false
        }
    }, [currentPage])

    useEffect(() => {
        let isdone = false
        navigate(`/dashboard/products?limit=9&?page=0`);

        if (!isdone) {
            setLoading(true)
            GetDatafromDB(`https://el-vito.herokuapp.com/category/?limit=9&page=${currentPage || 0}`)

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
                    <Snackbar
                        onClick={() => setOpen(!isOpen)}
                        sx={{
                        mt: '2em'
                    }}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}
                        open={isOpen}
                        autoHideDuration={2000}>
                        <Alert
                            sx={{
                            fontSize: '1em',
                            background: `${results == '200'
                                ? 'rgb(56, 142, 60)'
                                : 'red'}`,
                            color: 'white'
                        }}
                            severity={`${results == '200'
                            ? 'success'
                            : 'error'}`}>

                            {`${snackText}`}
                        </Alert>
                    </Snackbar>

                    {products.length > 0 && products.map((product : IformData) => <Productcard
                        category={product.category}
                        id={product
                        ?._id}
                        setSnackText={setSnackText}
                        GetDatafromDB={GetDatafromDB}
                        isReqLoading={isReqLoading}
                        products={products}
                        setProducts={setProducts}
                        DeleteProductById={DeleteProductById}
                        setOpen={setOpen}
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
                    <Pagination
                        onClick={(e) => handlePageChange(e)}
                        sx={{
                        mt: '2em',
                        width: '100%'
                    }}
                        count={pages || 0}/>
                </CBox>
            </Box>
        </CBox>
    )
}

export default Products
import {Box, CircularProgress, IconButton, Skeleton} from "@mui/material"
import CBox from "../../CustomMui/CBox"
import CTypo from "../../CustomMui/CTypo"
import CircularOption from "./CircularOption"
import CircularOptions from "./CircularOptions"
import CloseIcon from '@mui/icons-material/Close';

import GetProductsBySearch from "../../../Helpers/Hooks/SearchHandlingHooks/GetProductsBySearch"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../../Redux/Store"
import {SetMobileMenuState} from "../../../Redux/Slices/MobileMenuSlice"
import ProductCard from "../../ProductPage/ProductCard"

interface IMobileSearchMenu {
    setQuery : React.Dispatch < React.SetStateAction < string >>;
    query : string
}
const MobileSearchMenu = ({query, setQuery} : IMobileSearchMenu) => {
    const dispatch = useDispatch()
    const {HandleSearch, products, isLoading, error} = GetProductsBySearch()
    const isMenuOpen = useSelector((state : RootState) => state.isMenuOpen.isMenuOpen)
  

    return (
        <Box
            className='trans'
            sx={{
            display: {
                xs: 'flex',
                md: 'none'
            },
            overflowY: 'scroll',
            width: '100vw',
            height: `${isMenuOpen
                ? '100vh'
                : '0'}`,
            background: 'white',
            position: 'absolute',
            top: '30px',
            left: 0,
            zIndex: '0',
            mt: '30px',
            borderTop: '1px solid #4f4f4f52'
        }}>
            <CBox
                sx={{
                width: '100%',
                flexDirection: 'column',
                display: `${isMenuOpen
                    ? 'flex'
                    : 'none'}`,
                pt: '1.5em'
            }}>
                <Box
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>

                    <CTypo
                        fontSize={{
                        xs: '1.2em',
                        sm: '1.5em'
                    }}
                        fontWeight='500'
                        text='Search products'></CTypo>
                    <IconButton
                        onClick={() => {
                        dispatch(SetMobileMenuState(false))
                    }}
                        sx={{
                        color: 'red',
                        right: '2%',
                        mx: '4px',
                        mt: '.5em',
                        padding: '8px',
                        display: {
                            xs: 'flex',
                            sm: 'flex ',
                            md: 'none'
                        }
                    }}
                        type='button'>
                        <CloseIcon/>
                    </IconButton>

                </Box>
                <Box
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: '2em'
                }}>
                    <Box
                        sx={{
                        display: 'flex',
                        background: '#f1f1f1',
                        width: '80%'
                    }}
                        className='searchForm trans'
                        component='form'>

                        <input
                            onChange={(e) => HandleSearch(e, setQuery)}
                            value={`${query}`}
                            placeholder='Search'
                            className='searchInput w100'
                            type="search"/>
                    </Box>

                </Box>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    mt: '1em'
                }}>

                    {query && !error && !isLoading && products.length > 0 && products.map(product => {
                        return <ProductCard
                            onClick={() => dispatch(SetMobileMenuState(false))}
                            width={{
                            xs: '49%'
                        }}
                            key={product._id}
                            title={`${product.title}`}
                            price={product.price}
                            id={product._id}
                            Manufacturer={product.Manufacturer}
                            category={`${product.category}`}
                            img={product.images[0] || product.images[1] || product.images[2] || 'https://www.groupestate.gr/images/joomlart/demo/default.jpg'}/>
                    })
}
                    {!error && isLoading && products.length === 0 && [1,2,3,4]
                        .map((number) => {
                            console.log('number: ', number);
                            return <Skeleton
                                key={number }
                                className='skeletonMargin'
                                sx={{
                                height: '400px',
                                width: {
                                    xs: '49%'
                                }
                            }}></Skeleton>
                        })
}

                    {error && `${error}`}

                </Box>

                <Box
                    sx={{
                    display: `${query.length > 2
                        ? 'none'
                        : 'block'}`
                }}>

                    <CircularOptions title='Categories'>
                        <CircularOption
                            to='/category/accessories'
                            img={`https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80`}/>

                        <CircularOption
                            to='/category/shoes'
                            img={`https://media.istockphoto.com/photos/classy-shoes-picture-id688233968?k=20&m=688233968&s=612x612&w=0&h=cSCLtdSPlc16XoGRz83STWV735Y4E2j8XNFKLTr-tA4=`}/>
                        <CircularOption
                            to='/category/suits'
                            img={`https://img.dtcn.com/image/themanual/chris-hemsworth-boss-bottled-2017-campaign-800x532.jpg`}/>
                    </CircularOptions>

                
                </Box>

            </CBox>
        </Box>
    )
}

export default MobileSearchMenu
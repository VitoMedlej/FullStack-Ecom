import CloseIcon from '@mui/icons-material/Close';
import CBox from '../../CustomMui/CBox';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CTypo from '../../CustomMui/CTypo';
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../../Redux/Store';
import {toggleCartState} from '../../../Redux/Slices/CartSlice'
import {toggleBackDropState} from '../../../Redux/Slices/BackDropSlice'
import {Link} from 'react-router-dom';
import CartItem from './CartItem';
import HandleCartStateHook from '../../../Helpers/Hooks/CartHandlingHooks/HandleCartStateHook';


const CartBar = () => {
    const dispatch = useDispatch()
    const isCartOpen = useSelector((state : RootState) => state.isCartOpen.isCartOpen)
    const {productsArray} = HandleCartStateHook()

    return (
        <CBox
            sx={{
            flexDirection: 'column',
            transition: 'all .3s ease',
            width: '100%',
            background: 'white',
            top: `${isCartOpen
                ? '100%'
                : '-100vh'}`,
            zIndex: '55',
            px: '0',
            display: {
                xs: 'flex'
            },
            borderTop: '1px solid #8080802b',
            color: 'black',
            position: 'absolute'
        }}>
            <CBox className='limit'>

                <Box
                    className='flexed '
                    sx={{
                    width: '100%',
                    pt: '1em',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>

                    <CTypo
                        fontSize={{
                        xs: '1.2em',
                        md: '1.3em',
                        xl: '1.4em'
                    }}
                        sx={{
                        mt: '0'
                    }}
                        text='Your Bag'></CTypo>
                    <IconButton
                        onClick={() => {
                        dispatch(toggleCartState(false));
                        dispatch(toggleBackDropState(false))
                    }}
                        sx={{
                        transition: 'all .3s ease',
                        ':hover': {
                            background: 'pink'
                        },
                        color: 'red',
                        m: '4px',
                        padding: '8px',
                        display: 'flex'
                    }}
                        type='button'>
                        <CloseIcon/>
                    </IconButton>

                </Box>
                <Box sx={{
                    pb: '2em'
                }}>
                    {productsArray && productsArray.length > 0
                        ? <Box
                                sx={{
                                mb: '1.5em',
                                mt: '.5em'
                            }}>
                                {productsArray
                                    .slice(0, 3)
                                    .map(item => {{
                              
                                
                               return <CartItem
                               price={item.price}
                               category={item.category}
                               id={item._id}
                               key={item._id}
                               title={item.title}
                               img={item.images[0] || item.images[1]}
                               qty={item.quantity}
                                 />
                            }})
}
                            </Box>
                        : <CTypo
                            sx={{
                            mt: '0'
                        }}
                            fontWeight='300'
                            text='There are no items here.'></CTypo>}

                    <Link
                        onClick={() => {
                        dispatch(toggleBackDropState(false));
                        dispatch(toggleCartState(false))
                    }}
                        to='/cart'>
                        <CTypo
                            sx={{
                            mt: '0'
                        }}
                            fontWeight='300'
                            color='blue'
                            text='Visit bag'></CTypo>
                    </Link>
                </Box>

            </CBox>
        </CBox>
    )
}
export default CartBar
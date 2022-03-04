import React, {useEffect} from 'react'
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

interface ICartBar {}

const CartBar = ({} : ICartBar) => {

    const isCartOpen = useSelector((state : RootState) => state.isCartOpen.isCartOpen)

    const dispatch = useDispatch()
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
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
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
                        position: 'absolute',
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
                    <CTypo
                        sx={{
                        mt: '0'
                    }}
                        fontSize={{
                        xs: '1.3em',
                        md: '1.5em',
                    xl: '1.7em'
                    }}
                        text='Your cart is empty!'></CTypo>
                    <Link
                        onClick={() => {
                        dispatch(toggleBackDropState(false));
                        dispatch(toggleCartState(false))
                    }}
                        to='/cart'>visit cart</Link>
                </Box>
            </CBox>
        </CBox>
    )
}
export default CartBar
import React, {useEffect, useState} from 'react'
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
interface ICartItems {}
const CartBar = ({} : ICartBar) => {
    const dispatch = useDispatch()

    const isCartOpen = useSelector((state : RootState) => state.isCartOpen.isCartOpen)

    const ReduxLocalCart = useSelector((state : RootState) => state.LocalCart.LocalCart)

    // useEffect(() => { if (ReduxLocalCart) {     setCartItems(ReduxLocalCart) //
    // dispatch(toggleCartState(true));     // dispatch(toggleBackDropState(true)) }
    // },[ReduxLocalCart])

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
                    {ReduxLocalCart
                        ? <Box
                                sx={{
                                mb: '1.5em',
                                mt: '.5em'
                            }}>
                                <Box
                                    sx={{
                                    display: 'flex',
                                    width: {
                                        xs: '90%',
                                        sm: '80%',
                                        md: '70%'
                                    },
                                    py: '.75em',
                                    borderBottom: '1px solid #0000001a'
                                }}>
                                    <Box
                                        sx={{
                                        width: '100px',
                                        height: {
                                            xs: '60px',
                                            sm: '100px'
                                        }
                                    }}>
                                        <img
                                            className='img'
                                            src="data:image/jpeg;base64,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"
                                            alt=""/>
                                    </Box>
                                    <Box
                                        sx={{
                                        width: '100%',
                                        justifyContent: 'space-between',
                                        display: 'flex',
                                        mx: {
                                            xs: '.5em',
                                            sm: '1em'
                                        }
                                    }}>
                                        <Box
                                            sx={{
                                            padding: {
                                                xs: '0',
                                                sm: '8px'
                                            }
                                        }}>

                                            <CTypo
                                                fontSize={{
                                                xs: '.9em',
                                                sm: '1em'
                                            }}
                                                fontWeight='300'
                                                sx={{
                                                mt: '0'
                                            }}
                                                text='fasfasf asfasf asfasf asfasf'></CTypo>
                                            <CTypo
                                                fontSize={{
                                                xs: '.9em',
                                                sm: '1em'
                                            }}
                                                fontWeight='300'
                                                color='green'
                                                text='$200'></CTypo>
                                        </Box>
                                        <Box>
                                            <IconButton
                                                sx={{
                                                padding: {
                                                    xs: '0',
                                                    sm: '8px'
                                                },
                                                transition: 'all .3s ease',
                                                ':hover': {
                                                    background: 'pink'
                                                },
                                                color: '#ff0000a3',
                                                display: 'flex'
                                            }}
                                                type='button'>
                                                <CloseIcon/>
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
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
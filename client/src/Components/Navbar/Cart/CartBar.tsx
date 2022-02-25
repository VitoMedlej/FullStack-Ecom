import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

import CBox from '../../CustomMui/CBox';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const CartBar = () => {
    return (
        <CBox
            sx={{
            width: '100%',
            background: 'white',
            top: '100%',
            zIndex: '55',
            display: {
                xs: 'flex',
                md: 'none'
            },
            height: '300px',
            borderTop: '1px solid #8080802b',
            color: 'black',
            position: 'absolute'
        }}>
            <Box
                className='flexed'
                sx={{
                width: '93.5%',
                height: '50px',
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <IconButton
                    sx={{
                    color: 'red',
                    position: 'absolute',
                    right: '-70%',
                    m: '4px',
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
            <Box></Box>
        </CBox>
    )
}
export default CartBar
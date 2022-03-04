import Box from '@mui/material/Box'
import CButton from '../CustomMui/CButton'
import CTypo from '../CustomMui/CTypo'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const ProductReview = () => {
    return (
        <div>
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
                text='Ratings and reviews '/>

            <Box
                sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                mt: '1em'
            }}>
                <Box
                    sx={{
                    width: {
                        xs: '100%',
                        md: '35%'
                    }
                }}>
                    <CTypo
                        sx={{
                        mt: '0'
                    }}
                        text={'Reviews (0)'}/>
                    <Box
                        sx={{
                        width: 'max-content',
                        padding: '5px 15px 15px 0',
                        mt: '10px',
                        flexWrap: 'wrap'
                    }}className='flexed'>
                        <StarOutlinedIcon
                            sx={{
                            color: '#FDCC0D'
                        }}/>
                        <StarOutlinedIcon/>
                        <StarOutlinedIcon/>
                        <StarOutlinedIcon/>
                        <StarOutlinedIcon/>
                    </Box>
                    <Box
                        sx={{
                        width: {
                            xs: '100%',
                            sm: '250px'
                        }
                    }}>
                        <CButton
                            borderRadius={'0'}
                            margin={'10px'}
                            sx={{
                            width: {
                                xs: '100%',
                                sm: '250px',
                                
                            }
                        }}
                            hover={{
                            color: 'black',
                            background: 'white'
                        }}
                            text='Write a comment'/>
                    </Box>
                </Box>
                <Box
                    sx={{
                    width: {
                        xs: '100%',
                        md: '65%'
                    }
                }}><CTypo sx={{
            mt: '0'
        }} text={'comments (0)'}/></Box>
            </Box>
        </div>

    )
}

export default ProductReview
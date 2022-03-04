import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import CBox from '../CustomMui/CBox';
import CButton from '../CustomMui/CButton';
import CTypo from '../CustomMui/CTypo';

const Ad = () => {
    return (
        <Box
            sx={{
            mt: '10em',
            background: '#3dfffc',
            width: '100%'
        }}>
            <CBox
                sx={{
                display: 'flex',
                py: '3em',
                textAlign: 'center',
                flexDirection: "column",
                justifyContent: 'center'
            }}
                className='limit'>
                <CTypo
                    fontWeight='600'
                    fontSize={{
                    xs: '1.5em',
                    sm: '1.7em',
                    md: '1.8em',
                    xl: '2em'
                }}
                    text='JOIN US RIGHT NOW TO GET 15% OFF EVERYTHING'></CTypo>

               <Link to='/account/register'>
                <CButton
                    hover={{
                    background: 'black'
                }}
                    color='white'
                    background='black'
                    sx={{
                    width: {
                        sm: 'max-content',
                        margin: '0 auto'
                    }
                }}
                    text='SIGN UP FOR FREE' />
                   
                        </Link>
            </CBox>
        </Box>
    )
}

export default Ad
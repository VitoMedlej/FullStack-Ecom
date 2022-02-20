import Box from "@mui/material/Box"
import CBox from "../CustomMui/CBox"
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import CButton from '../CustomMui/CButton';
import CTypo from '../CustomMui/CTypo';

interface Ilanding {
    className?: string
}
const LandingPage = ({className} : Ilanding) => {
    return (

        <Box
            className='landing'
            sx={{
            height: {
                xs: '300px',
                lg: '350px'
            },
            textAlign: 'center',
            color: 'white',
            pt: '120px'
        }}>
            <Box className='backdrop'></Box>

            <CBox className={`limit ${className && className}`}>

                <CTypo
                    fontWeight={'bolder'}
                    fontSize={{
                    xs: '1.8em',
                    sm: '2.3em',
                    md: '3em',
                    lg: '3.3em'
                }}
                    text={`Dress Like The Boss You Are`}/>
                <CTypo
                    fontWeight={300}
                    fontSize={{
                    xs: '.8em',
                    sm: '1em',
                    md: '1.1em',
                    lg: '1.15em'
                }}
                    text={`it’s time to shake things up with el-vito's new releases for men`}/>

                <CButton
                    hover={{
                    color: 'white',
                    background: 'transparent',
                    border: '1px solid white'
                }}
                    text='SHOP NOW'/>
            </CBox>
        </Box>

    )
}

export default LandingPage
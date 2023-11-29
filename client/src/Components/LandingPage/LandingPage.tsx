import Box from "@mui/material/Box"
import CBox from "../CustomMui/CBox"
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import CButton from '../CustomMui/CButton';
import CTypo from '../CustomMui/CTypo';
import { Link } from "react-router-dom";

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
                sx={{mt:'0'}}
                    fontWeight={'bolder'}
                    fontSize={{
                    xs: '2em',
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
                <Link to='/category/shoes'>
                
                <CButton
                    hover={{
                        color: 'white',
                        background: 'transparent',
                        border: '1px solid white'
                    }}
                    text='SHOP NOW'/>
                    </Link>
            </CBox>
        </Box>

    )
}

export default LandingPage
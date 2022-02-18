import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import CBox from '../CustomMui/CBox';
import CTypo from '../CustomMui/CTypo';
const nike = require('../../Helpers/Images/nike.jfif')

interface IRecoCard {
    link : string
}

const RecoCard = ({link} : IRecoCard) => {
    return (
        <Box
            className='trans'
            sx={{
            padding: '5px',
            ':hover': {
                transform: "translateY(-5px)",
            },
            width: '90%',
            height: '100%',
            mt: '2em',
            minWidth: '200px'
        }}>
            <Link className='linkz' to={`${link}`}></Link>
            <Box>
                <img className='img' src={nike} alt=""/>
            </Box>

            <Box
                sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Box>

                    <CTypo
                        sx={{
                        mt: '0px'
                    }}
                        fontSize={{
                        xs: '1em'
                    }}
                        fontWeight="400"
                        text={`Nike Air Force 1 '07`}></CTypo>

                    <CTypo
                        sx={{
                        mt: '0px',
                        color: '#575757'
                    }}
                        fontSize={{
                        xs: '.9em',
                        sm: '1em'
                    }}
                        fontWeight="300"
                        text={`asfasfasfrasf`}></CTypo>
                </Box>
                <Box>
                    <CTypo fontWeight="400" text={`200$`}></CTypo>
                </Box>
            </Box>
        </Box>
    )
}

export default RecoCard
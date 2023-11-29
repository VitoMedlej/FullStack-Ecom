import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import CTypo from '../CustomMui/CTypo';

interface IRecoCard {
    category : string
    id : number | string
    img : string
    title : string
    description : string
    price : number
}

const RecoCard = ({category,price, id, img, title, description} : IRecoCard) => {
    return (
        <Box
            className='trans textHidden'
            sx={{
            padding: '5px',
            ':hover': {
                transform: "translateY(-5px)"
            },
            width: '90%',
            height: '100%',
            mt: '2em',
            minWidth: '200px'
        }}>
            <Link className='linkz' to={`/category/${category}/products/${id}`}></Link>
            <Box sx={{height: '450px'}}>
                <img className='img' src={`${img}`} alt=""/>
            </Box>

            <Box
                sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Box className='textHidden'>

                    <CTypo
                        sx={{
                        mt: '0px'
                    }}
                        fontSize={{
                        xs: '1em'
                    }}
                        fontWeight="400"
                        text={`${title}`}></CTypo>

                    <CTypo
                        className='textHidden'
                        sx={{
                        mt: '0px',
                        color: '#575757'
                    }}
                        fontSize={{
                        xs: '.9em',
                        sm: '1em'
                    }}
                        fontWeight="300"
                        text={`${description}`}></CTypo>
                </Box>
                <Box>
                    <CTypo fontWeight="400" text={`${price}$`}></CTypo>
                </Box>
            </Box>
        </Box>
    )
}

export default RecoCard
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import CTypo from '../CustomMui/CTypo';

interface ICate {
    img : string,
    title : string 
    desc : string
    link : string
}

const CategoryCard = ({img ,title ,desc,link} : ICate) => {
    let lowerCaseLink = link.toLocaleLowerCase()
    return (
        
        <Box
        className='trans'
            sx={{
            position:'relative',
            padding :'5px',
            width: {
                xs: '100%',
                sm: '48%',
                md: '32%',
            },
            ':hover' : {
                transform: "translateY(-5px)",
                boxShadow: '1px 1px 5px #00000036'
            },
            mt: '2em'
        }}>
            <Link className='linkz' to={`/category/${lowerCaseLink}`}></Link>
            <Box
                sx={{
                width: '100%',
                height: '500px' 
            }}>

                <img className="img" src={img} alt=""/>
            </Box>
            <Box>
                <CTypo
                    fontSize={{

                    xs: '1.1em',
                    sm: '1.2em',
                    md : '1.3em',
                    lg : '1.4em',
                }}
                    fontWeight="500"
                    sx={{
                    textDecoration : {xs:'underLine',sm:'none'},
                    pt: '.3em'
                }}
                    text={`${title}`}></CTypo>
                <CTypo text={`${desc}`}></CTypo>

            </Box>
        </Box>

    )
}

export default CategoryCard
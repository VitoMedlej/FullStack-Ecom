import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import CTypo from '../CustomMui/CTypo';

interface IProduct {
    img : string
    price : number | string
    category : string
    id : string | undefined | number 
    unit?: string
    title : string
    Manufacturer : string;
    width ?: {
        xs ?: string;
        sm ?: string
    };
    onClick ?: () => void
}
const ProductCard = ({
    img,
    id,
    title,
    category,
    unit,
    price,
    Manufacturer,
    onClick,
    width
} : IProduct) => {
    let inStock = true
    return (
        <Box
        onClick={onClick && onClick}
            className='trans'
            sx={{
            border: '1px solid #80808030',
            my: '5px',
            ':hover': {
                transform: "translateY(-5px)",
                boxShadow: '1px 1px 5px #eaeaea'
            },
            position: 'relative',
            width: width || {
                xs: '100%',
                sm : '49%',
                md: '32%'
            }
        }}>
            <Link className='linkz' to={`/category/${category}/products/${id}`}/>
            <Box sx={{
                    height: '400px',
                position: 'relative'
            }}>
                <img className='img' src={`${img}`} alt="product image"/>
                <Box
                    sx={{
                        background:'white',
                    padding:'4px',
                    width: 'fit-content',
                    position: 'absolute',
                    top: '90%',
                    ml: '5px',
                    color: `${inStock
                        ? 'green'
                        : 'red'}`
                }}>

                    {inStock
                        ? `${unit || '$'}${price} `
                        : 'out of stock'}
                </Box>
            </Box>
            <Box sx={{
                p: '5px'
            }}>
                <CTypo
                    fontSize={{
                    xs: '.95em',
                    sm: '1em',
                    md: '1.09em',
                    xl: '1.15em'
                }}
                    sx={{
                    mt: {
                        xs: '0px'
                    }
                }}
                    text={title || 'Item'}/>

                <CTypo
                className='textLimit'
                    sx={{
                    mt: '0',
                    width: '95%',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis'
                }}
                    color='#767677'
                    text={`${Manufacturer}`}/>
            </Box>
        </Box>

    )
}

export default ProductCard
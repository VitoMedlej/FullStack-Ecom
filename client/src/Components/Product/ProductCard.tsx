import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import CTypo from '../CustomMui/CTypo';

interface IProduct {
    img : string
    price : number | string
    category : string
    id : string | number
    unit?: string
    title : string
}
const Product = ({
    img,
    id,
    title,
    category,
    unit,
    price
} : IProduct) => {
    return (
        <Box
            className='trans'
            sx={{
            margin: '5px',
            ':hover': {
                transform: "translateY(-5px)",
                boxShadow: '1px 1px 5px #eaeaea'
            },
            position: 'relative',
            width: {
                xs: '47%',
                md: '32%'
            }
        }}>
            <Link className='linkz' to={`/category/${category}/products/${id}`}/>
            <Box sx={{
                position: 'relative'
            }}>
                <img className='img' src={`${img}`} alt="product image"/>
                <Box
                    sx={{
                    width: 'fit-content',
                    position: 'absolute',
                    top: '90%',
                    color: 'green'
                }}>
                    {`${unit || '$'}`}{price}
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
                    fontSize={{
                    xs: '.75em',
                    md: '.79em',
                    xl: '.84em'
                }}
                    color='#767677'
                    sx={{
                    mt: {
                        xs: '0px'
                    }
                }}
                    text='Nike Shoes'/>

            </Box>
        </Box>

    )
}

export default Product
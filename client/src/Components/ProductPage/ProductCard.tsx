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
    Manufacturer : string
}
const Product = ({
    img,
    id,
    title,
    category,
    unit,
    price,
    Manufacturer
} : IProduct) => {
    let inStock = true
    return (
        <Box
            className='trans'
            sx={{
            border: '1px solid #80808030',
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
                    height: '400px',
                position: 'relative'
            }}>
                <img className='img2' src={`${img}`} alt="product image"/>
                <Box
                    sx={{
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
                    sx={{
                    mt: '0',
                    width: '95%',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis'
                }}
                    color='#767677'
                    text='fasfasfasfasf fasfasfasfasf fasfasfasfasf fasfasfasfasf fasfasfasfasf fasfasfasfasf '/>
            </Box>
        </Box>

    )
}

export default Product
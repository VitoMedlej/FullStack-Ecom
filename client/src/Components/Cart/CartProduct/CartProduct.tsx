import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {Link} from "react-router-dom"
import Box from "@mui/material/Box"
import CTypo from '../../CustomMui/CTypo';
import CartProductForm from './CartProductForm';
import CButton from '../../CustomMui/CButton';
import Button from '@mui/material/Button';
import HandLeItemRemoveHook from '../../../Helpers/Hooks/CartHandlingHooks/HandLeItemRemoveHook';
// const img = 'https://ucarecdn.com/e2879886-9fdb-41ce-a85a-67bb466b67ea/'

interface ICartProduct{
    img : string;
    title : string
    qty : number
    id : string | undefined
    category : string
    price : number
    description : string
    size :  number[] | string;
}

const CartProduct = ({img ,description,title,price,size ,qty,id,category}:ICartProduct) => {
    const  {HandleRemoveItem} = HandLeItemRemoveHook()
    return (

        <Box
        id={`${id}`}
        sx={{
            display: 'flex',
            borderBottom: '1px solid #80808061',
            pb:'10px',
            my:'2em'
        }}>
            <Box
                sx={{
                width: '150px',
                height: '100%'
            }}>
                <img src={img} alt="" className='img'/>
            </Box>
            <Box sx={{
                ml: '1em'
            }}>
                <Box>

                    <CTypo sx={{mt:'0'}} fontSize={{
                        xs: '1em',
                        md:'1.1em'
                    }}>
                        <Link to={`/category/${category}/products/${id}`}>
                           {title}
                        </Link>
                    </CTypo>

                    <CTypo
                    className=''
                        fontSize={{
                        xs: '.7em',
                        sm: '9em',
                        md:'1em',
                    }}
                        color='gray'
                        fontWeight='300'
                        sx={{
                        mt: '0'
                    }}
                        text={description}></CTypo>
                              <CTypo
                        fontSize={{
                        xs: '.8em',
                        sm: '1em'
                    }}
                        color='green'
                        fontWeight='300'
                        sx={{
                       
                    }}
                        text={`$${price}`}></CTypo>
                </Box>

                <CartProductForm SelectedQuantity={qty} SelectedSize={`${size}`}/>
                <Box sx={{
                    mt: '1em'
                }}>

                    <Button
                    onClick={()=>HandleRemoveItem(id)}
                        sx={{
                        padding: '0',
                        ':hover': {
                            background: 'transparent'
                        },
                        color: 'red'
                    }}>Remove</Button>
                </Box>
            </Box>
          
        </Box>
    )
}

export default CartProduct
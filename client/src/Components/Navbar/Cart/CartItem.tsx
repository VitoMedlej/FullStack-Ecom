import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import CTypo from "../../CustomMui/CTypo"
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../Redux/Store";
import {saveLocalCart} from "../../../Redux/Slices/LocalCartSlice";
import {IformData} from "../../../Helpers/Hooks/CreateProductHook";
import {billCalculator} from "../../../Helpers/Hooks/CartHandlingHooks/HandleAddToCartHook";
import { useNavigate } from "react-router-dom";
import { toggleBackDropState } from "../../../Redux/Slices/BackDropSlice";
import { toggleCartState } from "../../../Redux/Slices/CartSlice";
import HandLeItemRemoveHook from "../../../Helpers/Hooks/CartHandlingHooks/HandLeItemRemoveHook";

interface ICartItem {
    img : string;
    title : string
    qty : number | string;
    id : string | undefined
    category : string
    price : number | string
}
const CartItem = ({img, id,category,price, qty, title} : ICartItem) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {HandleRemoveItem} = HandLeItemRemoveHook()

    // const ReduxLocalCart = useSelector((state : RootState) => state.LocalCart.LocalCart)


    return (
        <Box
            id={`${id && id}`}
            sx={{
            display: 'flex',
            width: {
                xs: '90%',
                sm: '80%',
                md: '70%'
            },
            py: '.75em',
            borderBottom: '1px solid #0000001a'
        }}>
            <Box
                sx={{
                width: '100px',
                height: {
                    xs: '60px',
                    sm: '100px'
                }
            }}>
                <img className='img' src={`${img}`} alt=""/>
            </Box>
            <Box
                sx={{
                width: '100%',
                justifyContent: 'space-between',
                display: 'flex',
                mx: {
                    xs: '.5em',
                    sm: '1em'
                }
            }}>
                <Box
                    sx={{
                    padding: {
                        xs: '0',
                        sm: '8px'
                    }
                }}>

                    <CTypo
                    className='cursor'
                    onClick={()=>
                       {
                            navigate(`/category/${category}/products/${id}`);
                            dispatch(toggleCartState(false));
                            dispatch(toggleBackDropState(false));
                        }
                    }
                        fontSize={{
                        xs: '.9em',
                        sm: '1em'
                    }}
                        fontWeight='300'
                        sx={{
                        mt: '0'
                    }}
                        text={`${title}`}></CTypo>
                    <CTypo
                        fontSize={{
                        xs: '.9em',
                        sm: '1em'
                    }}
                        fontWeight='300'
                        color='green'
                        text={`$${price}`}></CTypo>
                    <CTypo
                        fontSize={{
                        xs: '.9em',
                        sm: '1em'
                    }}
                        fontWeight='300'
                        color='gray'
                        text={`${qty} in bag`}></CTypo>
                </Box>
                <Box>
                    <IconButton
                        onClick={() => HandleRemoveItem(id)}
                        sx={{
                        padding: {
                            xs: '0',
                            sm: '8px'
                        },
                        transition: 'all .3s ease',
                        ':hover': {
                            background: 'pink'
                        },
                        color: '#ff0000a3',
                        display: 'flex'
                    }}
                        type='button'>
                        <CloseIcon/>
                    </IconButton>
                </Box>
            </Box>
        </Box>

    )
}

export default CartItem

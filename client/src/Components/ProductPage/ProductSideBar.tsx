import CButton from "../CustomMui/CButton"
import CTypo from "../CustomMui/CTypo"
import SizeSelect from "./SizeSelect"
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Skeleton from "@mui/material/Skeleton";
import { useParams } from "react-router-dom";
import GetSingleProductHook from "../../Helpers/Hooks/GetSingleProductHook";
import { IformData } from "../../Helpers/Hooks/CreateProductHook";
import HandleAddToCartHook from "../../Helpers/Hooks/CartHandlingHooks/HandleAddToCartHook";


interface IProductSideBar {
    title : string
    isLoading : boolean
    inStock ?: boolean
    sizes ?: number[]
    price ?: number 
}
interface ICart {
    items : IformData[],
    userId : string,
    bill : number
}
const ProductSideBar = ({title,price,sizes ,isLoading ,inStock} : IProductSideBar) => {


    const {section ,id} = useParams()

    const {GetProductById, error, data, isLoading : Loading} = GetSingleProductHook()
    const { HandleProductAdd} = HandleAddToCartHook()
    
    const HandleSubmit = async () => {
        try {

            if ( !Loading && !isLoading) {
                HandleProductAdd(section ,id ,GetProductById)
            }
        }
        catch(err) {
            console.log(err);
            
        }
    }

   
    let unit = '$'
    return (
        <Grid
            item
            xs={12}
            md={4}
            sx={{
            pt: {
                xs: '1em',
                md: '0px'
            },
            pl: {
                md: '20px'
            }
        }}>
        {!isLoading ? 
        <>
           <CTypo
                sx={{
                mt: '0px'
            }}
                fontWeight="400"
                fontSize={{
                xs: '1.4em',
                sm: '1.6em',
                md: '1.8em'
            }}
                text={title}/>  
            <CTypo
                sx={{
                mt: '0px'
            }}
                color={`${inStock ? 'green' : 'red'}`}
                fontWeight='500'
                text={`${inStock ? price+ unit : 'Out of stock!' } `}/>
            <CTypo
                sx={{
                pb: '1em'
            }}
                fontWeight='300'
                color='gray'
                text='Sign up to get up to 15% off!'/>
                
        </>
                
                :
                <>
                <Skeleton variant="text" />
                <Skeleton variant="text" width='50%' /> 
                <Skeleton variant="text" width='70%' />
                </>
                
            }

      {!isLoading ?  
      <>
      <Box>
                <CTypo
                    color='gray'
                    sx={{
                    mt: '2em'
                }}
                    fontWeight='300'
                    text='Select Size'/>
                <SizeSelect sizes={sizes}/>
            </Box> 
          

            <Box
                sx={{
                mt: '2em',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <CButton
                disabled={Loading || isLoading || !inStock }
                onClick={()=>HandleSubmit()
                }
                    hover={{
                    color: 'black',
                    background: 'white',
                    border: '1px solid black'
                }}
                    margin={'0'}
                    color='white'
                    background='black'
                    borderRadius={'0px'}
                    sx={{
                    width: '100%'
                }}
                    text={'ADD TO CART'}/>
                <IconButton
                    sx={{
                    color: '#3d3d3d',
                    m: '4px'
                }}
                    type='button'>
                    <FavoriteBorderOutlinedIcon/>
                </IconButton>

            </Box>
      </>

              :
              <Box    sx={{
                  mt: '5em'
              }}>
              <Skeleton height='50px' variant="rectangular"></Skeleton>
              <Skeleton sx={{mt:'1em'}} height='50px' variant="rectangular"></Skeleton>
              </Box>
              }

        </Grid>
    )
}

export default ProductSideBar
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import CTypo from "../../../../../Components/CustomMui/CTypo"
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../Redux/Store";
import { IformData } from "../../../../../Helpers/Hooks/CreateProductHook";

interface IProductcard {
    img : string;
    title : string;
    category : string;
    price : number | string;
    DeleteProductById : (id : string ,token : string) => Promise < string | number | void >;
    id : string | undefined;
    isReqLoading : boolean;
    products : IformData[]
    GetDatafromDB : (url : string) => Promise < void >
    setProducts: React.Dispatch<React.SetStateAction<IformData[]>>;
    setSnackText : React.Dispatch<React.SetStateAction<string>>;
    setOpen : React.Dispatch<React.SetStateAction<boolean>>
}

const Productcard = ({
    img,
    setProducts,
    setOpen,
    products,
    GetDatafromDB,
    DeleteProductById,
    isReqLoading,
    title,
    price,
    setSnackText,
    category,
    id
} : IProductcard) => {

    const userInfo = useSelector((state : RootState) => state.userInfo.UserInfo)
 

    return (
<>

      {id ?<Box
            sx={{
            borderRadius: '.25rem',
            boxShadow: '0 0.1rem 0.25rem rgb(0 0 0 / 8%)',
            border: '1px solid rgba(108, 117, 125, 0.25)',
            width: {
                xs: '99%',
                md: '49%',
                lg: '32%'
            },
            height: '100%',
            my: '1.5em'
        }}>
            <Box
                sx={{
                width: '100%',
                height: {
                    xs: '200px',
                    md: '300px'
                }
            }}>
                <img className='img' src={img} alt=""/>
            </Box>
            <Box sx={{
                px: '8px'
            }}>
                <Box
                    sx={{
                    pt: {
                        xs: '5px',
                        sm: '0'
                    }
                }}>

                    <Link to={`/category/${category}/products/${id}`}>

                        <CTypo color='#6c757d' text={`${title}`}/>
                    </Link>
                    <CTypo
                        sx={{
                        mt: '1px'
                    }}
                        color='green'
                        fontSize={{
                        md: '1.1em'
                    }}
                        fontWeight='400'
                        text={`$${price}`}></CTypo>
                </Box>
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    my: {
                        xs: '15px',
                        md: '10px'
                    }
                }}>
                    <Button
                     disabled={!userInfo ? true : false || isReqLoading }
                     
                        sx={{
                        width: '45%',
                        border: '1px solid rgba(108, 117, 125, 0.25)',
                        color: '#0000008f'
                    }}>edit
                        <EditIcon
                            sx={{
                            color: '#0000008f'
                        }}/>
                    </Button>
                    <Button
                    disabled={!userInfo ? true : false || isReqLoading }
                        onClick={async () => {
                        if (id && userInfo && products) {
                            try {
                              const response = await  DeleteProductById(id,userInfo.token);
                              
                              if (response > 200) {
                                  
                                  setSnackText('Error! ,you are not allowed to do this action')
                                  setOpen(true)
                                  return;
                                }
                                const filtered= products.filter(product => product._id !== id);
                                setProducts(filtered ? filtered : products);
                                setSnackText('Product Removed!')
                                setOpen(true)
                            

                            }
                            catch(err){
                                console.log(err);
                                
                            }
  
                    
                        }
                    }}
                        sx={{
                        width: '45%',
                        ml: '5px',
                        border: '1px solid #f30000',
                        color: '#f30000'
                    }}>Delete
                        <DeleteForeverIcon/></Button>
                </Box>
            </Box>
        </Box>
           : <Box>
               Error ,Something went wrong
           </Box> }
        </>

    )
}

export default Productcard
import Box from "@mui/material/Box"
import { useParams } from "react-router-dom"
import MainNavbar from "./MainNavbar"
import About from './About/About';
import Products from "./Products/Products"
import AddProduct from "./AddProduct/AddProduct"

const Main = () => {

    const {route} = useParams()
    return (
        <Box
            sx={{
          
            width: '100%',
            height: '100%'
        }}>
            <MainNavbar/>
          
            
                {route === 'main' && <About/>}
                {route === 'products' && <Products/>}
                {route === 'add-products' && <AddProduct/>}


        </Box>
    )
}

export default Main
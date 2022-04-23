import Box from "@mui/material/Box"
import CBox from "../../../Components/CustomMui/CBox"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom";
import DashboardSideBarLink from './DashboardSideBarLink';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const DashboardSideBar = () => {
    return (
        <Box
            sx={{
            px:'.75em',
            
            justifyContent: 'center',
            zIndex: '0',
            borderTop: '1px solid #8080803b',
            display: {
                xs: 'none',
                sm: 'flex'
            },
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            background: 'white'
        }}>
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                pt: '1em'
            }}>
              

                <DashboardSideBarLink tooltip={'oepn sidebar'} 
                isMarginOff={true} Icon={KeyboardArrowRightIcon} link='/'/>
                
                <DashboardSideBarLink tooltip={'Main'} Icon={HomeIcon} link='/dashboard/main'/>
                <DashboardSideBarLink tooltip={'Products'} Icon={Inventory2Icon} link='/dashboard/products'/>
                <DashboardSideBarLink tooltip={'Add Item'} Icon={AddShoppingCartIcon} link='/dashboard/add-products'/>

                
            </Box>
        </Box>

    )
}

export default DashboardSideBar
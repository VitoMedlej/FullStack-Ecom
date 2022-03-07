import Box from "@mui/material/Box"
import {Link} from "react-router-dom"
import CBox from "../../../Components/CustomMui/CBox"
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from "@mui/material/IconButton";
import CTypo from "../../../Components/CustomMui/CTypo";
import SideBarLink from "../../../Components/Navbar/SideBar/SideBarLink";
import AppBar from "@mui/material/AppBar";
import DashboardLink from "../DashboardLink/DashboardLink";
import HomeIcon from '@mui/icons-material/Home';
import {useState} from "react";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


interface IMainSidebar {
    isSideBarOpen : boolean;
    setSideBarOpen : React.Dispatch < React.SetStateAction < boolean >>
}
const MainSidebar = ({isSideBarOpen, setSideBarOpen} : IMainSidebar) => {

    return (

        <Box
            className='trans'
            sx={{
            zIndex:'5000',
            width: '300px',
            height: '100vh',
            top: '0',
            left: `${isSideBarOpen
                ? '0%'
                : '-100%'}`,
            background: 'white',
            position: 'absolute'
        }}>
            <CBox
                sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
                height: '50px',
                borderTop: '1px solid #e2e2e2',
                borderBottom: '1px solid #e2e2e2'
            }}>
                <Link to='/'>
                    <CTypo
                        sx={{
                        mt: '0'
                    }}
                        fontWeight='500'
                        text='HOME'></CTypo>
                </Link>
                <IconButton
                    onClick={() => setSideBarOpen(false)}
                    sx={{
                    color: 'red'
                }}>
                    <ClearIcon/>
                </IconButton>
            </CBox>

            <Box>
                <DashboardLink
                    handleClick={()=> setSideBarOpen(false)}
                    hover={{
                    background: '#2f6ae533'
                }}
                    link='/dashboard/main'
                    text='Main'
                    icon={< HomeIcon />}/>


                       <DashboardLink
                    handleClick={()=> setSideBarOpen(false)}
                    hover={{
                    background: '#2f6ae533'
                }}
                    link='/dashboard/products'
                    text='Products'
                    icon={< Inventory2Icon />}/>

                     <DashboardLink
                    handleClick={()=> setSideBarOpen(false)}
                    hover={{
                    background: '#2f6ae533'
                }}
                    link='/dashboard/add-products'
                    text='Add Item'
                    icon={< AddShoppingCartIcon />}/>
             
            </Box>
        </Box>

    )
}

export default MainSidebar
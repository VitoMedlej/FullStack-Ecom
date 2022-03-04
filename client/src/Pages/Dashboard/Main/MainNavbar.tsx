import Box from "@mui/material/Box"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from '@mui/material/IconButton';
import CBox from "../../../Components/CustomMui/CBox";
import MainSidebar from "./MainSidebar";
const MainNavbar = () => {
    return (
        <Box
            sx={{
            width: '100%',
            height: '50px',
            position: 'relative',
            background: 'green',
            display: {
                xs: 'flex',
                sm: 'none'
            },
            alignItems: 'center',
        }}>
            <CBox>
                <Box className='fas'>
                    <IconButton sx={{
                        color: 'black'
                    }}>
                        <MenuOpenIcon/>
                    </IconButton>
                </Box>
            </CBox>
         <MainSidebar/>
        </Box>
    )
}

export default MainNavbar
import Box from "@mui/material/Box"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from '@mui/material/IconButton';
import CBox from "../../../Components/CustomMui/CBox";
import MainSidebar from "./MainSidebar";
import {useState} from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CTypo from "../../../Components/CustomMui/CTypo";
import {useSelector, useDispatch} from 'react-redux'
import {toggleBackDropState} from "../../../Redux/Slices/BackDropSlice";
import {RootState} from "../../../Redux/Store";

const MainNavbar = () => {
    const [isSideBarOpen,
        setSideBarOpen] = useState(false)

    const isBackDrop = useSelector((state : RootState) => state.isBackDrop.isBackDrop)
    const dispatch = useDispatch()
    return (
        <Box
            sx={{
            width: '100%',
            height: '52px',
            position: 'relative',
            background: '#2F6AE5',
            display: {
                xs: 'flex',
                sm: 'none'
            },
            alignItems: 'center'
        }}>
            <CBox
                sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box >
                    <IconButton
                        onClick={() => {
                        setSideBarOpen(!isSideBarOpen);
                        // dispatch(toggleBackDropState(!isBackDrop))
                    }}
                        sx={{
                        color: 'white'
                    }}>
                        <MenuOpenIcon/>
                    </IconButton>
                </Box>
                <Box>
                    <IconButton sx={{
                        color: 'white'
                    }}>
                        <WbSunnyIcon/>
                    </IconButton>
                    <IconButton
                        sx={{
                        mx: '5px',
                        color: 'white'
                    }}>
                        <AccountCircleIcon/>
                        <CTypo
                            sx={{
                            mt: '0',
                            mr: '3px'
                        }}
                            text='USER'/>

                    </IconButton>
                </Box>
            </CBox>
            <MainSidebar  setSideBarOpen={setSideBarOpen} isSideBarOpen={isSideBarOpen}/>
        </Box>
    )
}

export default MainNavbar
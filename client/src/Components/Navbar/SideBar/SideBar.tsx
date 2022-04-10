import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CBox from '../../CustomMui/CBox';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import SideBarLink from './SideBarLink';
import CTypo from '../../CustomMui/CTypo';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../../Redux/Store';
import {toggleSideBarState} from '../../../Redux/Slices/SideBarSlice'
import {toggleBackDropState} from '../../../Redux/Slices/BackDropSlice'
import {toggleCartState} from '../../../Redux/Slices/CartSlice';

interface ISideBar {}

const SideBar = ({} : ISideBar) => {

    const isSideBar = useSelector((state : RootState) => state.isSideBar.isSideBar)

    const dispatch = useDispatch()

    const HandleLinkButtonClick = () => {
        dispatch(toggleCartState(false));
        dispatch(toggleSideBarState(false));
        dispatch(toggleBackDropState(false))
    }
    return (
        <AppBar
            className='trans'
            sx={{
            transition: '.3s ease',
            width: `${isSideBar ? '300px' : '0px'}`,
            height: '100vh',
            right: `${isSideBar
                ? '0%'
                : '-100%'}`,
            background: 'white',
            color: 'black',
            display:  {
                xs: 'flex',
                md: 'none'
            } ,
            position: 'absolute',
            zIndex: 3
        }}>
        <Box sx={{display:`${isSideBar ? 'block' : 'none'}`}}>

            <CBox
                sx={{
                borderBottom: '1px solid #e2e2e2',
                position: 'relative',
                height: "30px",
                display: "flex",
                alignItems: 'center',
                justifyContent: "start",
                py: '15px'
            }}>
                <Box onClick={() => HandleLinkButtonClick()} className='logo'>
                    <Link to='/' className='link'>
                        <CTypo
                            fontSize={{
                            xs: '1.2rem'
                        }}
                            sx={{
                            mt: '0',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: '500'
                        }}>EL-VITO</CTypo>
                    </Link>
                </Box>

                <IconButton
                    onClick={() => {
                    dispatch(toggleBackDropState(false));
                    dispatch(toggleSideBarState(false))
                }}
                    sx={{
                    color: 'red',
                    position: 'absolute',
                    right: '2%',
                    m: '4px',
                    padding: '8px',
                    display: {
                        xs: 'flex',
                        sm: 'flex ',
                        md: 'none'
                    }
                }}
                    type='button'>
                    <CloseIcon/>
                </IconButton>

            </CBox>


            <SideBarLink
                HandleLinkButtonClick={HandleLinkButtonClick}
                link='/'
                text={'HOME'}/>
            <SideBarLink
                HandleLinkButtonClick={HandleLinkButtonClick}
                link='/dashboard/main'
                text={'DASHBOARD'}/>
            <SideBarLink
                HandleLinkButtonClick={HandleLinkButtonClick}
                link='/cart'
                text={'CART'}/>
            <SideBarLink
                HandleLinkButtonClick={HandleLinkButtonClick}
                link='/account/login'
                text={'LOGIN'}/>
        </Box>

        </AppBar>
    )
}

export default SideBar
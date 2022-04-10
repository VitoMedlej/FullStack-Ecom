import AppBar from '@mui/material/AppBar';
import CBox from '../CustomMui/CBox';
import {Link, useLocation} from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SideBar from './SideBar/SideBar';
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../Redux/Store';
import {toggleCartState} from '../../Redux/Slices/CartSlice'
import {toggleBackDropState} from '../../Redux/Slices/BackDropSlice'
import {toggleSideBarState} from '../../Redux/Slices/SideBarSlice'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
interface INavBar {}



// const Bg = (theme : string, color?: string, DarkTheme?: string) : string => {
//     if (theme === 'dark') 
//         return `${DarkTheme}` || 'black'
//     else {
//         return `${color || 'white'}`
//     }
// }
// const Color = (theme?: string) => {
//     if (theme === 'dark') 
//         return `white`
//     else 
//         return 'black'
// }

const Navbody = ({} : INavBar) => {
    gsap.registerPlugin(ScrollToPlugin);
    const {pathname} = useLocation();
    const dispatch = useDispatch()
    const isCartOpen = useSelector((state : RootState) => state.isCartOpen.isCartOpen)
    const isBackDrop = useSelector((state : RootState) => state.isBackDrop.isBackDrop)
    const isSideBar = useSelector((state : RootState) => state.isSideBar.isSideBar)
    const HandleHomeButton = () => {
        if (pathname === '/') {
            gsap.to(window, {
                duration: .8,
                scrollTo: "#top"
            })
        }
    }
    return <CBox
        className='limit trans'
        sx={{
        zIndex: '51251251',
        position: 'relative',
        height: '30px',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        py: '15px'
    }}>
        <Box
            sx={{
            display: {
                xs: 'none',
                sm: 'block'
            }
        }}>
            <Link
                onClick={()=>HandleHomeButton()}
            className='Alink' to='/'>
                Home
            </Link>
            <Link className='Alink' to='/account/login'>
                login
            </Link>
            <Link className='Alink' to='/dashboard/main'>
                Dashboard
            </Link>

        </Box>
        <Box
            className='logo'
            sx={{
            right: {
                sm: '50%'
            },
            transform: {
                sm: 'translateX(50%)'
            }
        }}>
            <Link
                onClick={() => {
                    HandleHomeButton()
            }}
                to='/'
                className='link'>
                <Typography
                    sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.3rem'
                }}>EL-VITO</Typography>
            </Link>
        </Box>

        <Box
            sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        }}>
            <Box
                sx={{
                display: 'flex',
                background: {
                    xs: 'white',
                    md: '#f1f1f1'
                }
            }}
                className='searchForm'
                component='form'>
                <Box
                    sx={{
                    display: {
                        xs: 'none',
                        md: 'block'
                    }
                }}>

                    <input placeholder='Search' className='searchInput' type="search"/>
                </Box>
                <IconButton
                    sx={{
                    color: '#3d3d3d'
                }}
                    type='submit'>
                    <SearchIcon/>
                </IconButton>
            </Box>

        </Box>
        <Box sx={{
            display: 'flex'
        }}>
            <IconButton
                onClick={() => {
                dispatch(toggleCartState(!isCartOpen));
                dispatch(toggleBackDropState(!isBackDrop))
            }}
                sx={{
                color: '#3d3d3d',
                m: '4px'
            }}
                type='button'>
                <ShoppingBagOutlinedIcon/>
            </IconButton>
            <IconButton
                sx={{
                color: '#3d3d3d',
                m: '4px',
                display: {
                    xs: 'none',
                    md: 'flex'
                }
            }}
                type='button'>
                <FavoriteBorderOutlinedIcon/>
            </IconButton>
            <IconButton
                onClick={() => {
                if (isBackDrop && isCartOpen) {
                    dispatch(toggleCartState(false));
                    dispatch(toggleBackDropState(false))
                }
                dispatch(toggleBackDropState(!isBackDrop));
                dispatch(toggleSideBarState(!isSideBar));
            }}
                sx={{
                color: '#3d3d3d',
                m: '4px',
                display: {
                    xs: 'flex',
                    md: 'none'
                }
            }}
                type='button'>
                <MenuOutlinedIcon/>
            </IconButton>
        </Box>

        <SideBar/>
    </CBox>;
};

export default Navbody;

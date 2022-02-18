import AppBar from '@mui/material/AppBar';
import CBox from '../CustomMui/CBox';
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from 'react';
import SideBar from './SideBar/SideBar';

const Bg = (theme : string, color?: string, DarkTheme?: string) : string => {
    if (theme === 'dark') 
        return `${DarkTheme}` || 'black'
    else {
        return `${color || 'white'}`
    }
}
const Color = (theme?: string) => {
    if (theme === 'dark') 
        return `white`
    else 
        return 'black'
}



const Navbody = () => {
    const [isOpen ,setOpen] = useState(false)
    return <CBox
    className='limit trans'
        sx={{
            position:'relative',
        height: '30px',
        background: Bg('light'),
        display: 'flex',
        alignItems: 'center',
        color: Color(),
        py: '15px'
    }}>
        <Box
            sx={{
            display: {
                xs: 'none',
                sm: 'block'
            }
        }}>

            <Link className='Alink' to='/'>
                Link1
            </Link>
            <Link className='Alink' to='/'>
                Link1
            </Link>
            <Link className='Alink' to='/'>
                Link1
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
            <Link to='/' className='link'>
                <Typography
                    sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.3rem'
                }}>LOGO</Typography>
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
                background:{xs:'white',sm:'white' ,md:'#f1f1f1'}
            }}
                className='searchForm'
                component='form'>
                <Box
                    sx={{
                    display: {
                        xs: 'none',
                        sm: 'none',
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
        <Box sx={{display:'flex'}}>
            <IconButton
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
                display:{xs:'none',sm:'none',md:'block'}
            }}
                type='button'>
                <FavoriteBorderOutlinedIcon/>
            </IconButton>
            <IconButton
            onClick={()=>setOpen(!isOpen)
            }
                sx={{
               
                color: '#3d3d3d',
                m: '4px',
                display:{xs:'flex',sm:'flex ',md:'none'}
            }}
                type='button'>
                <MenuOutlinedIcon/>
            </IconButton>
        </Box>

           <SideBar setOpen={setOpen} isOpen={isOpen} />
    </CBox>;
};

export default Navbody;

import Navbody from './Navbody';
import USPbar from './USPbar';
import AppBar from '@mui/material/AppBar';
import SideBar from './SideBar/SideBar';
import CartBar from './Cart/CartBar';
import {useState} from 'react';

interface INavbar {
    backdrop : boolean;
    setBackDrop : React.Dispatch < React.SetStateAction < boolean >>
}
const Navbar = ({setBackDrop, backdrop} : INavbar) => {


    return <AppBar
        className='trans appbar'
        sx={{
        boxShadow: 'none',
        background: 'white'
        }}
        position="sticky">
        <USPbar/>

        <CartBar/>
        <Navbody/>

    </AppBar>;
};

export default Navbar;

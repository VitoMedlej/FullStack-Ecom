import Navbody from './Navbody';
import USPbar from './USPbar';
import AppBar from '@mui/material/AppBar';
import SideBar from './SideBar/SideBar';

const Navbar = () => {
  return <AppBar
  className='trans'
  sx={{boxShadow:'none',background:'white'}} position="sticky">
      <USPbar/>
      <Navbody/>

     

     
  </AppBar>
  ;
};


export default Navbar;

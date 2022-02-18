import Navbody from './Navbody';
import USPbar from './USPbar';
import AppBar from '@mui/material/AppBar';

const Navbar = () => {
  return <AppBar sx={{boxShadow:'none',background:'white'}} position="sticky">
      <USPbar/>
      <Navbody/>

     
  </AppBar>;
};


export default Navbar;

import Box from '@mui/material/Box';
import CBox from '../Components/CustomMui/CBox';
import LandingPage from '../Components/LandingPage/LandingPage';
import Categories from '../Components/Categories/Categories';
import Recommended from '../Components/Recommended/Recommended';
import Ad from '../Components/Ad/Ad';

const Home = () => {
    
  return <Box  sx={{}} >
      <LandingPage  />

    <Categories/>
    <Recommended/>
    <Ad/>
  </Box>
  ;

};

export default Home;

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CBox from '../../Components/CustomMui/CBox';
import DashboardSideBar from './DashboardSideBar/DashboardSideBar';
import Main from './Main/Main';

const Dashboard = () => {
    return (
        <Box>

            <Box sx={{position: 'relative',display:'flex'}} className='limit'>

                <DashboardSideBar/>

                <Main/>

            </Box>
        </Box>
    )
}

export default Dashboard
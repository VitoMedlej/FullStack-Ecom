import Box from '@mui/material/Box';

import DashboardSideBar from './DashboardSideBar/DashboardSideBar';
import Main from './Main/Main';

const Dashboard = () => {
    return (
        <Box
            sx={{
            minHeight: '100vh',
            background: '#f7f7f7'
        }}>

            <Box
                sx={{
                    minHeight: '100vh',
                background: '#f7f7f7',
                position: 'relative',
                display: 'flex'
            }}>

                <DashboardSideBar/>
                <Box
                    sx={{
                    width: {
                        xs: '100%',
                        lg: '1200px',
                        margin: '0 auto'
                    }
                }}>

                    <Main/>
                </Box>

            </Box>
        </Box>
    )
}

export default Dashboard
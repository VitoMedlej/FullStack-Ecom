import Box from "@mui/material/Box"
import CBox from "../../../Components/CustomMui/CBox"

const DashboardSideBar = () => {
    return (
        <Box
            sx={{
            height: '100vh',
            width: '60px',
            display: {
                xs: 'none',
                sm: 'block'
            },
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            background: 'red'
        }}>
            <CBox sx={{
                pt: '2em'
            }}>
                asfasf
            </CBox>
        </Box>

    )
}

export default DashboardSideBar
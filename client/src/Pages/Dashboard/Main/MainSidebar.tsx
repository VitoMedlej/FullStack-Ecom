import Box from "@mui/material/Box"
import CBox from "../../../Components/CustomMui/CBox"

const MainSidebar = () => {
    return (
        <Box
            sx={{
            width: '300px',
            height: '100vh',
            top: '0',
            background: 'red',
            position: 'absolute'
        }}>
            <CBox
                sx={{
                height:'50px',
                borderTop: '1px solid',
                borderBottom: '1px solid'
            }}>
                Home</CBox>
        </Box>
    )
}

export default MainSidebar
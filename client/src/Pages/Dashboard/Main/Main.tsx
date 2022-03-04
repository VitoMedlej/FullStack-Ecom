import Box from "@mui/material/Box"
import CBox from "../../../Components/CustomMui/CBox"
import MainNavbar from "./MainNavbar"

const Main = () => {
    return (
        <Box
            sx={{
            background: '#F7F7F7',
            width: '100%',
            height: '100vh'
        }}>
            <MainNavbar/>
            <CBox sx={{
                pt: '2em'
            }}>
                main section
            </CBox>
         
        </Box>
    )
}

export default Main
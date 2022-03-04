import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import {Link, useParams} from "react-router-dom"
import CBox from "../../Components/CustomMui/CBox"
import CButton from "../../Components/CustomMui/CButton"
import CTypo from "../../Components/CustomMui/CTypo"
import LoginForm from "./Login/LoginForm"
import RegisterForm from "./Register/RegisterForm"

const Login = () => {
    const { handler } = useParams();
    console.log('handler: ', handler);

    return (
        <Box>
            <CBox className='limit'>
                <Grid
                    container
                    sx={{
                    mt: '5em',
                    justifyContent: 'center'
                }}>
          

                    <Grid item xs={12} sm={7} md={5}>
                       {handler === 'login' && <LoginForm/>}
                       {handler === 'register' && <RegisterForm/>}

                    </Grid>
                </Grid>
            </CBox>
        </Box>
    )
}

export default Login
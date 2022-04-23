import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import {Link, useNavigate, useParams} from "react-router-dom"
import CBox from "../../Components/CustomMui/CBox"

import LoginForm from "./Login/LoginForm"
import RegisterForm from "./Register/RegisterForm"
import {useEffect} from 'react';
import {useSelector} from "react-redux"
import {RootState} from "../../Redux/Store"

const Login = () => {
    const {handler} = useParams();
    const userInfo = useSelector((state : RootState) => state.userInfo.UserInfo)
    const navigate = useNavigate()
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");

        if (userInfo && loggedInUser) 
            navigate('/dashboard/main')
    }, [])
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
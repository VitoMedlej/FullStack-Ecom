import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import {Link} from "react-router-dom"
import CButton from "../../../Components/CustomMui/CButton"
import CTypo from "../../../Components/CustomMui/CTypo"

const LoginForm = () => {
    return (
        <Box
            sx={{
            borderRadius: '7px',
            py: '1em',
            display: 'flex',
            textAlign: 'center',
            flexDirection: 'column',
            boxShadow: 'rgb(0 0 0 / 15%) 0px 8px 24px',
            width: '100%'
        }}>
            <Box>

                <CTypo
                    sx={{
                    mt: '1.5em'
                }}
                    fontWeight='500'
                    fontSize={{
                    xs: '1.2em'
                }}
                    text='Welcome back!'/>

                <CTypo
                    color='gray'
                    fontWeight='300'
                    fontSize={{
                    xs: '.9em'
                }}
                    text='Please enter your credentials to proceed'/>
            </Box>
            <Box
                sx={{
                width: '100%',
                mt: {
                    xs: '1.5em',
                    md: '3em'
                }
            }}>

                <TextField
                    sx={{
                    width: {
                        xs: '90%',
                        md: '80%'
                    }
                }}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"/>
                <TextField
                    sx={{
                    my: '1em',
                    width: {
                        xs: '90%',
                        md: '80%'
                    }
                }}
                    id="outlined-basic-Password"
                    label="Password"
                    variant="outlined"/>
            </Box>

            <CButton
                hover={{
                background: ' white ',
                color: 'black'
            }}
                background='black'
                color='white'
                sx={{
                width: {
                    xs: '90%',
                    md: '80%'
                },
                margin: '1.5em auto'
            }}
                text='Submit'></CButton>

            <Box
                sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>

                <CTypo
                    fontWeight='300'
                    sx={{
                    mr: '4px',
                    mt: '0'
                }}
                    text=' Dont have an account?'></CTypo>
                <Link to='/account/register'>
                    <CTypo
                        fontWeight='300'
                        color='#0000EE'
                        sx={{
                        mt: '0'
                    }}>
                        create one
                    </CTypo>
                </Link>
            </Box>
        </Box>
    )
}

export default LoginForm
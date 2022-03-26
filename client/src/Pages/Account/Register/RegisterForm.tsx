import {Box, FormControl, TextField} from "@mui/material"
import {Link} from "react-router-dom"
import CButton from "../../../Components/CustomMui/CButton"
import CTypo from "../../../Components/CustomMui/CTypo"
import RegisterHook from "../../../Helpers/Hooks/AccountHandlingHooks/RegisterHook"

const RegisterForm = () => {
    const  {userDetails, handleSubmit}  = RegisterHook()
    return (
        <Box
        component='form'
        onSubmit={(e:any)=>{
            
            e.preventDefault();
            
           console.log('userDetails',userDetails);
           
        
        }}
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
                    text='Welcome!'/>

                <CTypo
                    color='gray'
                    fontWeight='300'
                    fontSize={{
                    xs: '.9em'
                }}
                    text='Please create a new account'/>
            </Box>
        

                <Box
                 onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                    handleSubmit(e)
                }}
                    sx={{
                    width: '100%',
                    mt: {
                        xs: '1.5em',
                        md: '3em'
                    }
                }}>
                    <TextField
                   required
                   value={userDetails.username}
                    name='username'
                        sx={{
                        mb: '1em',
                        width: {
                            xs: '90%',
                            md: '80%'
                        }
                    }}
                        id="outlined-basic-Username"
                        label="Username"
                        variant="outlined"/>
                    <TextField
                    required
                        value={userDetails.email}
                        name='email'
                        sx={{
                        mb: '1em',
                        width: {
                            xs: '90%',
                            md: '80%'
                        }
                    }}
                        id="outlined-basic2"
                        label="Email"
                        variant="outlined"/>
                    <TextField
                    required
                          value={userDetails.password}
                          name='password'
                        sx={{
                        mb: '1em',
                        width: {
                            xs: '90%',
                            md: '80%'
                        }
                    }}
                        id="outlined-basic-Password2"
                        label="Password"
                        variant="outlined"/>
                </Box>

                <CButton
                    isSubmitButton={true}
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
                    text='Create account'></CButton>
     

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
                    text='Already have an account?'></CTypo>
                <Link to='/account/login'>
                    <CTypo
                        fontWeight='300'
                        color='#0000EE'
                        sx={{
                        mt: '0'
                    }}>
                        login
                    </CTypo>
                </Link>
            </Box>
        </Box>
    )
}

export default RegisterForm
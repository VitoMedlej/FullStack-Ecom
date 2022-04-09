import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import {Link} from "react-router-dom"
import CButton from "../../../Components/CustomMui/CButton"
import CTypo from "../../../Components/CustomMui/CTypo"
import LoginHook from "../../../Helpers/Hooks/AccountHandlingHooks/LoginHook"
import ValidateAccountHook from "../../../Helpers/Hooks/AccountHandlingHooks/ValidateAccountHook"
import {useSelector, useDispatch} from 'react-redux';
import {saveUser} from "../../../Redux/Slices/UserSlice"
import {useNavigate} from "react-router-dom";
import {RootState} from "../../../Redux/Store"
import {useEffect} from "react"

// yes , I am ashamed of rewriting the same code over and over... but Who cares?
// it's a presonal project and id never do this on a real one

const LoginForm = () => {
    const navigate = useNavigate()
    const {loginDetails, resetForm, handleSubmit} = LoginHook()
    const {ValidateAccount, setResults, statusCode, results, isLoading} = ValidateAccountHook()
    const userInfo = useSelector((state : RootState) => state.userInfo.UserInfo)


    return (
        <Box
            component='form'
            onSubmit={async(e : any) => {
            e.preventDefault();
            if (!isLoading && loginDetails.email && loginDetails.password) {
                await ValidateAccount(loginDetails)

            }
            // resetForm(true)
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
                    text='Welcome back!'/>

                <CTypo
                    color={statusCode && statusCode > 200
                    ? 'red'
                    : 'gray'}
                    fontWeight='300'
                    fontSize={{
                    xs: '.9em'
                }}
                    text={results
                    ?.message || 'Please enter your credentials to proceed'}/>
            </Box>

            <Box
                onChange={(e : React.ChangeEvent < HTMLInputElement >) => {
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
                    value={loginDetails.email}
                    name='email'
                    type='email'
                    autoComplete="true"
                    sx={{
                    width: {
                        xs: '90%',
                        md: '80%'
                    }
                }}
                    id="outlined-basic1"
                    label="Email"
                    variant="outlined"/>
                <TextField
                    autoComplete="true"
                    type='password'
                    required
                    value={loginDetails.password}
                    name='password'
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
                isSubmitButton={true}
                disabled={isLoading}
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
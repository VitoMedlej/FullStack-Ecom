import Box from "@mui/material/Box"
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import CBox from "../../../../Components/CustomMui/CBox"
import CButton from "../../../../Components/CustomMui/CButton"
import CTypo from "../../../../Components/CustomMui/CTypo"
import { saveUser } from "../../../../Redux/Slices/UserSlice"
import {RootState} from "../../../../Redux/Store"

const About = () => {
    const dispatch = useDispatch()
    const userInfo = useSelector((state : RootState) => state.userInfo.UserInfo)

   
 
    return (
        <CBox sx={{
            pt: '2em'
        }}>

            <CTypo
                text='Main Section'
                fontSize={{
                xs: '1.2em',
                sm: '1.4em'
            }}
                fontWeight='500'
                sx={{
                mt: 0
            }}/>
            <Box
                sx={{
                background: 'white',
                width: '100%',
                mt: '2em',
                py: '1em',
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
            }}>

                <CBox>
                    <CTypo
                        fontWeight="500"
                        fontSize={{
                        xs: '1.2em'
                    }}
                        text='User Details'/> {userInfo
                        ? <Box
                                sx={{
                                display: 'flex',
                                flexDirection: {
                                    xs: 'column',
                                    sm: 'row'
                                },
                                px: '0',
                                my: '2em'
                            }}>

                                <Box
                                    sx={{
                                    width: '150px',
                                    height: '150px'
                                }}>
                                    <img className='img' src={`https://ucarecdn.com/467a9f35-5e55-4dfb-8ac9-3dd567352103/default.JPG`} alt=""/>
                                </Box>
                                <Box
                                    sx={{
                                    px: {
                                        sm: '1em'
                                    }
                                }}>
                                    <CTypo
                                        fontWeight='300'
                                        sx={{
                                        mt: {
                                            xs: '1em',
                                            sm: '0em'
                                        }
                                    }}
                                        text={`${userInfo.username}`}></CTypo>
                                    <CTypo
                                        fontWeight='300'
                                        sx={{
                                        mt: {
                                            xs: '0',
                                            sm: '.1em'
                                        }
                                    }}
                                        text={`${userInfo.email}`}></CTypo>
                                    <CButton
                                        onClick={()=>{
                                            localStorage.removeItem("user")
                                            dispatch(saveUser(null));
                                        }}
                                        margin='1em'
                                        hover={{
                                        background: 'white'
                                    }}
                                        sx={{
                                        boxShadow: '0',
                                        border: '.7px solid'
                                    }}
                                        borderRadius='0'
                                        text='Logout'></CButton>
                                </Box>
                            </Box>
                        : <CBox sx={{
                            px: '0'
                        }}>
                            <CTypo
                                fontWeight='300'
                                text='You Must be logged in to experience full functionalities using this app.'></CTypo>
                            <CTypo text='' fontWeight='300'>

                                <Link className='blue' to='/account/login'>Login</Link>
                            </CTypo>

                        </CBox>}
                </CBox>

            </Box>
            <Box
                sx={{
                background: 'white',
                width: '100%',
                mt: '2em',
                py: '1em',
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
            }}>

                <CBox>
                    <CTypo
                        fontWeight="500"
                        fontSize={{
                        xs: '1.2em'
                    }}
                        text='About This Board'/>
                    <CTypo
                        color='#515151'
                        fontSize={{
                        xs: '.88em',
                        sm: '1em'
                    }}
                        fontWeight="300"
                        text={`I've created this dashboard/admin panel ,Call it whatever you'd like ,Just for me. But why make it public? Well ,I needed a way to make dummy data without writing json manually since it would take years and it's not conventinal now is it?. I could've made an ugly looking platform for personal use but I decided to make this good looking dashboard instead :D,I'll be improving my skills .Also Note that you can neither read nor write data but only view the products. `}/>
                </CBox>
            </Box>
        </CBox>
    )
}

export default About
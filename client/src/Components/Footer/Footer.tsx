import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import CBox from '../CustomMui/CBox';
import CTypo from '../CustomMui/CTypo';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <Box
            sx={{
            mt: '10em',
            py: '2em',
            background: 'black',
            color: 'white'
        }}>
            <CBox className='limit'>
                <Grid justifyContent="space-start" container>
                    <Grid
                        sx={{
                        textAlign: 'left'
                    }}
                        item
                        xs={12}
                        sm={4}
                        lg={3}>

                        <CTypo fontWeight='500' text='USEFUL LINKS'/>

                        <CTypo
                            className='trans'
                            sx={{
                            ':hover': {
                                color: 'white'
                            }
                        }}
                            fontWeight='300'>
                            <Link className='FooterLink' to='/foo'>Home</Link>
                        </CTypo>
                        <CTypo
                            className='trans'
                            sx={{
                            ':hover': {
                                color: 'white'
                            }
                        }}
                            fontWeight='300'>
                            <Link className='FooterLink' to='/foo'>asfasf</Link>
                        </CTypo>
                        <CTypo
                            className='trans'
                            sx={{
                            ':hover': {
                                color: 'white'
                            }
                        }}
                            fontWeight='300'>
                            <Link className='FooterLink' to='/foo'>asfasf</Link>
                        </CTypo>
                    </Grid>
                    <Grid
                        sx={{
                        pt: {
                            xs: '2em',
                            sm: '0'
                        },
                        textAlign: 'left'
                    }}
                        item
                        xs={12}
                        sm={4}
                        lg={3}>

                        <CTypo fontWeight='500' text='INFO'/>

                        <CTypo className='trans' color="#cfcfcfd3" fontWeight='300'>
                            vito.medlej@gmail.com
                        </CTypo>
                        <CTypo className='trans' color="#cfcfcfd3" fontWeight='300'>
                            Phone : 03/3414142
                        </CTypo>
                        <CTypo className='trans' color="#cfcfcfd3" fontWeight='300'>
                            Location : Beirut/Lebanon
                        </CTypo>

                    </Grid>
                    <Grid
                        sx={{
                        pt: {
                            xs: '2em',
                            sm: '0'
                        }
                    }}
                        xs={12}
                        sm={4}
                        lg={6}
                        item>
                        <CTypo fontWeight='500' text='Social Media'/>
                        <CTypo className='trans' color="#cfcfcfd3" fontWeight='300'>

                            <Link
                                className='FooterLink flexed'
                                target='_blank'
                                to={'https://www.facebook.com/vito.medlej.5/'}>

                                <FacebookOutlinedIcon
                                    sx={{
                                    mr: '5px'
                                }}/>
                                Facebook
                            </Link>

                        </CTypo>
                        <Box>

                            <CTypo className='trans' color="#cfcfcfd3" fontWeight='300'>

                                <Link target='_blank' className='FooterLink flexed' to={'/'}>

                                    <GitHubIcon
                                        sx={{
                                        mr: '5px'
                                    }}/>
                                    Github
                                </Link>

                            </CTypo>
                        </Box>
                    </Grid>
                </Grid>
            </CBox>
        </Box>

    )
}

export default Footer
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
                            <Link className='FooterLink' to='/'>Home</Link>
                        </CTypo>
                        <CTypo
                            className='trans'
                            sx={{
                            ':hover': {
                                color: 'white'
                            }
                        }}
                            fontWeight='300'>
                            <Link className='FooterLink' to='/dashboard/main'>Dashboard</Link>
                        </CTypo>
                        <CTypo
                            className='trans'
                            sx={{
                            ':hover': {
                                color: 'white'
                            }
                        }}
                            fontWeight='300'>
                            <Link className='FooterLink' to='/cart'>Cart</Link>
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
                            simplebeirut@gmail.com
                        </CTypo>
                        <CTypo className='trans' color="#cfcfcfd3" fontWeight='300'>
                            Phone : +961 81 826 445
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

                            <a
                                className='FooterLink flexed'
                                target='_blank'
                                href={ 'https://www.facebook.com/simplwbeirutweb'}>

                                <FacebookOutlinedIcon
                                    sx={{
                                    mr: '5px'
                                }}/>
                                Facebook
                            </a>

                        </CTypo>
                        <Box>

                            <CTypo className='trans' color="#cfcfcfd3" fontWeight='300'>

                                <a target='_blank' className='FooterLink flexed' href={'https://github.com/VitoMedlej'}>

                                    <GitHubIcon
                                        sx={{
                                        mr: '5px'
                                    }}/>
                                    Github
                                </a>

                            </CTypo>
                        </Box>
                    </Grid>
                </Grid>
            </CBox>
        </Box>

    )
}

export default Footer

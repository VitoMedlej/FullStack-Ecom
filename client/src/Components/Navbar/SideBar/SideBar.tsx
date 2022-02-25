import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CBox from '../../CustomMui/CBox';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import SideBarLink from './SideBarLink';
import CTypo from '../../CustomMui/CTypo';
import {Link} from 'react-router-dom';

interface ISideBar {
    isOpen : boolean;
    setOpen : React.Dispatch < React.SetStateAction < boolean >>;
}

const SideBar = ({isOpen, setOpen} : ISideBar) => {
    return (
        <AppBar
            className='trans'
            sx={{
            transition: '.3s ease',
            width: '300px',
            height: '100vh',
            right: `${isOpen
                ? '0%'
                : '-100%'}`,
            background: 'white',
            color: 'black',
            display: {
                xs: 'flex',
                md: 'none'
            },
            position: 'absolute',
            zIndex: 3
        }}>
            <CBox
                sx={{
                borderBottom: '1px solid #e2e2e2',
                position: 'relative',
                height: "30px",
                display: "flex",
                alignItems: 'center',
                justifyContent: "end",
                py: '15px'
            }}>
                <Box
                 onClick={() => setOpen(!isOpen)}
                    className='logo'
                    sx={{
                    right: {
                        sm: '50%'
                    },
                    transform: {
                        sm: 'translateX(50%)'
                    }
                }}>
                    <Link to='/' className='link'>
                        <CTypo
                            fontSize={{
                            xs: '1.2rem'
                        }}
                            sx={{
                            mt: '0',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: '500'
                        }}>EL-VITO</CTypo>
                    </Link>
                </Box>

                <IconButton
                    onClick={() => setOpen(!isOpen)}
                    sx={{
                    color: 'red',
                    position: 'absolute',
                    right: '2%',
                    m: '4px',
                    padding: '8px',
                    display: {
                        xs: 'flex',
                        sm: 'flex ',
                        md: 'none'
                    }
                }}
                    type='button'>
                    <CloseIcon/>
                </IconButton>

            </CBox>

            <SideBarLink setOpen={setOpen} link='/ee' text={'HOME'}/>
            <SideBarLink setOpen={setOpen} link='/ee' text={'HOME'}/>
            <SideBarLink setOpen={setOpen} link='/ee' text={'HOME'}/>
            <SideBarLink setOpen={setOpen} link='/ee' text={'HOME'}/>

        </AppBar>
    )
}

export default SideBar
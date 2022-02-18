import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CBox from '../../CustomMui/CBox';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import SideBarLink from './SideBarLink';

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
            background :'white',
            color:'black',
            display : {xs:'flex',md:'none'},
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
                <IconButton
                    onClick={() => setOpen(!isOpen)}
                    sx={{
                    color: 'red',
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
            <CBox>
                <SideBarLink/>
            </CBox>
        </AppBar>
    )
}

export default SideBar
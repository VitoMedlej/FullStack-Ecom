import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link} from 'react-router-dom';
import CBox from '../../CustomMui/CBox';

interface ISideBarLink {
    link : string
    text : string
    setOpen ?: React.Dispatch < React.SetStateAction < boolean >>;
}
const SideBarLink = ({link, text ,setOpen} : ISideBarLink) => {
    return (
        <Link onClick={()=> setOpen && setOpen(false)} className='transed ' to={`${link}`}>
            <CBox >

                <Box
                    sx={{
                    my: '1em',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
                    className='flexed'>{text}
                    <ArrowForwardIosIcon
                        sx={{
                        transform: 'scale(.65)'
                    }}/>
                </Box>
            </CBox>
        </Link>

    )
}

export default SideBarLink
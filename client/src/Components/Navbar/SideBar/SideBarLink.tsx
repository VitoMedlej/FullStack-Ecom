import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link} from 'react-router-dom';
import CBox from '../../CustomMui/CBox';
import {toggleCartState} from '../../../Redux/Slices/CartSlice';
import {useDispatch} from 'react-redux';
import {toggleSideBarState} from '../../../Redux/Slices/SideBarSlice';
import {toggleBackDropState} from '../../../Redux/Slices/BackDropSlice';
import { SetMobileMenuState } from '../../../Redux/Slices/MobileMenuSlice';

interface ISideBarLink {
    link : string
    text : string
    

}
const SideBarLink = ({link, text} : ISideBarLink) => {

    const dispatch = useDispatch()
    const HandleLinkButtonClick = () => {
        dispatch(toggleCartState(false));
        dispatch(toggleSideBarState(false));
        dispatch(toggleBackDropState(false))
        dispatch(SetMobileMenuState(false))
    }
    
    return (
        <Link
            onClick={() => HandleLinkButtonClick()}
            className='transed '
            to={`${link}`}>
            <CBox
                sx={{
                '&:hover': {
                    background: '#8080801f'
                }
            }}>
                <Box
                    sx={{
                    py: '1.25em',
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
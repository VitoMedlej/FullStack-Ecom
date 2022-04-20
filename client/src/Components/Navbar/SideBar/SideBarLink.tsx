import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link} from 'react-router-dom';
import CBox from '../../CustomMui/CBox';
import {toggleCartState} from '../../../Redux/Slices/CartSlice';
import {useDispatch} from 'react-redux';
import {toggleSideBarState} from '../../../Redux/Slices/SideBarSlice';
import {toggleBackDropState} from '../../../Redux/Slices/BackDropSlice';

interface ISideBarLink {
    link : string
    text : string
    HandleLinkButtonClick?: () => void

}
const SideBarLink = ({link, text, HandleLinkButtonClick} : ISideBarLink) => {

    const dispatch = useDispatch()

    return (
        <Link
            onClick={() => HandleLinkButtonClick && HandleLinkButtonClick()}
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
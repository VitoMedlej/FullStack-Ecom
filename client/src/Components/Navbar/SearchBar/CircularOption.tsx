import {Box} from "@mui/material"
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { SetMobileMenuState } from "../../../Redux/Slices/MobileMenuSlice";

interface ICircularOption {
    img : string;
    to : string
   

}
const CircularOption = ({to, img} : ICircularOption) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <Box
            onClick={() => {
            navigate(`${to}`);
            dispatch(SetMobileMenuState(false))
        }}
            sx={{
            width: '30vw',
            mt: '1em',
            cursor: 'pointer',
            height: '30vw',
            maxHeight: '120px',
            maxWidth: '120px',
            borderRadius: '50%'
        }}>
            <img className='img round cursor' src={`${img}`} alt=""/>
        </Box>
    )
}

export default CircularOption
import Box from "@mui/material/Box"
import IconButton from '@mui/material/IconButton';
import {OverridableComponent} from "@mui/material/OverridableComponent";

import {Link} from "react-router-dom";
import CBox from "../../../Components/CustomMui/CBox";
import CTypo from "../../../Components/CustomMui/CTypo";

interface IDashboardLink {
    icon : any
    text : string
    link : string
    hover ?: any
    handleClick ?: ()=> void
}
const DashboardLink = ({icon,handleClick, text, link,hover} : IDashboardLink) => {
    return (

        <Link onClick={ handleClick && handleClick} to={`${link}`}>
            <CBox
            className='trans'
                sx={{
                ':hover' : {
                    ...hover
                },
                display: 'flex',
                alignItems: 'center',
                py: '5px'
            }}>

                    <IconButton
                        sx={{
                        color: '#2f6ae5'
                    }}>
                        {icon}
                    </IconButton>

                    <CTypo
                    fontWeight='400'
                        fontSize={{
                        xs: '1em'
                    }}
                        sx={{
                        mt: '0'
                    }}
                        text={text}/>

            </CBox>
        </Link>

    )
}

export default DashboardLink
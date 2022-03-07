import { IconButton, SvgIconTypeMap, Tooltip } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { Link } from "react-router-dom"



interface IDashboardSideBarLink {
    Icon :  any
    link : string
    isMarginOff ?: boolean
    tooltip ?: string
}
const DashboardSideBarLink = ({Icon,link,tooltip,isMarginOff} : IDashboardSideBarLink) => {
    return (

        <Link to={`${link}`}>
            <Tooltip title={`${tooltip}`} placement="right">
            <IconButton sx={{color:'#535353',mt:`${!isMarginOff && '20px'}`}}>
               <Icon/>
            </IconButton>
            </Tooltip>
        </Link>
    )
}

export default DashboardSideBarLink
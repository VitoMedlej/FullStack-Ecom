import Box from "@mui/material/Box"
import {Link} from "react-router-dom"

type Props = {
    section: string;
}
const BreadCrumbsLink = ({section} : Props) => {
    return (
        <Box sx={{
            my: '2em'
        }}>
            <Link className='px5' to='/'>Home</Link>
            {'>'}
            <Link className='px5' to={`/category/${section}`}>
                {section}
            </Link>
        </Box>
    )
}

export default BreadCrumbsLink
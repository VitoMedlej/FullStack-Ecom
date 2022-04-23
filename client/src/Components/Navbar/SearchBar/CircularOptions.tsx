import { Box } from "@mui/material"
import CTypo from "../../CustomMui/CTypo"


interface ICircularOptions {
    children ?: any;
    title : string
}
const CircularOptions = ({children ,title} : ICircularOptions) => {

    return (
    <Box sx={{my:'1.35em'}}>

        <CTypo
        fontSize={{
        xs: '1.2em',
        sm: '1.5em'
    }}
        fontWeight='500'
        text={title}></CTypo>
        <Box
    sx={{
    display: 'flex',
    justifyContent: {
        xs: 'space-around',
        sm: 'space-evenly'
    }
    }}>
        {children}
        </Box>
    </Box>

    )

}

export default CircularOptions
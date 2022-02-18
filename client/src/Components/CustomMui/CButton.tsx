import { SxProps, Theme } from '@mui/material';
import Button from '@mui/material/Button';


interface CButton {
    text : string;
    background ?: string
    color ?: string
    sx ?: SxProps<Theme> | undefined
    hover ?: any 
    children ?: any
}

const CButton = ({text,background,children,hover,color,sx} : CButton) => {
    return (
        <Button
            variant='contained'
            sx={{
            ...sx,
            ':hover': {
               ...hover
            },
            color: `${color || 'black'}` ,
            fontFamily: 'Poppins , sans-serif',
            border: '1px solid transparent',
            mt: "2em",
            px: '3em',
            fontWeight: '500',
            background: `${background || 'white'}`,
            borderRadius: '100px'
        }}>{text} {children}</Button>
    )
}

export default CButton
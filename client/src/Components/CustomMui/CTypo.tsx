import { SxProps, Theme } from '@mui/material';
import Typography from '@mui/material/Typography';

interface CTypo {
    text ?: string | number
    fontSize ?: {
        xs ?: string,
        sm ?: string,
        md ?: string,
        lg ?: string,
        xl ?: string,

    }
    children ?: any
    fontWeight ?: string | number
    sx ?: SxProps<Theme> | undefined
    color ?: string
    className ?: string
  
    
}
const CTypo = ({text,sx,className,fontSize ,color, children,fontWeight} : CTypo) => {
    return (
        <Typography
        className={className}
            sx={{
            
                mt: '.5em',
            ...sx,
            fontSize,
            fontWeight: fontWeight,
            color:`${color ? color : ''}`,
            fontFamily: 'Poppins , sans-serif'
        }}>
            {text}
            {children}
            </Typography>
    )
}

export default CTypo
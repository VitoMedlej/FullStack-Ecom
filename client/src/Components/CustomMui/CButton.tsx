import {SxProps, Theme} from '@mui/material';
import Button from '@mui/material/Button';

interface CButton {
    text : string;
    background?: string
    color?: string
    sx?: SxProps < Theme > | undefined
    hover?: any
    children?: any
    margin?: string
    borderRadius ?: string
    className?: string
}

const CButton = ({
    text,
    background,
    className,
    margin,
    children,
    hover,
    color,
    borderRadius,
    sx
} : CButton) => {
    return (
        <Button
            variant='contained'
            className={className && className}
            sx={{
            ...sx,
            ':hover': {
                ...hover
            },
            color: `${color || 'black'}`,
            fontFamily: 'Poppins , sans-serif',
            border: '1px solid transparent',
            mt: `${margin || "2em"}`,
            px: '3em',
            fontWeight: '500',
            background: `${background || 'white'}`,
            borderRadius: `${borderRadius || '100px'}`
        }}>{text} {children}</Button>
    )
}

export default CButton
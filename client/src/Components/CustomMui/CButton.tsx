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
    borderRadius?: string
    isSubmitButton?: boolean;
    className?: string
    disabled ?: boolean
}

const CButton = ({
    text,
    disabled,
    isSubmitButton,
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
        disabled={disabled || false}
            type={isSubmitButton ? 'submit' : 'button'}
            variant='contained'
            className={className && className}
            sx={{
            border: '1px solid transparent',
            ...sx,
            ':hover': {
                ...hover
            },
            color: `${color || 'black'}`,
            fontFamily: 'Poppins , sans-serif',
            mt: `${margin || "2em"}`,
            px: '3em',
            fontWeight: '500',
            background: `${background || 'white'}`,
            borderRadius: `${borderRadius || '100px'}`
        }}>{text} {children}</Button>
    )
}

export default CButton
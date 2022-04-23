import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const USPbar = () => {
    return <Box
    id='uspbar'
        sx={{
        width: '100%',
        zIndex: '5125125',
        background: 'black',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center'
    }}>
        <Typography
            sx={{
            color: 'white',
            fontSize:'.9rem',
            py:'5px'
          
        }}>Register now to get 15% off everything! </Typography>
    </Box>;
};

export default USPbar;

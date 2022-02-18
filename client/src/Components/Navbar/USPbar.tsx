import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const USPbar = () => {
    return <Box
        sx={{
        width: '100%',
       
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
          
        }}>Lorem ipsum dolor sit amet!</Typography>
    </Box>;
};

export default USPbar;

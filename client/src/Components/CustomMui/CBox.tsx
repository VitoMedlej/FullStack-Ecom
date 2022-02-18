import Box from '@mui/material/Box';

interface IcBox {
    children ?: any;
    sx ?: any;
    className ?: string
   
}
const CBox = ({children ,sx ,className  } : IcBox) => {
    
    return <Box className={className} sx={{px:'3vw' ,...sx}}>
  {children}
  </Box>;
};

export default CBox;

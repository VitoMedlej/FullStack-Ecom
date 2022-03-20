import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Skeleton from "@mui/material/Skeleton"
import CTypo from "../CustomMui/CTypo"


interface IProductDesc {
    isLoading : boolean
    description ?: string
}
const ProductDesc = ({isLoading ,description} : IProductDesc) => {
    return (
        <Grid md={8} item xs={12}>
            {!isLoading ?
            <>
            <CTypo
                fontWeight='500'
                fontSize={{
                xs: '1.2em',
                sm: '1.4em',
                md: '1.5em'
            }}
                sx={{
                mt: {
                    xs: '3.5em',
                    md: '2em'
                }
            }}
                text=' Description'/>
            <CTypo
                sx={{
                    wordBreak: 'break-all',
                    mt: '1em'
                }}
                fontWeight='300'
                text={`${description}`}/>
                </>
         
         :
        <Box >
         <Skeleton 
         width='200px'
         sx={{
             py:'.35em',
             mt: {
            xs: '3.5em',
            md: '3em'
        }}} variant='text'></Skeleton>

         <Skeleton 
         sx={{width:
            {xs:'100%'},height:'150px'}}
             variant='rectangular'></Skeleton>
        </Box>
            }

        </Grid>
    )
}

export default ProductDesc
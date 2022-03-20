import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import CTypo from '../CustomMui/CTypo';

interface IProductDetails {
    title ?: string
    isLoading : boolean
    weight ?: string
    colors ?: string
    style ?: string
}

const ProductDetails = ({title,style,weight ,colors,isLoading} : IProductDetails) => {


        
    const dummy = [
        {
            title: 'color',
         
        }, {
            title: 'weight',
        }, {
            title: 'style',
        }
    ]
   
    return (
    <>
           {!isLoading && <CTypo
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
                                text='Product Details'/>}
        <Grid container >

        {!isLoading 
        
        ? 
    <>

            <Grid
             item md={2} xs={3}>
                {dummy.map((item : {title:string} ) => {
                    return <CTypo
                        key={`${item.title}`}
                        fontWeight='400'
                        text={`${item.title}`}
                        color='gray'
                        sx={{
                        mt: '0',
                        my: '1em'
                    }}/>
                })}
            </Grid>
            <Grid item md={10} xs={5}>


            <CTypo fontWeight='400'
                        sx={{
                        mt: '0',
                        my: '1em'
                    }} text={`${colors}`}></CTypo> 

            <CTypo fontWeight='400'
                        sx={{
                        mt: '0',
                        my: '1em'
                    }} text={`${weight}`}></CTypo> 
                            <CTypo fontWeight='400'
                        sx={{
                        mt: '0',
                        my: '1em'
                    }} text={`${style}`}></CTypo>    

                {/* {dummy.map((item : {
                    value: string | number
                }) => {
                    return <CTypo
                        fontWeight='400'
                        text={item.value}
                        sx={{
                        mt: '0',
                        my: '1em'
                    }}/>
                })} */}

            </Grid>
    </>
:   <Box sx={{width:'66.6666%',mt:'3em'}}>
        <Skeleton width='200px' variant='text'></Skeleton>
        <Skeleton sx={{mt:'1em'}} width='300px' variant='text'></Skeleton>
        <Skeleton width='350px' variant='text'></Skeleton>
        <Skeleton  width='400px' variant='text'></Skeleton>
    </Box>}
        </Grid>
    </>

    )
}

export default ProductDetails
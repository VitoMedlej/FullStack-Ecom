import Grid from '@mui/material/Grid';
import CTypo from '../CustomMui/CTypo';

interface i {
    title: string
}

const ProductDetails = () => {

    const dummy = [
        {
            title: 'color',
            value: 'red'
        }, {
            title: 'color',
            value: 'red'
        }, {
            title: 'color',
            value: 'red'
        }
    ]
    // ,value : string | number
    return (
        <Grid container >
            <Grid item md={2} xs={3}>
                
                {dummy.map((item : i ) => {
                    return <CTypo
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

                {dummy.map((item : {
                    value: string | number
                }) => {
                    return <CTypo
                        fontWeight='400'
                        text={item.value}
                        sx={{
                        mt: '0',
                        my: '1em'
                    }}/>
                })}

            </Grid>

        </Grid>
    )
}

export default ProductDetails
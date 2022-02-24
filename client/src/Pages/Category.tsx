import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CBox from '../Components/CustomMui/CBox';
import CTypo from '../Components/CustomMui/CTypo';
import Product from '../Components/Product/ProductCard';
import BreadCrumbsLink from '../Components/Product/BreadCrumbsLink';
import {useParams} from 'react-router-dom';
const pic = require('../Helpers/Images/nike.jfif')

const Category = () => {
    const {section} = useParams()

    return (

        <Box component='section'>
            <CBox className='limit'>

                <BreadCrumbsLink section={`${section}`}/>
                <Box>
                    <CTypo
                        fontSize={{
                        xs: '2em'
                    }}
                        text='MEN SHOES (300)'></CTypo>
                </Box>
            </CBox>
            <CBox className='limit'>
                <Grid
                    sx={{
                    width: '100%',
                    mt: '2em'
                }}
                    container>

                    <Grid item xs={12} md={3} lg={2}>
                        fasfasf
                    </Grid>

                    <Grid
                        sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'start'
                    }}
                        item
                        xs={12}
                        md={9}
                        lg={10}>

                        <Product
                            title={'fasfasfasf asfasf asfasf wqr qwr qwrasf asfasf'}
                            price={412}
                            id={54125}
                            category={'shoes'}
                            img={pic}/>
                        <Product
                            title={'fasfasfasf asfasf asfasf wqr qwr qwrasf asfasf'}
                            price={412}
                            id={54125}
                            category={'shoes'}
                            img={pic}/>

                    </Grid>
                </Grid>
            </CBox>
        </Box>
    )
}

export default Category
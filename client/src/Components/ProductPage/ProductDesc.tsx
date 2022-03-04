import Grid from "@mui/material/Grid"
import CTypo from "../CustomMui/CTypo"

const ProductDesc = () => {
    return (
        <Grid md={8} item xs={12}>
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
                mt: '1em'
            }}
                fontWeight='300'
                text={`orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown p rinter took a galley of type and scrambled it to make a type sp ecimen book. It has survived not only five centuries, but also the leap i nto electronic typesetting, remaining essentially unchanged. It was popularised i n the 1960s with the release of Letraset sheets con taining Lorem Ipsum passages, and more recently with desktop publishing software l ike Aldus Page' Maker including versions of Lorem Ipsum`}/>

        </Grid>
    )
}

export default ProductDesc
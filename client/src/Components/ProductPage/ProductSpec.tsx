import Box from "@mui/material/Box"
import CTypo from "../CustomMui/CTypo"

const ProductSpec = () => {
    return (
         true && <Box>
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
                    text='Specifications'/>

                <ul className='ul'>
                    <li>fasfasfasfasf</li>
                    <li>fasfasfasfasf</li>
                    <li>fasfasfasfasf</li>
                </ul>

            </Box>
    )
}

export default ProductSpec
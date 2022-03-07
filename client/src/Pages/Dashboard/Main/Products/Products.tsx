import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import TextField from "@mui/material/TextField"
import CBox from "../../../../Components/CustomMui/CBox"
import CTypo from "../../../../Components/CustomMui/CTypo"
import SearchIcon from '@mui/icons-material/Search';

const Products = () => {
    return (
        <CBox sx={{
            pt: '2em'
        }}>
                       <CTypo text='Product List' fontSize={{xs:'1.2em',sm:'1.4em'}} fontWeight='500' sx={{mt:0}}/>


            <Box
                sx={{
                background: 'white',
                width: '100%',
                mt: '2em',
                pt: '1em',
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
            }}>

                <CBox>
                    <Box
                        sx={{
                        display: 'flex',
                        width: 'max-content',
                    }}
                        className='searchForm2'
                        component='form'>
                        <Box
                            sx={{
                            background: 'white',
                         
                        }}>

                            <input placeholder='Search' className='searchInput' type="search"/>
                        </Box>
                        <IconButton
                            sx={{
                            color: '#3d3d3d'
                        }}
                            type='submit'>
                            <SearchIcon/>
                        </IconButton>
                    </Box>
                </CBox>
                <CBox sx={{mt:'1em',py:'2em',borderTop:'1px solid #8080803b'}}>
                  You haven't added any products yet
                </CBox>
            </Box>
        </CBox>
    )
}

export default Products
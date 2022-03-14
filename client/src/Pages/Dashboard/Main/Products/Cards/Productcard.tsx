import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import CTypo from "../../../../../Components/CustomMui/CTypo"
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const img = require('../../../../../Helpers/Images/shoes.jfif')


interface IProductcard {
    img : string
    title : string
    price : number | string
}




const Productcard = ({img ,title ,price} : IProductcard) => {
    return (

        <Box
            sx={{
            borderRadius: '.25rem',
            boxShadow: '0 0.1rem 0.25rem rgb(0 0 0 / 8%)',
            border: '1px solid rgba(108, 117, 125, 0.25)',
            width: {
                xs: '99%',
                md: '49%',
                lg: '32%'
            },
            height: '100%',
            my:'1.5em',
        }}>
            <Box
                sx={{
                width: '100%',
                height: {
                    xs: '200px',
                    md: '300px'
                }
            }}>
                <img className='img' src={img} alt=""/>
            </Box>
            <Box sx={{

                px: '8px'
            }}>
            <Box sx={{pt:{xs:'5px',sm:'0'}}}>

                <CTypo color='#6c757d' text={`${title}`}></CTypo>
                <CTypo
                sx={{mt:'1px'}}
                color='green'
                    fontSize={{md:'1.1em'}}
                    fontWeight='400'
                    text={`${price}`}></CTypo>
                    </Box>
                <Box
                    sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    my: {
                        xs: '15px',
                        md: '10px'
                    }
                }}>
                    <Button
                        sx={{
                        width: '45%',
                        border: '1px solid rgba(108, 117, 125, 0.25)',
                        color: '#0000008f'
                    }}>edit
                        <EditIcon
                            sx={{
                            color: '#0000008f'
                        }}/>
                    </Button>
                    <Button
                        sx={{
                        width: '45%',
                        ml: '5px',
                        border: '1px solid #f30000',
                        color: '#f30000'
                    }}>Delete
                        <DeleteForeverIcon/></Button>
                </Box>
            </Box>
        </Box>

    )
}

export default Productcard
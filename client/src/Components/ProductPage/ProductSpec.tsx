import Box from "@mui/material/Box"
import Skeleton from "@mui/material/Skeleton"
import CTypo from "../CustomMui/CTypo"

interface IPrdouctSpec {
    isLoading : boolean
    specifications?: string[]
}
const ProductSpec = ({isLoading, specifications} : IPrdouctSpec) => {

    const specArray =  specifications && specifications[0].split(/\r?\n/)
  

    return (

        <Box
            sx={{
            mt: {
                xs: '3.5em',
                md: '2em'
            }
        }}>

            {!isLoading
                ? <Box>

                        {specifications && 
                        <>
                         <CTypo
                            fontWeight='500'
                            fontSize={{
                            xs: '1.2em',
                            sm: '1.4em',
                            md: '1.5em'
                        }}
                            text='Specifications'/> 
                            < ul className = 'ul' > 
                            {specArray && specArray.map(spec=>{
                                return <li key={`${spec}`}>{spec}</li>
                            })}
                            </ul> 
                            </>
                            
                            }
                    </Box>

                : <Box
                    sx={{
                    width: '66.6666%',
                    mt: '3em'
                }}>
                    <Skeleton width='200px' variant='text'></Skeleton>
                    <Skeleton
                        sx={{
                        mt: '1em'
                    }}
                        width='300px'
                        variant='text'></Skeleton>
                    <Skeleton width='300px' variant='text'></Skeleton>
                    <Skeleton width='300px' variant='text'></Skeleton>
                </Box>
}
        </Box>
    )
}

export default ProductSpec
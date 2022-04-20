import { Box, IconButton } from "@mui/material"
import CBox from "../../CustomMui/CBox"
import CTypo from "../../CustomMui/CTypo"
import CircularOption from "./CircularOption"
import CircularOptions from "./CircularOptions"
import CloseIcon from '@mui/icons-material/Close';


interface IMobileSearchMenu {
  isOpen : boolean
  setOpen :  React.Dispatch<React.SetStateAction<boolean>>
  setQuery : React.Dispatch<React.SetStateAction<string>>
  query : string
}
const MobileSearchMenu = ({isOpen ,query ,setQuery ,setOpen}:IMobileSearchMenu) => {
    return (
        <Box

            className='trans'
            sx={{
            display: {
                xs: 'flex',
                md: 'none'
            },
            overflowY: 'scroll',
            width: '100vw',
            height: `${isOpen
                ? '100vh'
                : '0'}`,
            background: 'white',
            position: 'absolute',
            top: '30px',
            left: 0,
            zIndex: '0',
            mt: '30px',
            borderTop: '1px solid #4f4f4f52'
        }}>
            <CBox
                sx={{
                width: '100%',
                flexDirection: 'column',
                display: `${isOpen
                    ? 'flex'
                    : 'none'}`,
                pt: '1.5em'
            }}>
                <CTypo
                    fontSize={{
                    xs: '1.2em',
                    sm: '1.5em'
                }}
                    fontWeight='500'
                    text='Search products'></CTypo>
                <Box
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: '3em'
                }}>
                    <Box
                        sx={{
                        display: 'flex',
                        background: '#f1f1f1',
                        width: '80%'
                    }}
                        className='searchForm trans'
                        component='form'>

                        <input
                            onChange={(e) => setQuery(e.target.value)}
                            value={`${query}`}
                            placeholder='Search'
                            className='searchInput w100'
                            type="search"/>
                    </Box>

                    <IconButton
                        onClick={() => {
                        setOpen(false)
                    }}
                        sx={{
                        color: 'red',
                        right: '2%',
                        m: '4px',
                        padding: '8px',
                        display: {
                            xs: 'flex',
                            sm: 'flex ',
                            md: 'none'
                        }
                    }}
                        type='button'>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                <CircularOptions title='Categories'>
                    <CircularOption/>
                    <CircularOption/>
                    <CircularOption/>
                </CircularOptions>

                <CircularOptions title='Brands'>
                    <CircularOption/>
                    <CircularOption/>
                    <CircularOption/>
                </CircularOptions>

            </CBox>
        </Box>
    )
}

export default MobileSearchMenu
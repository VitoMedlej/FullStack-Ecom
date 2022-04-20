import { Box } from "@mui/material"

const CircularOption = () => {
    return (
        <Box
            sx={{
            width: '30vw',
            mt: '1em',
            cursor: 'pointer',
            height: '30vw',
            maxHeight: '130px',
            maxWidth: '130px',
            borderRadius: '50%',
            background: 'red'
        }}>
            <img
                className='img round cursor'
                src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
                alt=""/>
        </Box>
    )
}

export default CircularOption
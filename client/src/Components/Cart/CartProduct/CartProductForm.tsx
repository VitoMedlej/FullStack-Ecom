import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Box from "@mui/material/Box"

const CartProductForm = () => {
    return (
        <Box
            sx={{
            // mt: {
            //     xs: '.1em',
            //     md: '1em'
            // }
        }}>

            <FormControl
                variant="standard"
                sx={{
                minWidth: 80
            }}>
                <InputLabel id="demo-simple-select-standard-label">Size</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={''}
                    label="size">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl
                variant="standard"
                sx={{
                ml: '1em',
                minWidth: 80
            }}>
                <InputLabel id="demo-simple-select-standard-label">quantity</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={''}
                    label="quantity">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

        </Box>
    )
}

export default CartProductForm
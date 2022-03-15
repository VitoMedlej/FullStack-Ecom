import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react';

type SelectChangeEvent < T = number | string > = (Event & {
    target: {
        value: T;
    };
}) | React.ChangeEvent < HTMLInputElement > 

const SizeSelect = () => {
    const [size,
        setSize] = useState < number | string > (8);

    const handleChange = (event : SelectChangeEvent) => {

        setSize(event.target.value);

    };

    return (
        <Box sx={{
            mt: '1em',
            minWidth: 120
        }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    label="size"
                    onChange={handleChange}>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
export default SizeSelect
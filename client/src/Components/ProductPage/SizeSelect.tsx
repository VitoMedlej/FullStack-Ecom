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
interface ISizeSelect {
    sizes ?: number[]
    size  : number 
    setSize :  React.Dispatch<React.SetStateAction< number>>
}
const SizeSelect = ({sizes ,setSize ,size} :ISizeSelect) => {
  

    const handleChange = (event : SelectChangeEvent) => {
        const parsed = parseInt(`${event.target.value}`)
        setSize(parsed);

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
                    {sizes && sizes.map(size=>{
                  return  <MenuItem key={size} value={size}>{size}</MenuItem>
                     
                    })}
                   
                </Select>
            </FormControl>
        </Box>
    );
}
export default SizeSelect
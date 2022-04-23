import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Box from "@mui/material/Box"
import { useEffect, useState } from 'react';

interface ICartProductForm {
    SelectedQuantity : number;
    SelectedSize :  string
}

const CartProductForm = ({SelectedQuantity,SelectedSize} :ICartProductForm) => {
    const [size,setSize] = useState<string | number>(6)
    const [qty,setQty] = useState(1)

    useEffect(() => {
    if (SelectedQuantity &&SelectedSize ) {

        setQty(SelectedQuantity)
        setSize(`${SelectedSize}`)
    }    
    },[])
    return (
        <Box
            sx={{
            mt: {
                xs: '.25em',
                sm: '.55em'
            }
        }}>

            <FormControl
                variant="standard"
                sx={{
                minWidth: 80
            }}>
                <InputLabel id="demo-simple-select-standard-label">Size</InputLabel>
                <Select
                 size="small"
                    onChange={(e)=>{
                            let value = e.target.value
                            if (value) {
                                setSize(parseInt(`${value}`))
                            } 
                    }}
                    labelId="demo-simple-select-stan3dard-label"
                    id="demo-simple-select-standard2"
                    value={size}
                    label="size">

               {
                   [6,7,8,9,10,11,12,13].map(number=>{
                   return  <MenuItem 
                   key={number}
                   value={number}>{number}</MenuItem>
                   })

               }
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
                 size="small"

                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-s3elect-standard22"
                    onChange={(e)=>{
                        let value = e.target.value
                        if (value) {
                            setQty(parseInt(`${value}`))
                        } 
                    }}
                    value={qty}
                    label="quantity">
                   
                    {
                   [1,2,3,4,5,6].map(number=>{
                   return  <MenuItem 
                   key={number}
                   value={number}>{number}</MenuItem>
                   })

               }
                </Select>
            </FormControl>

        </Box>
    )
}

export default CartProductForm
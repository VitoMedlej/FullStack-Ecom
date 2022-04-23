import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {useState} from 'react';
import CBox from '../../../../../Components/CustomMui/CBox';

interface ISelectForm {
    optionsList : number[] | string[]
    inputLabel : string
    handleSelectChange : (e:SelectChangeEvent<any>) => void
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};



const SelectForm = ({optionsList  ,handleSelectChange, inputLabel} : ISelectForm) => {
 
    const [selectValue,
        setSelectValue] = useState < any > ([]);
    const handleChange = (event : SelectChangeEvent < typeof selectValue >) => {
        const {target: {value}} = event;
        

        setSelectValue(value)
        handleSelectChange(event)
            
    };

    return (
        <CBox sx={{
            mt: '1.5em'
        }}>
            <FormControl sx={{
                width: '100%'
            }}>
                <InputLabel id="demo-multiple-checkbox-label">{`${inputLabel}`}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multip44le-ch2eckbox2"
                    multiple
                    name={`${inputLabel}`}
                    value={selectValue}
                    onChange={handleChange}
                    input={< OutlinedInput label = {
                    `${inputLabel}`
                } />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}>
                    {optionsList.map((option) => (
                        <MenuItem key={option} value={option}>
                            <Checkbox checked={selectValue.indexOf(option) > -1}/>
                            <ListItemText primary={option}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </CBox>
    );
}

export default SelectForm
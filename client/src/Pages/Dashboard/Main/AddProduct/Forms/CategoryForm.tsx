import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from "@mui/material/Select";
import FormControl from '@mui/material/FormControl';
import CBox from '../../../../../Components/CustomMui/CBox';

interface ICategoryForm {
    handleChange : (event : SelectChangeEvent) => void
    stateValue : string
}

const CategoryForm = ({stateValue, handleChange} : ICategoryForm) => {
    return (
        <CBox
            sx={{
            mt: '1.5em',
            
        }}>
            <FormControl sx={{width: '100%'}} >

                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simp213le-select"
                    value={stateValue}
                    name='category'
                    label="Category"
                    onChange={handleChange}>
                    <MenuItem value={'shoes'}>shoes</MenuItem>
                    <MenuItem value={'suits'}>suits</MenuItem>
                    <MenuItem value={'accessories'}>accessories</MenuItem>
                </Select>
            </FormControl>
        </CBox>
    )
}

export default CategoryForm
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
            pt: '1.7em',
            width: {
                xs: '90%',
                sm: '300px'
            }
        }}>
            <FormControl fullWidth>

                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={stateValue}
                    name='category'
                    label="Category"
                    onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </CBox>
    )
}

export default CategoryForm
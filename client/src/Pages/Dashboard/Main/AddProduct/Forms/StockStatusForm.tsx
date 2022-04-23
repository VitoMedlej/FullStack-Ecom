import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CBox from "../../../../../Components/CustomMui/CBox";
import { SelectChangeEvent } from "@mui/material/Select";

interface IStockStatusForm {
    handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void
    stateValue : boolean
}
const StockStatusForm = ({handleChange, stateValue}:IStockStatusForm) => {
  return (
    <CBox sx={{
        pt: '1.5em'
    }}>
        <FormControlLabel
            control={< Checkbox name = 'checked' onChange = {
            handleChange
        }
        checked = {
            stateValue
        } />}
            label="In stock"/>
    </CBox>
  )
}

export default StockStatusForm
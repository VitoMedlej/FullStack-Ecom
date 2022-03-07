import {SelectChangeEvent} from "@mui/material/Select";
import {useState} from "react";

const CreateProductHook = () => {

    const [formData,
        setFormData] = useState({title: "", checked: false, description: "", category: '', Manufacturer: ""})

    function handleChange(e : SelectChangeEvent | (React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement >)) {
        const value = e.target.value
      
        
        setFormData({
            ...formData,
            [e.target.name]: value 
        });
    }
    // const handleSelectChange = (event : SelectChangeEvent) => {
    // setCategory(event.target.value as string); };
    return {handleChange, formData}
}

export default CreateProductHook
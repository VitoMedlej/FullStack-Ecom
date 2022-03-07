import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField";
import CBox from '../../../../Components/CustomMui/CBox';
import CTypo from '../../../../Components/CustomMui/CTypo';
import CButton from '../../../../Components/CustomMui/CButton';
import Button from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
import Form from "./Forms/Form";
import {useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from "@mui/material/Select";
import CategoryForm from './Forms/CategoryForm';
import CreateProductHook from "../../../../Helpers/Hooks/CreateProductHook";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const AddProduct = () => {
    const {handleChange, formData} = CreateProductHook()

    return (
        <CBox
            sx={{
            width: {
                xs: '100%',
                sm: '100%',
                md: '600px'
            },
            pt: '2em',
            margin: '0 auto'
        }}>
            <CTypo
                text='Create Product'
                fontSize={{
                xs: '1.2em',
                sm: '1.4em'
            }}
                fontWeight='500'
                sx={{
                mt: 0
            }}/>

            <Box
                onSubmit={(e : React.FormEvent < HTMLInputElement >) => {
                e.preventDefault();
                console.log(formData);
            }}
                sx={{
                background: 'white',
                mt: '2em',
                py: '1em',
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
            }}
                component='form'>

                <Form
                    placeholder='title'
                    stateValue={formData.title}
                    handleChange={handleChange}
                    formName={'title'}
                    formTitle='Product title'/>
                <Form
                    placeholder='Manufacturer'
                    stateValue={formData.Manufacturer}
                    handleChange={handleChange}
                    formName={'Manufacturer'}
                    formTitle='Manufacturer'/>

                <CategoryForm stateValue={formData.category} handleChange={handleChange}/>

                <Form
                    formType={'textarea'}
                    placeholder='description'
                    stateValue={formData.description}
                    handleChange={handleChange}
                    formName={'description'}
                    formTitle='Product description'/>
                <CBox sx={{pt:'1.5em'}}>
                    <FormControlLabel  control={< Checkbox name='checked' onChange={handleChange} checked={formData.checked} />} label="In stock"/>
                </CBox>
                <CBox>

                    <CButton
                        background='#1976d2'
                        color='white'
                        margin='0'
                        text='Submit'
                        isSubmitButton={true}/>
                </CBox>
            </Box>
        </CBox>
    )
}

export default AddProduct
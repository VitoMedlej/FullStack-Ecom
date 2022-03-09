import Box from "@mui/material/Box"
import CBox from '../../../../Components/CustomMui/CBox';
import CTypo from '../../../../Components/CustomMui/CTypo';
import CButton from '../../../../Components/CustomMui/CButton';
import Form from "./Forms/Form";
import CategoryForm from './Forms/CategoryForm';
import CreateProductHook from "../../../../Helpers/Hooks/CreateProductHook";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ImageForm from "./Forms/ImageForm";
import StockStatusForm from './Forms/StockStatusForm';
import SelectForm from './Forms/SelectForm';

const AddProduct = () => {
    const {handleChange, handleSelectChange, handleCategoryChange, handleCheckChange, handleTextChange, formData, HandleImagesChange} = CreateProductHook()

    const sizes = [
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
    ];
    const optionsList = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder'
    ];
    return (
        <CBox
            sx={{
            width: {
                xs: 'auto',
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
                    handleChange={handleTextChange}
                    formName={'title'}
                    formTitle='Product title'/>
                <Form
                    placeholder='Manufacturer'
                    stateValue={formData.Manufacturer}
                    handleChange={handleTextChange}
                    formName={'Manufacturer'}
                    formTitle='Manufacturer'/>
                <Form
                    placeholder='Price'
                    formType='number'
                    stateValue={formData.price}
                    handleChange={handleTextChange}
                    formName={'price'}
                    formTitle='price'/>

                <Form
                    formType={'textarea'}
                    placeholder='description'
                    stateValue={formData.description}
                    handleChange={handleTextChange}
                    formName={'description'}
                    formTitle='Product description'/>

                <Form
                    formType={'textarea'}
                    placeholder='Specifications'
                    stateValue={formData.specifications}
                    handleChange={handleTextChange}
                    formName={'specifications'}
                    formTitle='Product Specifications'/>

                <CategoryForm stateValue={formData.category} handleChange={handleCategoryChange}/>

                <SelectForm handleSelectChange={handleSelectChange} inputLabel='sizes' optionsList={sizes}/>
                <SelectForm handleSelectChange={handleSelectChange} inputLabel='names' optionsList={optionsList}/>

                <StockStatusForm
                    handleChange={handleCheckChange}
                    stateValue={formData.inStock}/>
                <ImageForm HandleImagesChange={HandleImagesChange}/>
                <CBox
                    sx={{
                    mt: '3em',
                    borderTop: '1px solid #8080805e'
                }}>

                    <CButton
                        background='#1976d2'
                        color='white'
                        margin='1.5em'
                        text='Create product'
                        isSubmitButton={true}/>
                </CBox>
            </Box>
        </CBox>
    )
}

export default AddProduct
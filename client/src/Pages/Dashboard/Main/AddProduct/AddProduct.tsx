import Box from "@mui/material/Box"
import CBox from '../../../../Components/CustomMui/CBox';
import CTypo from '../../../../Components/CustomMui/CTypo';
import CButton from '../../../../Components/CustomMui/CButton';
import Form from "./Forms/Form";
import CategoryForm from './Forms/CategoryForm';
import CreateProductHook from "../../../../Helpers/Hooks/CreateProductHook";
import ImageForm from "./Forms/ImageForm";
import StockStatusForm from './Forms/StockStatusForm';
import SelectForm from './Forms/SelectForm';

const AddProduct = () => {
    const {
        handleSelectChange,
        handleCategoryChange,
        handleCheckChange,
        handleTextChange,
        formData,
        HandleImagesChange
    } = CreateProductHook()

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
    const colors = ['black', 'white', 'red', 'yellow'];
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
                onSubmit={async(e : React.FormEvent < HTMLInputElement >) => {
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

                <CBox
                    sx={{
                    display: 'flex',
                    flexWrap: 'wrap',justifyContent:'space-between'
                }}>

                    <Form
                     required={false}
                        sx={{
                        px: '0',
                        mx: '5px'
                    }}
                        placeholder='weight'
                        stateValue={formData.weight}
                        handleChange={handleTextChange}
                        formName={'weight'}
                        formTitle='Product weight'/>
                    <Form
                     required={false}

                        sx={{
                        px: '0',
                        mx: '5px'
                    }}
                        placeholder='style'
                        stateValue={formData.style}
                        handleChange={handleTextChange}
                        formName={'style'}
                        formTitle='Styles'/>
                    <Form
                     required={false}

                        sx={{
                        px: '0',
                        mx: '5px'
                    }}
                        placeholder='Made in'
                        stateValue={formData.country}
                        handleChange={handleTextChange}
                        formName={'country'}
                        formTitle='Made in'/>
                         <Form
                     required={false}

                           sx={{
                            px: '0',
                            mx: '5px'
                        }}
                    placeholder='Manufacturer'
                    stateValue={formData.Manufacturer}
                    handleChange={handleTextChange}
                    formName={'Manufacturer'}
                    formTitle='Manufacturer'/>

                </CBox>
                <CategoryForm
                    stateValue={formData.category}
                    handleChange={handleCategoryChange}/>

                <SelectForm
                    handleSelectChange={handleSelectChange}
                    inputLabel='sizes'
                    optionsList={sizes}/>

                <SelectForm
                    handleSelectChange={handleSelectChange}
                    inputLabel='colors'
                    optionsList={colors}/>

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
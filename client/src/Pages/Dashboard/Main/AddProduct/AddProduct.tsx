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
import {IformData} from '../../../../Helpers/Hooks/CreateProductHook'
import Snackbar, {SnackbarOrigin} from "@mui/material/Snackbar";
import {useEffect, useState} from "react";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import PostDataHook from '../../../../Helpers/Hooks/PostDataHook'
import {useSelector} from "react-redux";
import {RootState} from "../../../../Redux/Store";

const AddProduct = () => {
    const {PostDataToDB, isLoading, results} = PostDataHook()
    const {
        handleSelectChange,
        handleCategoryChange,
        handleCheckChange,
        handleTextChange,
        formData,
        resetForm,
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
    const userInfo = useSelector((state : RootState) => state.userInfo.UserInfo)

    const colors = ['black', 'white', 'red', 'yellow'];
    const [isOpen,
        setOpen] = useState(false)
    const [color,setColor] = useState('')
    const [snackText,
        setSnackText] = useState('Error! ,something went wrong')
    const handleClick = () => {
        setOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setOpen(false)
            }, 3000);
        }
    }, [isOpen])

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

            <Snackbar
                onClick={() => handleClick()}
                sx={{
                mt: '2em'
            }}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
                open={isOpen}
                autoHideDuration={2000}>
                <Alert
                    sx={{
                    fontSize: '1em',
                    background : color || 'red',
                    color: 'white'
                }}
                    severity={`${color !== 'red'
                    ? 'success'
                    : 'error'}`}>

                    {`${snackText}`}
                </Alert>
            </Snackbar>

            <Box
                onSubmit={async(e : React.FormEvent < HTMLInputElement >) => {
                e.preventDefault();
                if (userInfo) {
                  const responseText = await  PostDataToDB(formData, `${userInfo.token}`);
                  setSnackText(`${responseText}`)
                  setColor('green')
                    resetForm();
                }
                setColor('red')
                setSnackText(`Something went wrong ,please try again.`)
                setOpen(true);
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
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
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
                        disabled={isLoading}
                        background='#1976d2'
                        color='white'
                        margin='1.5em'
                        text='Create product'
                        isSubmitButton={true}></CButton>

                </CBox>
            </Box>
        </CBox>
    )
}

export default AddProduct